import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, regularFont, semiBoldFont} from '../styles/global';
export interface PopularBookProps {}

const PopularBook: React.FunctionComponent<PopularBookProps> = () => {
  return (
    <View style={{paddingRight: 18}}>
      <Image
        source={require('./../assets/img/fashion.png')}
        style={styles.img}
      />
      <Text style={styles.name}>Fashionopolis</Text>
      <Text style={styles.author}>Dana Thomas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 131,
    height: 192,
  },
  name: {
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    lineHeight: 24,
  },
  author: {
    color: Colors.textMuted,
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 18,
  },
});

export default PopularBook;
