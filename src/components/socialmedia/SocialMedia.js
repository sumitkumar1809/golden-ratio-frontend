import { Carousel } from '@trendyol-js/react-carousel';
import { ContainerCustom } from '../../styles/Utils.styled';
import SectionTitle from '../utils/SectionTitle';
import {
  LeftArrowHolder,
  RightArrowHolder,
  SocialCarouselWrapper,
  SocialHeader,
  SocialImage,
  SocialMediaWrapper,
} from './SocialMedia.styled';
import {
  AiOutlineTwitter,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import TwitterCard from './TwitterCard';

const SocialMedia = ({ Instagram, Twitter, facebooks }) => {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  console.log('Twitter Data from SocialMedia.js', Twitter);
  const onClickHandler = async (url) => {
    if (url !== '' && url !== '#') {
      window.open(url, '_blank');
    }
  };

  const isMobile = window.innerWidth < 768 ? true : false;

  let newFacebookData = [];
  if (facebooks.length > 0) {
    facebooks.map((facebook) => {
      // only return if the facebook has a full_picture property
      if (facebook?.full_picture) {
        // push the facebook data to the new array
        newFacebookData.push(facebook);
      }
    });
  }

  // limit the number of newFacebookData to 15
  if (newFacebookData.length > 15) {
    newFacebookData = newFacebookData.slice(0, 15);
  }

  return (
    <>
      <ContainerCustom>
        <SocialMediaWrapper id='social'>
          <SectionTitle title='From Our Social Media' social={true} />
          {Twitter.data.length > 0 && (
            <>
              <SocialHeader>
                <h2>Twitter</h2>
                <span
                  onClick={() =>
                    window.open('https://twitter.com/GRfilmssg', '_blank')
                  }>
                  Go to our Twitter
                  <AiOutlineTwitter style={{ color: '#fff' }} />
                </span>
              </SocialHeader>
              <SocialCarouselWrapper>
                <Carousel
                  responsive={true}
                  useArrowKeys={true}
                  rightArrow={
                    <RightArrowHolder>
                      <AiFillCaretRight />
                    </RightArrowHolder>
                  }
                  leftArrow={
                    <LeftArrowHolder>
                      <AiFillCaretLeft />
                    </LeftArrowHolder>
                  }
                  show={isMobile ? 1 : 2}
                  slide={isMobile ? 1 : 2}
                  transition={0.5}
                  swiping={true}
                  swipeOn={0.1}
                  draggable={true}>
                  {Twitter.data.map((item, index) => (
                    <TwitterCard
                      key={index}
                      TwitterData={item}
                      fullTweetData={Twitter}
                    />
                  ))}
                </Carousel>
              </SocialCarouselWrapper>
            </>
          )}

          {/* <SocialHeader>
            <h2>Instagram</h2>
            <span>
              Go to our Instagram
              <AiOutlineInstagram />
            </span>
          </SocialHeader>
          <SocialCarouselWrapper>
            <Carousel
              responsive={true}
              useArrowKeys={true}
              rightArrow={
                <RightArrowHolder>
                  <AiFillCaretRight />
                </RightArrowHolder>
              }
              leftArrow={
                <LeftArrowHolder>
                  <AiFillCaretLeft />
                </LeftArrowHolder>
              }
              show={3}
              slide={2}
              transition={0.5}
              swiping={true}
              swipeOn={0.1}>
              {Instagram.map((item, index) => (
                <SocialImage key={index}>
                  <div
                    className='image'
                    onClick={() => onClickHandler(item.url)}
                    style={{ backgroundImage: `url(${item.image})` }}></div>
                </SocialImage>
              ))}
            </Carousel>
          </SocialCarouselWrapper> */}
          {facebooks.length > 0 && (
            <>
              <SocialHeader>
                <h2>Facebook</h2>
                <span
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/goldenratiofilmssg',
                      '_blank'
                    )
                  }>
                  Go to our Facebook
                  <FaFacebookF style={{ color: '#fff' }} />
                </span>
              </SocialHeader>
              <SocialCarouselWrapper>
                <Carousel
                  responsive={true}
                  useArrowKeys={true}
                  rightArrow={
                    <RightArrowHolder>
                      <AiFillCaretRight />
                    </RightArrowHolder>
                  }
                  leftArrow={
                    <LeftArrowHolder>
                      <AiFillCaretLeft />
                    </LeftArrowHolder>
                  }
                  show={isMobile ? 1 : 3}
                  slide={isMobile ? 1 : 3}
                  transition={0.5}
                  swiping={true}
                  swipeOn={0.1}
                  draggable={true}
                  autoplay={true}>
                  {newFacebookData.map((item, index) => (
                    <SocialImage key={index}>
                      <div
                        className='image'
                        onClick={() =>
                          onClickHandler(`https://facebook.com/${item.id}`)
                        }
                        style={{
                          backgroundImage: `url(${item.full_picture})`,
                        }}></div>
                    </SocialImage>
                  ))}
                </Carousel>
              </SocialCarouselWrapper>
            </>
          )}
        </SocialMediaWrapper>
      </ContainerCustom>
    </>
  );
};

export default SocialMedia;
