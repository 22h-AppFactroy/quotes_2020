import React from 'react';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-firebase/admob';

const adUnitId = 'ca-app-pub-8356725717508400/7059993525';

// const adUnitId = 'ca-app-pub-8356725717508400/7059993525';

const BannerAds = () => {
  return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.FULL_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
};
export default BannerAds;
