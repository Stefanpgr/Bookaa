import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors, regularFont, semiBoldFont, wp} from '../styles/global';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

export interface PopularBookProps {
  data: any;
  navigation: any;
  loading: boolean;
}

const PopularBook: React.FunctionComponent<PopularBookProps> = ({
  data,
  navigation,
  loading,
}) => {
  // console.log(data);
  return (
    <View style={{paddingRight: 18}}>
      <SkeletonContent
        containerStyle={styles.img}
        isLoading={loading}
        animationDirection="horizontalRight"
        layout={[{...styles.img}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('BookDetails', {item: data})}>
          <Image source={{uri: data.book_image}} style={styles.img} />
        </TouchableOpacity>
      </SkeletonContent>
      <SkeletonContent
        containerStyle={styles.name}
        isLoading={loading}
        animationDirection="horizontalRight"
        layout={[
          {key: 'text1', height: 20, width: 140, marginBottom: 15},
          {key: 'text2', height: 20, width: 70},
        ]}>
        <Text style={styles.name} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.author}>{data.author}</Text>
      </SkeletonContent>
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
