import React from 'react';
import {
  TwitterBody,
  TwitterCardWrapper,
  TwitterContent,
  TwitterContentWrap,
  TwitterHeader,
  TwitterHeaderHolder,
  TwitterIcon,
  TwitterImage,
  TwitterProfileImage,
  TwitterProfileTitleHolder,
} from './TwitterCard.styled';

import { IoLogoTwitter } from 'react-icons/io';
import { MdVerified } from 'react-icons/md';

const TwitterCard = ({ TwitterData, fullTweetData }) => {
  const { profile_image_url, name, username, verified } =
    fullTweetData?.includes?.users[0];

  let text = TwitterData?.text;
  let imageUrl = '';

  // wrap #hashtags in <a> tags
  const hashtags = text.match(/#\w+/g);
  if (hashtags) {
    hashtags.forEach((hashtag) => {
      text = text.replace(hashtag, `<span>${hashtag}</span>`);
    });
  }

  // wrap @mentions in <a> tags
  const mentions = text.match(/@\w+/g);
  if (mentions) {
    mentions.forEach((mention) => {
      text = text.replace(mention, `<span>${mention}</span>`);
    });
  }

  // remove the last url from the tweet
  const urls = text.match(
    /(http|https):\/\/([\w_-]+)((?:\.[\w_-]+)+)(?:[\w_-]+)?(?:\/[\w\._-]+[\w_-]*)*\/?(?:\?[\w\._-]+=[\w\._-]+&?)?(?:#[\w_-]+)?/g
  );
  if (urls) {
    urls.forEach((url, index) => {
      if (index === urls.length - 1) {
        text = text.replace(url, '');
      } else {
        text = text.replace(url, `<a href='${url}' target='_blank'>${url}</a>`);
      }
    });
  }

  const tweetImage = TwitterData?.attachments?.media_keys;
  if (tweetImage) {
    let image_id = tweetImage[0];
    const allImages = fullTweetData?.includes?.media;
    const image = allImages?.find((image) => image.media_key === image_id);
    if (image?.type === 'photo') {
      imageUrl = image?.url;
    }
  }

  const redirect_url = `https://twitter.com/${username}/status/${TwitterData?.id}`;

  const redirectToURL = () => {
    window.open(redirect_url, '_blank');
  };

  return (
    <TwitterCardWrapper onClick={redirectToURL}>
      <TwitterHeaderHolder>
        <TwitterHeader>
          <TwitterProfileImage image={profile_image_url} />
          <TwitterProfileTitleHolder>
            <h3>{name}</h3>
            {verified && <MdVerified />}
            <span>{username}</span>
          </TwitterProfileTitleHolder>
        </TwitterHeader>
        <TwitterIcon>
          <IoLogoTwitter />
        </TwitterIcon>
      </TwitterHeaderHolder>
      <TwitterContentWrap>
        <TwitterBody>
          <TwitterContent
            widthContent={imageUrl !== '' ? '70%' : '100%'}
            dangerouslySetInnerHTML={{
              __html: `<p>${text}</p>`,
            }}></TwitterContent>
          {imageUrl !== '' && <TwitterImage image={imageUrl} />}
        </TwitterBody>
      </TwitterContentWrap>
    </TwitterCardWrapper>
  );
};

export default TwitterCard;
