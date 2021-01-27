import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {AirbnbRating} from 'react-native-ratings';
import {Colors, hp, regularFont, semiBoldFont, wp} from '../styles/global';
import BookMark from './../assets/svg/bookmark.svg';
export interface BookListProps {
  goto: string;
  navigation: any;
  item: any;
}

const BookList: React.FunctionComponent<BookListProps> = ({
  navigation,
  goto,
  item,
}) => {
  return (
    <View style={styles.flexRow}>
      <Pressable onPress={() => navigation.navigate(goto)}>
        <Image
          source={require('./../assets/img/yves.png')}
          style={styles.img}
        />
      </Pressable>

      <View style={styles.flexRow}>
        <Pressable
          onPress={() => navigation.navigate(goto)}
          style={styles.bookDetails}>
          <View>
            <Text style={styles.name}>{item.author}</Text>
            <Text style={styles.author}>Suzy Menkes </Text>
          </View>

          <View style={{alignSelf: 'flex-start', paddingBottom: 10}}>
            <AirbnbRating
              count={5}
              defaultRating={4}
              size={14}
              showRating={false}
              selectedColor="#FFC41F"
              isDisabled
            />
          </View>
        </Pressable>
      </View>

      <BookMark />
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  img: {
    width: 72,
    height: hp(105),
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
    paddingRight: 50,
  },
});

export default BookList;
