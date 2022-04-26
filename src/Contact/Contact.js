import React from "react";
import {
  ContactContainer,
  ContactLink,
  ContactMessage,
  ContactWrapper,
  SectionTitle,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactContainer>
        <ContactMessage>I am in search of work</ContactMessage>
        <ContactMessage>Please contact me</ContactMessage>
        <ContactLink href="mailto:phanfranco@yahoo.com">
          Get In Touch
        </ContactLink>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
