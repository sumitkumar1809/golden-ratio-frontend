import React from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  ContactCard,
  ContactCardHolder,
  ContactInfoSection,
  Social,
} from './ContactInfo.styled';
// import { MailIcon, PhoneIcon, WebIcon } from '../../images';
import { WebIcon } from '../../images';
import { RiFacebookFill } from 'react-icons/ri';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

const ContactInfo = () => {
  const socialHandler = (path) => {
    // open path on new tab
    window.open(path, '_blank');
  };
  return (
    <ContainerCustom>
      <ContactInfoSection>
        <ContactCardHolder>
          {/* <ContactCard>
            <span>
              <img src={MailIcon} alt='Email Icon' />
            </span>
            <h3>Email us at</h3>
            <div>
              <p>ashfduiasfhu@uauas.com</p>
              <p>incididunt ut labore</p>
            </div>
            <div>
              <p>sadfaau@uauas.com</p>
              <p>incididunt ut labore</p>
            </div>
          </ContactCard>
          <ContactCard>
            <span>
              <img src={PhoneIcon} alt='Phone Icon' />
            </span>
            <h3>Call us at</h3>
            <div>
              <p>12435231557543</p>
              <p>incididunt ut labore</p>
            </div>
            <div>
              <p>1515634123554</p>
              <p>incididunt ut labore</p>
            </div>
          </ContactCard> */}
          <ContactCard>
            <span>
              <img src={WebIcon} alt='Social Icon' />
            </span>
            <h3>Follow us at</h3>
            <Social
              onClick={() =>
                socialHandler('https://www.facebook.com/goldenratiofilmssg/')
              }>
              <RiFacebookFill />
              Facebook
            </Social>
            <Social
              onClick={() =>
                socialHandler('https://www.instagram.com/goldenratiofilmsg/')
              }>
              <AiFillInstagram />
              Instagram
            </Social>
            <Social
              onClick={() => socialHandler('https://twitter.com/grfilmssg')}>
              <AiOutlineTwitter />
              Twitter &nbsp; &nbsp;
            </Social>
            <Social
              onClick={() =>
                socialHandler(
                  'https://sg.linkedin.com/company/golden-ratio-films-sg'
                )
              }>
              <AiFillLinkedin />
              Linkedin &nbsp;
            </Social>
          </ContactCard>
        </ContactCardHolder>
      </ContactInfoSection>
    </ContainerCustom>
  );
};

export default ContactInfo;
