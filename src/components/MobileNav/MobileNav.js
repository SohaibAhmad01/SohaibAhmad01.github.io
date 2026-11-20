import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {FiBriefcase, FiCode, FiGrid, FiHome, FiUser} from 'react-icons/fi';
import {MobileNavBar, MobileNavLink, MobileNavLabel} from './MobileNavStyles';

const items = [
  {label: 'Overview', screen: 'overview', href: '/', Icon: FiHome},
  {label: 'About', screen: 'about', href: '/#about', Icon: FiUser},
  {label: 'Approach', screen: 'approach', href: '/#approach', Icon: FiBriefcase},
  {label: 'Projects', screen: 'projects', href: '/all-projects', Icon: FiGrid},
  {label: 'Skills', screen: 'skills', href: '/#tech', Icon: FiCode},
];

const getScreenForPath = (path) => {
  if (path.startsWith('/all-projects') || path.startsWith('/projects/')) return 'projects';
  if (path.includes('#about')) return 'about';
  if (path.includes('#approach')) return 'approach';
  if (path.includes('#projects')) return 'projects';
  if (path.includes('#tech')) return 'skills';
  return 'overview';
};

const MobileNav = () => {
  const router = useRouter();
  const isProjectRoute = router.route === '/all-projects' || router.route.startsWith('/projects/');
  const [activeScreen, setActiveScreen] = useState(isProjectRoute ? 'projects' : 'overview');

  useEffect(() => {
    setActiveScreen(getScreenForPath(router.asPath || '/'));
  }, [router.asPath]);

  const handleSelect = (href) => {
    router.push(href, href, {shallow: true, scroll: false});
  };

  return (
    <MobileNavBar aria-label="Mobile navigation">
      {items.map(({label, screen, href, Icon}) => (
        <MobileNavLink
          aria-label={label}
          aria-current={activeScreen === screen ? 'page' : undefined}
          key={screen}
          onClick={() => handleSelect(href)}
          title={label}
          type="button"
        >
          <Icon aria-hidden="true" size="2.2rem" strokeWidth={1.8} />
          <MobileNavLabel>{label}</MobileNavLabel>
        </MobileNavLink>
      ))}
    </MobileNavBar>
  );
};

export default MobileNav;
