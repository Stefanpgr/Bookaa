import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface HeaderProps {}

const HeaderHome: React.FunctionComponent<HeaderProps> = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Textr</Text>
        </View>
        <View>
          <Text>Textr</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Textr</Text>
        </View>
        <View>
          <Text>Textr</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderHome;
