import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  from_name?: string;
  from_email?: string;
  phone_number?: string;
  message?: string;
  subject?: string;
}

export const ContactEmail = ({
  from_name = "John Doe",
  from_email = "john@example.com",
  phone_number = "+1234567890",
  message = "This is a sample message from the contact form.",
  subject = "Sample Subject",
}: ContactEmailProps) => {
  const previewText = `New contact form submission from ${from_name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
                {/* Logo at the top */}
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/medilog-f77ea.appspot.com/o/horizontal-logo-color.png?alt=media&token=f7925493-7d5f-4638-8e78-840dbb938230" // Your logo URL
            alt="Company Logo"
            width="200"
            height="50"
            style={{
              display: 'block',
              margin: '0 auto 20px',
              maxWidth: '100%'
            }}
          />
           
          </Section>
          
          <Section style={section}>
            <Heading style={h2}>New Contact Form Inquiry</Heading>
            <Text style={text}>
              You have received a new contact form submission with the following details:
            </Text>
          </Section>

          <Section style={infoSection}>
            <div style={infoItem}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{from_name}</Text>
            </div>
            
            <div style={infoItem}>
              <Text style={label}>Email:</Text>
              <Link href={`mailto:${from_email}`} style={link}>
                {from_email}
              </Link>
            </div>
            
            <div style={infoItem}>
              <Text style={label}>Phone:</Text>
              <Text style={value}>{phone_number}</Text>
            </div>
            
            <div style={infoItem}>
              <Text style={label}>Subject:</Text>
              <Text style={value}>{subject}</Text>
            </div>
          </Section>

          <Hr style={hr} />

          <Section style={messageSection}>
            <Heading style={h3}>Message:</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #f0f0f0',
  borderRadius: '8px',
  padding: '45px',
  margin: '40px auto',
  maxWidth: '600px',
};

const logoSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',

};

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px 0',
};

const h3 = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 12px 0',
};

const section = {
  margin: '24px 0',
};

const text = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px 0',
};

const infoSection = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  padding: '20px',
  margin: '20px 0',
};

const infoItem = {
  display: 'flex',
  marginBottom: '12px',
  alignItems: 'center',
};

const label = {
  color: '#374151',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 12px 0 0',
  minWidth: '70px',
};

const value = {
  color: '#1f2937',
  fontSize: '14px',
  margin: '0',
};

const link = {
  color: '#3b82f6',
  fontSize: '14px',
  textDecoration: 'underline',
};

const messageSection = {
  margin: '24px 0',
};

const messageText = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '6px',
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '24px',
  padding: '16px',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '24px 0',
};

const footer = {
  textAlign: 'center' as const,
  margin: '32px 0 0 0',
};

const footerText = {
  color: '#9ca3af',
  backgroundColor: "#0d0d0d",
  padding:"20px",
  fontSize: '12px',
  margin: '0',
};