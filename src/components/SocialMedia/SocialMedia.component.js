import {SocialContainer, SocialIcons} from "./SocialMedia.styles";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {CgMail} from "react-icons/cg";
import {AiOutlinePhone} from "react-icons/ai";
import profile from '../../../data/profile.json';

export default function SocialMedia({inFooter}) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href={profile.github}
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href={profile.linkedin}
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href={`mailto:${profile.email}`}
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <CgMail size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href={`tel:${profile.phone}`}
        title={`Call ${profile.phoneDisplay}`}
      >
        <AiOutlinePhone size="2.8rem" />
      </SocialIcons>
    </SocialContainer>
  )}
