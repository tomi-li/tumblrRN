/**
 * All Codes below are Lifetime Warranted by mozat-tomi since 19/7/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  md: {
    width: 36,
    height: 36,
  },
  sm: {
    width: 24,
    height: 24,
  },
  lg: {
    width: 48,
    height: 48,
  },
  default: {},
  rounded: {
    borderRadius: 2,
  },
  circle: {
    borderRadius: 48,
  },
});

export const Avatar = (props) => {
  const { name, type, size } = props;
  const avatarStyle = [styles[size], styles[type]];

  return (
    <Image style={avatarStyle} source={{ uri: `https://api.tumblr.com/v2/blog/${name}/avatar/` }}/>
  )
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'rounded', 'circle']),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['sm', 'md', 'lg'])]),
};

Avatar.defaultProps = {
  type: 'default',
  size: 'md',
};

