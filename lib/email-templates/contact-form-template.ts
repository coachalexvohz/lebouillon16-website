
interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export function generateContactEmailTemplate(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de contact - LeBouillon16</title>
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
        
        .alert-badge {
            display: inline-block;
            background: linear-gradient(45deg, #d4af37, #b8860b);
            color: #1a1a1a;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-align: center;
            width: 100%;
            box-shadow: 0 4px 8px rgba(212, 175, 55, 0.3);
        }
        
        .info-grid {
            background: linear-gradient(135deg, #2d2d2d 0%, #3a3a3a 100%);
            border-radius: 12px;
            padding: 30px;
            margin: 20px 0;
            border: 2px solid #d4af37;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        .info-row {
            display: flex;
            margin-bottom: 20px;
            align-items: flex-start;
            border-bottom: 1px solid #444;
            padding-bottom: 15px;
        }
        
        .info-row:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
        }
        
        .info-label {
            font-weight: bold;
            color: #d4af37;
            min-width: 120px;
            margin-right: 20px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .info-value {
            color: #f5f5f5;
            flex: 1;
            font-size: 16px;
        }
        
        .message-box {
            background: linear-gradient(135deg, #2a2a2a 0%, #404040 100%);
            border-radius: 12px;
            padding: 25px;
            margin: 20px 0;
            border-left: 5px solid #d4af37;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .message-title {
            font-weight: bold;
            color: #d4af37;
            margin-bottom: 15px;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .message-content {
            color: #e0e0e0;
            font-size: 16px;
            line-height: 1.8;
            white-space: pre-wrap;
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
        
        .contact-info {
            color: #d4af37;
            font-size: 14px;
            font-weight: 500;
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
            font-weight: 500;
        }
        
        .priority-high {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: bold;
            display: inline-block;
            margin-left: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
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
            
            .info-grid {
                padding: 20px;
            }
            
            .info-row {
                flex-direction: column;
            }
            
            .info-label {
                min-width: auto;
                margin-right: 0;
                margin-bottom: 5px;
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
            <div class="alert-badge">
                🔔 Nouveau Message de Contact
            </div>
            
            <div class="title">
                Demande de Contact Client
            </div>
            
            <div class="timestamp">
                📅 Reçu le ${data.submittedAt}
            </div>
            
            <div class="info-grid">
                <div class="info-row">
                    <div class="info-label">👤 Nom :</div>
                    <div class="info-value">${data.name}</div>
                </div>
                
                <div class="info-row">
                    <div class="info-label">📧 Email :</div>
                    <div class="info-value">
                        <a href="mailto:${data.email}" style="color: #d4af37; text-decoration: none;">
                            ${data.email}
                        </a>
                    </div>
                </div>
                
                ${data.phone ? `
                <div class="info-row">
                    <div class="info-label">📱 Téléphone :</div>
                    <div class="info-value">
                        <a href="tel:${data.phone}" style="color: #d4af37; text-decoration: none;">
                            ${data.phone}
                        </a>
                    </div>
                </div>
                ` : ''}
                
                <div class="info-row">
                    <div class="info-label">📋 Sujet :</div>
                    <div class="info-value">
                        <strong style="color: #cd853f;">${data.subject}</strong>
                        ${data.subject.toLowerCase().includes('urgent') || data.subject.toLowerCase().includes('réservation') ? 
                          '<span class="priority-high">Priorité</span>' : ''}
                    </div>
                </div>
            </div>
            
            <div class="message-box">
                <div class="message-title">💬 Message du client :</div>
                <div class="message-content">${data.message}</div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">
                Cet email a été généré automatiquement par le formulaire de contact de votre site web.
            </div>
            <div class="contact-info">
                📍 575 Rue Principale, Lachute, QC<br>
                📞 (450) 562-4323<br>
                🌐 lebouillon16.ca
            </div>
        </div>
    </div>
</body>
</html>
  `;
}
