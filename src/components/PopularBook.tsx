import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, regularFont, semiBoldFont, wp} from '../styles/global';
export interface PopularBookProps {
  data: any;
  navigation: any;
}

const PopularBook: React.FunctionComponent<PopularBookProps> = ({
  data,
  navigation,
}) => {
  // console.log(data);
  return (
    <View style={{paddingRight: 18}}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('BookDetails', {item: data})}>
        <Image source={{uri: data.book_image}} style={styles.img} />
      </TouchableOpacity>

      <Text style={styles.name}>{data.title}</Text>
      <Text style={styles.author}>{data.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: wp(141),
    height: wp(192),
  },
  name: {
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
    // lineHeight: 24,
    width: 120,
  },
  author: {
    color: Colors.textMuted,
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 18,
    width: 130,
  },
});

export default PopularBook;
