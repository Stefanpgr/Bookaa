import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import {AirbnbRating} from 'react-native-ratings';
import {Colors, hp, regularFont, semiBoldFont, wp} from '../styles/global';
import BookMark from './../assets/svg/bookmark.svg';
export interface BookListProps {
  goto: string;
  navigation: any;
  item: any;
  loading: boolean;
}

const BookList: React.FunctionComponent<BookListProps> = ({
  navigation,
  item,
  loading,
}) => {
  return (
    <View style={styles.flexRow}>
      <SkeletonContent
        containerStyle={styles.img}
        isLoading={loading}
        animationDirection="horizontalRight"
        layout={[{...styles.img}]}>
        <Pressable
          onPress={() =>
            navigation.navigate('BookDetails', {
              item,
            })
          }>
          <Image source={{uri: item.book_image}} style={styles.img} />
        </Pressable>
      </SkeletonContent>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BookDetails', {
            item,
          });
        }}
        style={styles.bookDetails}>
        <SkeletonContent
          containerStyle={styles.name}
          isLoading={loading}
          animationDirection="horizontalRight"
          layout={[
            {key: 'text1', height: 20, width: 140, marginBottom: 15},
            {key: 'text2', height: 20, width: 70},
          ]}>
          <Text style={styles.name} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.author}>{item.author} </Text>
        </SkeletonContent>
        <SkeletonContent
          containerStyle={{alignSelf: 'flex-start', paddingBottom: hp(5)}}
          isLoading={loading}
          animationDirection="horizontalRight"
          layout={[{key: 'text1', height: 20, width: 140}]}>
          {/* <View style={{alignSelf: 'flex-start', paddingBottom: hp(5)}}> */}
          <AirbnbRating
            count={5}
            defaultRating={item.rank}
            size={14}
            showRating={false}
            selectedColor="#FFC41F"
            isDisabled
          />
          {/* </View> */}
        </SkeletonContent>
      </TouchableOpacity>
      <View style={{paddingLeft: 20}}>
        {!loading && <BookMark fill="#06070D" />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingBottom: 20,
    // backgroundColor: 'red',
    flex: 1,
  },
  img: {
    width: wp(72),
    height: wp(105),
  },
  name: {
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 16,
    width: 190,
    lineHeight: 24,
  },
  author: {
    color: Colors.textMuted,
    fontFamily: regularFont,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
    textAlign: 'left',
  },
  bookDetails: {
    // flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
});

export default BookList;
