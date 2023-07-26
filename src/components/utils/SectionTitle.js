import { BsPlayCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CgFacebook } from 'react-icons/cg';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

const SectionTitle = ({ title, url, social = false }) => {
  const navigate = useNavigate();
  const SectionTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    span {
      font-size: 1rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
      }
    }
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary_gold};

    @media ${({ theme }) => theme.device.mobile} {
      h1 {
        font-size: 1rem;
      }
      span {
        font-size: 0.8rem;
      }
    }
    @media ${({ theme }) => theme.device.tablet} {
      h1 {
        font-size: 1.5rem;
      }
      span {
        font-size: 1rem;
      }
    }
  `;
  const Social = styled.div`
    display: flex;
    svg {
      margin-right: 0.5rem;
      font-size: 1.5rem;
      background: ${({ theme }) => theme.colors.primary_gold};
      color: white;
      padding: 4px;
      border-radius: 50%;
      cursor: pointer;
    }
  `;
  const handleClick = () => {
    if (url !== '#') {
      navigate(url);
    }
  };

  return (
    <SectionTitleWrapper>
      <h1>{title}</h1>
      {url && (
        <span onClick={handleClick}>
          View All <BsPlayCircle />
        </span>
      )}
      {social && (
        <Social>
          <CgFacebook
            onClick={() =>
              window.open(
                'https://www.facebook.com/goldenratiofilmssg/',
                '_blank'
              )
            }
          />
          <AiFillInstagram
            onClick={() =>
              window.open(
                'https://www.instagram.com/goldenratiofilmsg/',
                '_blank'
              )
            }
          />
          <AiOutlineTwitter
            onClick={() =>
              window.open('https://twitter.com/grfilmssg', '_blank')
            }
          />
          <AiFillLinkedin
            onClick={() =>
              window.open(
                'https://sg.linkedin.com/company/golden-ratio-films-sg',
                '_blank'
              )
            }
          />
        </Social>
      )}
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
