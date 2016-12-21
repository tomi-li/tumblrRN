/**
 * All Codes below are Lifetime Warranted by Tomi since 21/12/2016.
 */

import React from 'react';
import {StyleSheet, Modal, View, Text, Dimensions, Button, TouchableHighlight} from 'react-native';


const deviceDimension = Dimensions.get('window');

export const PostModal = (props) => {

    const {modalVisible, close} = props;

    return (
        <Modal animationType='slide' visible={modalVisible} transparent={true}>
            <View style={styles.modalStyle}>
                <Text>Here put icons </Text>
                <TouchableHighlight style={styles.closeButton} onPress={close}>
                    <Text style={styles.closeButtonColor}>Nevermind</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    )

};

PostModal.PropTypes = {
    modalVisible: React.PropTypes.bool,
    close: React.PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    modalStyle: {
        width: deviceDimension.width,
        height: deviceDimension.height,
        backgroundColor: 'rgba(51,68,89,.98)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    closeButton: {
        width: deviceDimension.width,
        height: 60,
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeButtonColor: {
        color: '#8D98A6',
        fontSize: 18
    }
});
