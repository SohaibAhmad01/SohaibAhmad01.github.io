import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import {HeaderContainer, Div1, Div2, NavLink, BrandLink, BrandAvatar, BrandName} from './HeaderStyles';
import profile from '../../../data/profile.json';

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href="/">
          <BrandLink aria-label={`${profile.name} home`}>
            <BrandAvatar src={profile.portrait} alt="" />
            <BrandName>@{profile.name.replace(' ', '_').toUpperCase()}</BrandName>
          </BrandLink>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href={route === '/all-projects' ? "/#about" : '#about'}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? '/#approach' : '#approach'}>
            <NavLink>Approach</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? "/#tech" : '#tech'}>
            <NavLink>Skills</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
