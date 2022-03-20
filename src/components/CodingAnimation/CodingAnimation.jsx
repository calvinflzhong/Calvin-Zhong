import React from 'react';
import Lottie from 'react-lottie';
import animationData from './CodingPersonAnimation.json';

const CodingAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default CodingAnimation;
