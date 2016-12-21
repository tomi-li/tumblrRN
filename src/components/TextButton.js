/**
 * All Codes below are Lifetime Warranted by Tomi since 20/12/2016.
 */

import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export const TextButton = (props) => {

    const {onPress, textStyles, children} = props;

    return (
        <TouchableHighlight
            style={styles.TextButton}
            onPress={() => onPress()}
            underlayColor="transparent"
            activeOpacity={.7}>
            <Text style={textStyles}>{children}</Text>
        </TouchableHighlight>
    )
};


TextButton.PropTypes = {
    onPress: React.PropTypes.func.isRequired,
    textStyles: React.PropTypes.object.isRequired
};


const styles = StyleSheet.create({
    TextButton: {
        padding: 8
    }
});