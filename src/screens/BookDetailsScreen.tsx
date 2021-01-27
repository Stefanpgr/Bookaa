import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import {Button, HeaderBookDetails} from '../components';
import {
  Colors,
  mediumFont,
  padding,
  regularFont,
  semiBoldFont,
} from '../styles/global';
import FileLine from './../assets/svg/file-text-line.svg';
import MessageLine from './../assets/svg/message-line.svg';

const BookDetailsScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderBookDetails navigation={navigation} />
      </View>

      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 25,
            paddingHorizontal: padding,
          }}>
          <View style={{alignItems: 'center'}}>
            <View>
              <Image
                source={require('./../assets/img/yves.png')}
                style={styles.img}
              />
            </View>
            <View>
              <Text style={styles.bookName}>Yves Saint Laurent</Text>
              <Text style={styles.bookAuthor}>Suzy Menkes </Text>
              <View style={styles.rating}>
                <AirbnbRating
                  count={5}
                  defaultRating={3.5}
                  size={14}
                  showRating={false}
                  selectedColor="#FFC41F"
                  isDisabled
                />
                <Text style={styles.activeRating}>4.5</Text>
                <Text style={[styles.totalRating, {paddingHorizontal: 2}]}>
                  /
                </Text>
                <Text style={styles.totalRating}>5.0</Text>
              </View>

              <Text style={styles.description}>
                A spectacular visual journey through 40 years of haute couture
                from one of the best-known and most trend-setting brands in
                fashion.
              </Text>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.revPrev}>
              <Button
                style={styles.btnSm}
                item={
                  <View style={styles.flexRow}>
                    <FileLine />
                    <Text style={styles.btnSmTxt}>Preview</Text>
                  </View>
                }
              />
              <Button
                style={styles.btnSm}
                item={
                  <View style={styles.flexRow}>
                    <MessageLine />
                    <Text style={styles.btnSmTxt}>Reviews</Text>
                  </View>
                }
              />
            </View>
            <Button
              style={styles.btnLg}
              item={<Text style={styles.btnLgTxt}>Buy Now for $46.99</Text>}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  content: {flex: 1},
  img: {
    height: 310,
    width: 211.69,
    marginBottom: 32,
    marginTop: 15,
  },
  header: {
    paddingHorizontal: padding,
    marginTop: 15,
  },
  bookName: {
    textAlign: 'center',
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 24,
    marginTop: 0,
    paddingTop: 0,
  },
  bookAuthor: {
    textAlign: 'center',
    marginVertical: 8,
    color: Colors.textMuted,
    fontFamily: regularFont,
    fontSize: 14,
  },
  rating: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  description: {
    fontFamily: regularFont,
    color: Colors.textMuted,
    lineHeight: 24,
    marginTop: 10,
    fontSize: 14,
  },
  btnSm: {
    backgroundColor: Colors.white,
    height: 40,
    width: 154,
    borderRadius: 8,

    shadowColor: 'rgba(7, 8, 14, 0.05)',
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowOpacity: 1,
    // shadowRadius: 16.0,

    elevation: 4,
  },
  revPrev: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  flexRow: {
    flexDirection: 'row',
  },
  btnSmTxt: {
    fontFamily: mediumFont,
    alignSelf: 'center',
    fontSize: 14,
    paddingLeft: 10,
    color: Colors.textBlack,
  },
  btnLg: {
    backgroundColor: Colors.textBlack,
    height: 60,
    borderRadius: 16,

    shadowColor: 'rgba(7, 8, 14, 0.1)',
    shadowOffset: {
      width: 1,
      height: 0.5,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 3,
  },
  btnLgTxt: {
    fontFamily: mediumFont,
    alignSelf: 'center',
    fontSize: 16,
    paddingLeft: 10,
    color: Colors.white,
  },
  footer: {
    marginTop: 25,
  },
  activeRating: {
    fontFamily: mediumFont,
    fontSize: 14,
    paddingLeft: 10,
    color: Colors.textBlack,
  },
  totalRating: {
    fontFamily: mediumFont,
    fontSize: 14,
    color: Colors.textMuted,
  },
});

export default BookDetailsScreen;
