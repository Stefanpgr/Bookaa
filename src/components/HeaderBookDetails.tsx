import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Back from './../assets/svg/arrow-left.svg';
import BookMark from './../assets/svg/bookmark.svg';
import More from './../assets/svg/more.svg';
export interface HeaderBookDetailsProps {
  navigation: any;
}

const HeaderBookDetails: React.FunctionComponent<HeaderBookDetailsProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Back />
      </Pressable>

      <View style={styles.action}>
        <View style={styles.bookmark}>
          <BookMark width={24} height={24} />
        </View>

        <More />
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
  back: {
    flexDirection: 'row',
  },
  action: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  bookmark: {
    paddingRight: 25,
  },
});

export default HeaderBookDetails;
