/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const IconButton = (props) => {

  const { name, size, color, iconStyle = {}, onPress } = props;

  return (
    <TouchableHighlight
      style={[styles.iconButton, iconStyle]}
      onPress={onPress}
      underlayColor="rgba(55,74,96, .1)"
      activeOpacity={.7}>
      <Icon size={size} name={name} color={color}/>
    </TouchableHighlight>
  )
};

IconButton.PropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired, // in px
  onPress: PropTypes.func.isRequired,
  iconStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 10,
  },
});


