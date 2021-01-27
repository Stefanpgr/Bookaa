import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
} from 'react-native';

import {HeaderHome, BookList, PopularBook} from '../components';
import VirtualizedView from '../helpers/VirtualizedView';
import {Colors, padding, semiBoldFont} from '../styles/global';

const Home = ({navigation}: any) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <HeaderHome />
        </View>
        {/*
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
        <VirtualizedView>
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
            <FlatList
              data={[
                {name: 'tetet', author: 'dggdgd'},
                {name: 'tetet', author: 'dggdgd'},
                {name: 'tetet', author: 'dggdgd'},
                {name: 'tetet', author: 'dggdgd'},
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(props) => (
                <BookList
                  {...props}
                  navigation={navigation}
                  goto="BookDetails"
                />
              )}
              // numColumns={1}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </VirtualizedView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  header: {
    paddingHorizontal: padding,
    marginTop: 15,
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
