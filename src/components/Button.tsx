import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import React from 'react';
export interface ButtonProps {
  style: object;
  item: any;
  onPress: any;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  style,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[style, {...styles.container}]}
      activeOpacity={0.9}
      onPress={onPress}>
      {item}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
