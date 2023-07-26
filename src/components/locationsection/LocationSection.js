import { LocationIcon } from '../../images';
import { ContainerCustom } from '../../styles/Utils.styled';
import {
  LocationHolder,
  Locations,
  LocationSectionWrapper,
  MapHolder,
  TitleSection,
} from './LocationSection.styled';

const LocationSection = () => {
  return (
    <ContainerCustom>
      <LocationSectionWrapper>
        <TitleSection>
          <h2>Office Locations</h2>
        </TitleSection>
        <LocationHolder>
          <Locations>
            <div>
              <img src={LocationIcon} alt='Location Icon' />
            </div>
            <div>
              <h3>Corporate Office</h3>
              <p>
                <a
                  href='https://vistasmediacapital.com/'
                  target='_blank'
                  rel='noreferrer'>
                  Vistas Media Capital Pte. Ltd.{' '}
                </a>
              </p>
              <p>958 Club Street</p>
              <p>Singapore 069463</p>
            </div>
          </Locations>
          <Locations>
            <div>
              <img src={LocationIcon} alt='Location Icon' />
            </div>
            <div>
              <h3>Head Office</h3>
              <p>Golden Ratio Films</p>
              <p>Office No 502/5th floor,Crest Mukta/Mukta Arts</p>
              <p>Fun Republic lane Veera Desai industrial Estate, </p>
              <p>Andheri West, Mumbai, 400053 </p>
              <p>Maharastra India</p>
            </div>
          </Locations>
        </LocationHolder>
        <MapHolder>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.71611034068997!2d72.83523955348248!3d19.136099094168234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7bb61923e07%3A0x37661b9b743a8ef3!2sCrest%20Mukta!5e0!3m2!1sen!2sin!4v1648092950528!5m2!1sen!2sin'
            allowFullScreen=''
            loading='lazy'
            title='Golden Ratio Films'
          />
        </MapHolder>
      </LocationSectionWrapper>
    </ContainerCustom>
  );
};

export default LocationSection;
