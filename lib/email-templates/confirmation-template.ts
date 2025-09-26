
interface ConfirmationEmailData {
  name: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export function generateConfirmationEmailTemplate(data: ConfirmationEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation de votre message - LeBouillon16</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #f5f5f5;
            background-color: #1a1a1a;
            margin: 0;
            padding: 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
        
        .header {
            background: linear-gradient(135deg, #d4af37 0%, #b8860b 50%, #cd853f 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="20" cy="20" r="1" fill="rgba(0,0,0,0.1)"/><circle cx="50" cy="50" r="1.5" fill="rgba(0,0,0,0.1)"/><circle cx="80" cy="30" r="1" fill="rgba(0,0,0,0.1)"/><circle cx="30" cy="70" r="1" fill="rgba(0,0,0,0.1)"/><circle cx="70" cy="80" r="1.5" fill="rgba(0,0,0,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
            opacity: 0.2;
        }
        
        .logo {
            font-size: 32px;
            font-weight: bold;
            color: #1a1a1a;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
        }
        
        .tagline {
            font-size: 16px;
            color: #2d2d2d;
            font-weight: 500;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px 30px;
            background-color: #1a1a1a;
        }
        
        .title {
            font-size: 24px;
            font-weight: bold;
            color: #d4af37;
            margin-bottom: 20px;
            text-align: center;
            text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
        }
        
        .success-badge {
            display: inline-block;
            background: linear-gradient(45deg, #4caf50, #45a049);
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
            width: 100%;
            box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .greeting {
            font-size: 18px;
            color: #e0e0e0;
            margin-bottom: 25px;
            text-align: center;
        }
        
        .message-summary {
            background: linear-gradient(135deg, #2d2d2d 0%, #3a3a3a 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            border: 2px solid #d4af37;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        .summary-title {
            font-weight: bold;
            color: #d4af37;
            margin-bottom: 15px;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .summary-content {
            color: #e0e0e0;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        
        .message-content {
            background: linear-gradient(135deg, #2a2a2a 0%, #404040 100%);
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #cd853f;
            color: #f0f0f0;
            font-style: italic;
            line-height: 1.7;
        }
        
        .next-steps {
            background: rgba(212, 175, 55, 0.1);
            border: 2px solid #d4af37;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            text-align: center;
        }
        
        .next-steps h3 {
            color: #d4af37;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .next-steps p {
            color: #e0e0e0;
            margin-bottom: 20px;
            line-height: 1.6;
        }
        
        .contact-details {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 25px 0;
            border: 1px solid #444;
        }
        
        .contact-row {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: #d4af37;
            font-weight: 500;
        }
        
        .contact-row:last-child {
            margin-bottom: 0;
        }
        
        .contact-icon {
            margin-right: 12px;
            font-size: 16px;
        }
        
        .footer {
            background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
            padding: 30px;
            text-align: center;
            border-top: 2px solid #d4af37;
        }
        
        .footer-text {
            color: #888;
            font-size: 14px;
            margin-bottom: 15px;
        }
        
        .signature {
            color: #d4af37;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }
        
        .timestamp {
            background: rgba(212, 175, 55, 0.1);
            border: 1px solid #d4af37;
            border-radius: 8px;
            padding: 12px;
            margin: 20px 0;
            text-align: center;
            color: #d4af37;
            font-size: 14px;
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .contact-details {
                padding: 20px;
            }
            
            .next-steps {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">🍴 LE BOUILLON 16</div>
            <div class="tagline">Restaurant Gastronomique • Lachute</div>
        </div>
        
        <div class="content">
            <div class="success-badge">
                ✅ Message bien reçu !
            </div>
            
            <div class="title">
                Merci pour votre message
            </div>
            
            <div class="greeting">
                Bonjour <strong style="color: #d4af37;">${data.name}</strong>,
            </div>
            
            <div class="greeting">
                Nous avons bien reçu votre message et nous vous remercions de votre intérêt pour LeBouillon16.
            </div>
            
            <div class="message-summary">
                <div class="summary-title">📋 Résumé de votre demande</div>
                <div class="summary-content">
                    <strong>Sujet :</strong> ${data.subject}
                </div>
                <div class="message-content">
                    "${data.message}"
                </div>
            </div>
            
            <div class="timestamp">
                📅 Envoyé le ${data.submittedAt}
            </div>
            
            <div class="next-steps">
                <h3>🚀 Prochaines étapes</h3>
                <p>
                    Notre équipe examine votre demande et vous répondra dans les plus brefs délais, 
                    généralement sous 24-48 heures.
                </p>
                <p>
                    Pour une réponse plus rapide ou pour une réservation, n'hésitez pas à nous appeler 
                    directement au <strong style="color: #d4af37;">(450) 562-4323</strong>.
                </p>
            </div>
            
            <div class="contact-details">
                <div class="contact-row">
                    <span class="contact-icon">📍</span>
                    575 Rue Principale, Lachute, QC
                </div>
                <div class="contact-row">
                    <span class="contact-icon">📞</span>
                    (450) 562-4323
                </div>
                <div class="contact-row">
                    <span class="contact-icon">🌐</span>
                    lebouillon16.ca
                </div>
                <div class="contact-row">
                    <span class="contact-icon">📱</span>
                    Facebook Messenger disponible
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Au plaisir de vous recevoir bientôt dans notre établissement !
            </div>
            <div class="signature">
                L'équipe du Bouillon 16 🍴
            </div>
            <div class="footer-text" style="margin-top: 20px; font-size: 12px;">
                Ceci est un message automatique de confirmation. Merci de ne pas répondre à cet email.
            </div>
        </div>
    </div>
</body>
</html>
  `;
}
