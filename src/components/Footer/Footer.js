import React from 'react';
import {
  FooterWrapper,
  SocialIconsContainer
} from './FooterStyles';
import SocialMedia from "../SocialMedia/SocialMedia.component";
import profile from '../../../data/profile.json';
import {ContactLine} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <SocialIconsContainer>
        <SocialMedia inFooter/>
      </SocialIconsContainer>
      <ContactLine>
        {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={`tel:${profile.phone}`}>{profile.phoneDisplay}</a>
      </ContactLine>
    </FooterWrapper>
  );
};

export default Footer;
