import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {HeaderHome, NewestBook, PopularBook} from '../components';
import {Colors, padding, semiBoldFont} from '../styles/global';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <HeaderHome />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.headTxt}>Popular Books</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: padding}}>
            <PopularBook />
            <PopularBook />
            <PopularBook />
            <PopularBook />
          </ScrollView>
          <Text style={styles.headTxt}>Newest</Text>
          <View style={{paddingHorizontal: padding}}>
            <NewestBook />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  scrollView: {
    // backgroundColor: 'red',
  },
  headTxt: {
    marginTop: 25,
    marginBottom: 25,
    color: Colors.textBlack,
    fontFamily: semiBoldFont,
    fontSize: 24,
    paddingHorizontal: padding,
  },
});
// drop-shadow(0px 16px 32px rgba(65, 65, 68, 0.1));

export default Home;
