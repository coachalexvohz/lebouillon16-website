
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { generateContactEmailTemplate } from '@/lib/email-templates/contact-form-template';
import { generateConfirmationEmailTemplate } from '@/lib/email-templates/confirmation-template';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

// Vérification de la clé API Resend
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not configured');
}

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('Resend initialized with API key:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, language = 'fr' } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name: name.toString().trim(),
        email: email.toString().trim().toLowerCase(),
        phone: phone ? phone.toString().trim() : null,
        subject: subject.toString().trim(),
        message: message.toString().trim(),
        language: language.toString(),
        status: 'new'
      }
    });

    // Prepare email data
    const emailData = {
      name: name.toString().trim(),
      email: email.toString().trim().toLowerCase(),
      phone: phone ? phone.toString().trim() : undefined,
      subject: subject.toString().trim(),
      message: message.toString().trim(),
      submittedAt: new Date().toLocaleString('fr-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Toronto'
      })
    };

    // Send emails using Resend
    try {
      // Send notification email to restaurant owner
      console.log('Sending owner notification email...');
      const ownerEmailResponse = await resend.emails.send({
        from: 'LeBouillon16 <contact@lebouillon16.ca>',
        to: ['lebouillon16@gmail.com', 'coachalexvohz@gmail.com'], // Email du propriétaire + email de test
        subject: `🍴 Nouveau message de contact: ${emailData.subject}`,
        html: generateContactEmailTemplate(emailData),
        replyTo: emailData.email
      });
      console.log('Owner email sent successfully:', ownerEmailResponse);

      // Send confirmation email to the client
      console.log('Sending confirmation email to client...');
      const clientEmailResponse = await resend.emails.send({
        from: 'LeBouillon16 <noreply@lebouillon16.ca>',
        to: [emailData.email],
        subject: `✅ Confirmation de votre message - LeBouillon16`,
        html: generateConfirmationEmailTemplate({
          name: emailData.name,
          subject: emailData.subject,
          message: emailData.message,
          submittedAt: emailData.submittedAt
        })
      });
      console.log('Client confirmation email sent successfully:', clientEmailResponse);

      console.log('All emails sent successfully via Resend');
    } catch (emailError) {
      console.error('Failed to send emails via Resend:', emailError);
      console.error('Email error details:', JSON.stringify(emailError, null, 2));
      // On continue même si l'email échoue, le contact est déjà sauvé
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès',
        id: contact.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint is working' },
    { status: 200 }
  );
}
