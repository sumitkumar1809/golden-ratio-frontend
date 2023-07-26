import styled from 'styled-components';
// import ContactInfo from '../components/contactinfo/ContactInfo';
import FormContainer from '../components/formcontainer/FormContainer';
import LocationSection from '../components/locationsection/LocationSection';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PageBanner from '../components/pagebanner/PageBanner';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';

const ContactPage = () => {
  const PageWrapper = styled.div`
    background: ${({ theme }) => theme.colors.primary_dark_black};
    color: ${({ theme }) => theme.colors.primary_white};
  `;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <>
      {isLoaded ? (
        <PageWrapper>
          <Navbar black />
          <PageBanner
            goldText={'Us'}
            headText={'Contact'}
            bgText={'CONTACT'}
            textAlign={'left'}
          />
          <FormContainer />
          <LocationSection />
          {/* <ContactInfo /> */}
          <Footer />
        </PageWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ContactPage;
