import React from 'react';
import TwitterIcon from './Icon';
import { Button } from 'primereact/button';

const TwitterShareButton = (name:string) => {
  const tweetText =`ヨガ図鑑を集めました！\nヨガ図鑑\nURL：https://yoga_zukan.vercel.app/`
  const pageUrl ="https://yoga_zukan.vercel.app/";

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