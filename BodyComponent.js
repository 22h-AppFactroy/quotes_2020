/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import wise from './wisdom.json';
import WisdomComponent from './WisdomComponent';
// import BannerAds from './BannerAds';
// const adUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : 'ca-app-pub-8356725717508400/1561891319';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

const BodyComponent = () => {
  const [nowWise, setNowWise] = useState();
  const [count, setCount] = useState(1);

  const resetWise = () => {
    var nowWise = wise[getRandomInt(0, 216)];
    var nowWiseText = nowWise.advice;
    var randomImg = `https://source.unsplash.com/random?time=${new Date().getTime()}`;
    setNowWise({
      text: nowWiseText,
      imgSrc: randomImg,
    });
  };

  const upCount = () => {
    setCount(count + 1);
  };

  const upCountLogic = async () => {
    console.log(count);
    resetWise();
  };

  useEffect(() => {
    resetWise();
  }, []);

  useEffect(() => {
    upCountLogic();
  }, [count]);

  return <WisdomComponent wise={nowWise} type={'Main'} refresh={upCount} />;
};

export default BodyComponent;
