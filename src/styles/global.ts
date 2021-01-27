import {Dimensions} from 'react-native';

import {
  widthPercentageToDP as wDp,
  heightPercentageToDP as hDp,
} from 'react-native-responsive-screen';

export const {width, height} = Dimensions.get('screen');
export const regularFont = 'Poppins-Regular';
export const boldFont = 'Poppins-Bold';
export const semiBoldFont = 'Poppins-SemiBold';
export const mediumFont = 'Poppins-Medium';
export const lightFont = 'Poppins-Light';
export const padding = 25;
export const Colors = {
  textBlack: '#06070D',
  black: '#000000',
  white: '#ffffff',
  light: '#fdfdfd',
  textMuted: 'rgba(6, 7, 13, 0.5)',
};

export const hp = (dp: number) => hDp(dp / 8.44);
export const wp = (dp: number) => wDp(dp / 3.88);
