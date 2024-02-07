import React from 'react';
import TwitterIcon from './Icon';
import { Button } from 'primereact/button';

const SimpleTwitterShareButton = () => {
  const tweetText =`悟りを開いてヨガ図鑑を全部集めました！\n`
  const pageUrl ="https://yoga-zukan.vercel.app/";

  return (
    <div className = "flex justify-center">
    <Button 
    rounded outlined
    className="icon border-button custom-font"
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

export default SimpleTwitterShareButton;