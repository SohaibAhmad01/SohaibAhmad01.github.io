import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import {HeaderContainer, Div1, Div2, NavLink, BrandLink, BrandAvatar, BrandName, MobileHeaderSocial} from './HeaderStyles';
import profile from '../../../data/profile.json';

const Header = () => {
  const { route } = useRouter();
  const sectionHref = (section) => route === '/' ? `#${section}` : `/#${section}`;

  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href="/">
          <BrandLink aria-label={`${profile.name} home`}>
            <BrandAvatar src={profile.portrait} alt="" />
            <BrandName>@{profile.name.replace(' ', '_').toLowerCase()}</BrandName>
          </BrandLink>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href={sectionHref('about')}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href={sectionHref('projects')}>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={sectionHref('approach')}>
            <NavLink>Approach</NavLink>
          </Link>
        </li>
        <li>
          <Link href={sectionHref('tech')}>
            <NavLink>Skills</NavLink>
          </Link>
        </li>
      </Div2>
      <MobileHeaderSocial>
        <SocialMedia />
      </MobileHeaderSocial>
    </HeaderContainer>
  )
};

export default Header;
