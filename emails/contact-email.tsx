// emails/contact-email.tsx
import React from 'react';
import { Html, Head, Body, Container, Text, Heading } from '@react-email/components';

interface ContactEmailProps {
  from_name: string;
  from_email: string;
  phone_number: string;
  message: string;
  subject: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  from_name,
  from_email,
  phone_number,
  message,
  subject
}) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Heading>New Contact Form Submission</Heading>
          <Text>Name: {from_name}</Text>
          <Text>Email: {from_email}</Text>
          <Text>Phone: {phone_number}</Text>
          <Text>Subject: {subject}</Text>
          <Text>Message: {message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;