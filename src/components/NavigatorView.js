/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React, {Component} from 'react';
import {Platform, View, Text, Dimensions, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {back} from '../router';

export const NavigatorView = (props) => {

    const {renderHeader, children}  = props;
    const header = renderHeader();

    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <TouchableHighlight underlayColor="rgba(0,0,0,.1)" style={styles.header_back_button} onPress={back}>
                    <Icon color="#ffffff" size={22} name="angle-left"/>
                </TouchableHighlight>
                {header}
            </View>
            {children}
        </View>
    )
};

NavigatorView.PropTypes = {
    renderHeader: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    view: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#374A60',
        paddingTop: Platform.OS === 'ios' ? 22 : 0,
        marginTop: Platform.OS === 'ios' ? 0 : 22,
    },
    header: {
        height: 40,
        borderBottomColor: '#666666',
        borderBottomWidth: 1,
        paddingLeft: 40,
        justifyContent: 'center'
    },
    header_back_button: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

