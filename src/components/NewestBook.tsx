import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, regularFont, semiBoldFont} from '../styles/global';
export interface NewestBookProps {}

const NewestBook: React.FunctionComponent<NewestBookProps> = () => {
  return (
    <View style={styles.flexRow}>
      <Image source={require('./../assets/img/yves.png')} style={styles.img} />
      <View style={styles.flexRow}>
        <View style={styles.bookDetails}>
          <View>
            <Text style={styles.name}>Yves Saint Laurent</Text>
            <Text style={styles.author}>Suzy Menkes </Text>
          </View>

          <Text style={styles.author}>Reviews</Text>
        </View>
      </View>

      {/* <View>
        <Text>Bookmark</Text>
      </View> */}

      <Text style={styles.author}>Bookmark</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 72,
    height: 105,
  },
  name: {
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 16,

    lineHeight: 24,
  },
  author: {
    color: Colors.textMuted,
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },
  bookDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // paddingLeft: 20,
  },
});

export default NewestBook;
