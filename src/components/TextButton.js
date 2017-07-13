/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export const TextButton = (props) => {

  const { onPress, textStyles, color = '#333333', children } = props;

  return (
    <TouchableHighlight
      style={styles.TextButton}
      onPress={onPress}
      underlayColor="transparent"
      activeOpacity={.7}>
      <Text style={[textStyles, { color: color }]}>{children}</Text>
    </TouchableHighlight>
  )
};


TextButton.PropTypes = {
  onPress: React.PropTypes.func.isRequired,
  textStyles: React.PropTypes.object.isRequired,
  color: React.PropTypes.string,
};


const styles = StyleSheet.create({
  TextButton: {
    paddingHorizontal: 8,
  },
});