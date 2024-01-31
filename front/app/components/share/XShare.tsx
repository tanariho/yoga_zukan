import React from 'react';
import TwitterIcon from './Icon';
import { Button } from 'primereact/button';

const TwitterShareButton = ({ pose }:any) => {
  const tweetText =`${pose}を集めました！\nヨガ図鑑を集めよう！\n`
  const pageUrl ="https://yoga-zukan.vercel.app/";

  return (
    <div className = "flex justify-center">
    <Button 
    rounded outlined
    className="icon border-button "
      onClick={() => {
        window.open(
          `https://twitter.com/share?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(tweetText)}`,
          '_blank'
        );
      }}
    >
      <TwitterIcon /><p className = "text-button">でシェア</p>
    </Button>
    </div>
  );
};

export default TwitterShareButton;