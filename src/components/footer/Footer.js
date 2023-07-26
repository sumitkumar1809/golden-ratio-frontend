import { ContainerCustom } from '../../styles/Utils.styled';
import {
  AddressWrapper,
  CopyrightWrapper,
  EmailWrapper,
  FooterFull,
  FooterWrapper,
  LogoWrapper,
  QuickLinksWrapper,
} from './Footer.styled';
import { Logo } from '../../images';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../banner/Banner.styled';

const Footer = () => {
  const history = useNavigate();
  const clickHandler = (path) => {
    history(path);
  };
  const socialHandler = (path) => {
    // open path on new tab
    window.open(path, '_blank');
  };
  return (
    <PageWrapper>
      <FooterFull>
        <ContainerCustom>
          <FooterWrapper>
            <LogoWrapper>
              <img src={Logo} alt='' onClick={() => clickHandler('/')} />
            </LogoWrapper>
            <QuickLinksWrapper>
              <h3>Quick Links</h3>
              <div>
                <div>
                  {/* <p onClick={() => clickHandler('/about')}>About Us</p> */}
                  <p onClick={() => clickHandler('/portfolio')}>
                    Our Portfolio
                  </p>
                  <p onClick={() => clickHandler('/contact')}>Contact Us</p>
                </div>

                <div>
                  <p onClick={() => clickHandler('/team')}>Our Team</p>
                  <p onClick={() => clickHandler('/news')}>News &amp; Events</p>
                </div>
              </div>
            </QuickLinksWrapper>
            <EmailWrapper>
              {/* <h3>Email Us at</h3>
            <p>EnterEmailHere@email.com</p> */}
              <h3>Our Social Media Presence</h3>
              <div>
                <CgFacebook
                  onClick={() =>
                    socialHandler(
                      'https://www.facebook.com/goldenratiofilmssg/'
                    )
                  }
                />
                <AiFillInstagram
                  onClick={() =>
                    socialHandler(
                      'https://www.instagram.com/goldenratiofilmsg/'
                    )
                  }
                />
                <AiOutlineTwitter
                  onClick={() => socialHandler('https://twitter.com/grfilmssg')}
                />
                <AiFillLinkedin
                  onClick={() =>
                    socialHandler(
                      'https://sg.linkedin.com/company/golden-ratio-films-sg'
                    )
                  }
                />
              </div>
            </EmailWrapper>
            <AddressWrapper>
              <h3>Head Office</h3>
              <address>
                <p>Vistas Media Capital Pte. Ltd.</p>
                <p>958 Club Street</p>
                <p>Singapore 069463</p>
              </address>
            </AddressWrapper>
          </FooterWrapper>
          <CopyrightWrapper>
            <p>&copy; Copyright Golden Ratio Films, All Rights Reserved</p>
            <p>
              Site by: <span>Nyx Wolves Pvt. Ltd.</span>
            </p>
          </CopyrightWrapper>
        </ContainerCustom>
      </FooterFull>
    </PageWrapper>
  );
};

export default Footer;
