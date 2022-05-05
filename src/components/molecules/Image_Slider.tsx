import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../values/Color';

const Image_Slider = () => {
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];
  return (
    <SliderBox
      images={images}
      dotColor={COLORS.primary}
      autoplay
      circleLoop
      imageLoadingColor={COLORS.primary}
      sliderBoxHeight={200}
    />
  );
};

export default Image_Slider;
