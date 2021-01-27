import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors, semiBoldFont} from '../styles/global';
import Search from './../assets/svg/search.svg';
export interface HeaderProps {}

const HeaderHome: React.FunctionComponent<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require('./../assets/img/dustin.png')}
          style={styles.img}
        />

        <Text style={styles.greeting}>Hi, Dustin</Text>
      </View>

      <View style={styles.search}>
        <Search width={20.31} height={20.31} fill={'red'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginTop: 10,
  },
  img: {
    width: 40,
    height: 40,
  },
  profile: {
    flexDirection: 'row',
  },
  greeting: {
    alignSelf: 'center',
    paddingLeft: 15,
    fontFamily: semiBoldFont,
    color: Colors.textBlack,
    fontSize: 14,
    lineHeight: 21,
  },
  search: {
    alignSelf: 'center',
  },
});

export default HeaderHome;
