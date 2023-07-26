import { ContainerCustom } from '../../styles/Utils.styled';
import {
  GalleryItems,
  GalleryWrapper,
  Image,
  SectionTitle,
  Video,
} from './MovieGallery.styled';
import { BsPlayCircle } from 'react-icons/bs';
const MovieGallery = ({ gallery }) => {
  return (
    <ContainerCustom>
      <GalleryWrapper>
        <SectionTitle>
          <h3>Gallery</h3>
        </SectionTitle>
        <GalleryItems>
          {gallery.map(({ _id, type, url }) => (
            <div key={_id}>
              {type === 'video' && (
                <Video>
                  <video nocontrols poster={url}>
                    <source
                      src='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                      type='video/mp4'
                    />
                  </video>
                  <div>
                    <BsPlayCircle />
                  </div>
                </Video>
              )}
              {type === 'image' && (
                <Image>
                  <div
                    className='poster-image'
                    style={{ backgroundImage: `url(${url})` }}></div>
                  {/* <img src={url} alt='poster' /> */}
                </Image>
              )}
            </div>
          ))}
        </GalleryItems>
      </GalleryWrapper>
    </ContainerCustom>
  );
};

export default MovieGallery;
