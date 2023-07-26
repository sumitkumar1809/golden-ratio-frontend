import {
  Logo,
  NavAbout,
  NavContact,
  NavHome,
  NavMoviesShows,
  NavNewsEvents,
  NavSocial,
  NavTeam,
} from '../../images';
import {
  NavbarMenu,
  NavbarMenuItem,
  NavbarStyled,
  MobileNavbar,
  MobileNavbarMenu,
  PageWrapper,
} from './Navbar.styled';
import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { ContainerCustom } from '../../styles/Utils.styled';
const Navbar = ({ black }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const clickHandler = (path) => {
    window.location.href = path;
  };
  // Get a current route
  const currentRoute = window.location.pathname;

  const Menu = [
    {
      name: 'Home',
      path: '/',
      icon: NavHome,
    },
    // {
    //   name: 'About Us',
    //   path: '/about',
    //   icon: NavAbout,
    // },
    {
      name: 'Our Team',
      path: '/team',
      icon: NavTeam,
    },
    {
      name: 'Our Portfolio',
      path: '/portfolio',
      icon: NavMoviesShows,
    },
    {
      name: 'News & Events',
      path: '/news',
      icon: NavNewsEvents,
    },
    {
      name: 'Contact Us',
      path: '/contact',
      icon: NavContact,
    },
    {
      name: 'Social Media',
      path: '/#social',
      icon: NavSocial,
    },
  ];

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
  });

  useEffect(() => {
    if (currentRoute === '/') {
      if (window.location.hash === '#social') {
        // scroll to the div with id social
        // remove the hash from the url
        setTimeout(() => {
          window.scrollTo(0, document.getElementById('social').offsetTop);
          // window.location.hash = 'social';
        }, 1000);
      }
    }
  }, [currentRoute]);

  return (
    <PageWrapper>
      <ContainerCustom>
        <NavbarStyled black={black} sticky={sticky}>
          <div>
            <img src={Logo} alt='Logo' onClick={() => clickHandler('/')} />
          </div>
          <MobileNavbar onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </MobileNavbar>
          <NavbarMenu>
            {Menu.map((item, index) => (
              <span key={index}>
                {item.path === currentRoute ? (
                  <NavbarMenuItem
                    key={index}
                    active
                    onClick={() => clickHandler(item.path)}>
                    <img src={item.icon} alt={item.name} />
                    {item.name}
                    <span />
                  </NavbarMenuItem>
                ) : (
                  <NavbarMenuItem
                    key={index}
                    onClick={() => clickHandler(item.path)}>
                    <img src={item.icon} alt={item.name} />
                    {item.name}
                    <span />
                  </NavbarMenuItem>
                )}
              </span>
            ))}
            {currentRoute === '/search' ? (
              <NavbarMenuItem active onClick={() => clickHandler('/search')}>
                <FaSearch />
              </NavbarMenuItem>
            ) : (
              <NavbarMenuItem onClick={() => clickHandler('/search')}>
                <FaSearch />
              </NavbarMenuItem>
            )}
          </NavbarMenu>
        </NavbarStyled>

        {isOpen && (
          <MobileNavbarMenu black={black} sticky={sticky}>
            {Menu.map((item, index) => (
              <span key={index}>
                {item.path === currentRoute ? (
                  <NavbarMenuItem
                    key={index}
                    active
                    onClick={() => clickHandler(item.path)}>
                    <img src={item.icon} alt={item.name} />
                    {item.name}
                    <span />
                  </NavbarMenuItem>
                ) : (
                  <NavbarMenuItem
                    key={index}
                    onClick={() => clickHandler(item.path)}>
                    <img src={item.icon} alt={item.name} />
                    {item.name}
                    <span />
                  </NavbarMenuItem>
                )}
              </span>
            ))}
            {currentRoute === '/search' ? (
              <NavbarMenuItem active onClick={() => clickHandler('/search')}>
                Search
              </NavbarMenuItem>
            ) : (
              <NavbarMenuItem onClick={() => clickHandler('/search')}>
                Search
              </NavbarMenuItem>
            )}
          </MobileNavbarMenu>
        )}
      </ContainerCustom>
    </PageWrapper>
  );
};

export default Navbar;
