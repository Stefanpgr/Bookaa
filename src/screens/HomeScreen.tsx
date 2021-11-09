import React, {useEffect, useState} from 'react';
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
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState<any[]>([{}, {}, {}, {}]);
  const [newest, setNewest] = useState<any[]>([{}, {}, {}, {}]);
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=ufpGGl8nGGrBiPO4vr9tJC3E0fhwBVzx',
      );
      const result = await res.json();
      const arr: any[] = [];
      result.results.lists.forEach((el: any) => {
        return arr.push(...el.books);
      });

      setNewest(arr.slice(0, 10).sort());
      setPopular(arr.slice(0, 6).sort((a, b) => a.rank - b.rank));

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <HeaderHome />
        </View>

        <VirtualizedView>
          <Text style={styles.headTxt}>Popular Books</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: padding}}>
            {popular.map((el, i) => (
              <PopularBook
                navigation={navigation}
                data={el}
                key={i}
                loading={loading}
              />
            ))}
          </ScrollView>
          <Text style={styles.headTxt}>Newest</Text>
          <View style={{paddingHorizontal: padding}}>
            <FlatList
              data={newest}
              // contentContainerStyle={{marginBottom: hp(2000)}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(props) => (
                <BookList
                  {...props}
                  loading={loading}
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
