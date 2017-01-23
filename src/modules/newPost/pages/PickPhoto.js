/**
 * All Codes below are Lifetime Warranted by Tomi since 17/01/2017.
 */

import React, {Component} from 'react';
import {NavigatorView} from '../../../components/NavigatorView';
import {TextButton} from '../../../components/TextButton';
import {IconButton} from '../../../components/IconButton';
import {Modal, View, Text, CameraRoll, Platform, StyleSheet, Dimensions, Button, TextInput, NativeModules, TouchableHighlight} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Camera from 'react-native-camera';
import {go} from '../../../router';

class PickPhoto extends Component {

    state = {
        showModal: false
    };

    takePhoto() {
        this.refs.camera.capture()
            .then(async(data) => {
                this.setState({showModal: false});
                let result = await this.turnUrlToFile([{uri: data.path}]);
                go('newImagePost', {images: result})
            })
            .catch(err => console.log(err))
    }

    turnUrlToFile(data) {
        return new Promise(resolve => {
            let tempArray = [];
            data.map(each => {
                NativeModules.RNImageToBase64.getBase64String(each.uri, (err, base64) => {
                    tempArray.push(base64);

                    // resolve when all turned.
                    if (tempArray.length === data.length) resolve(tempArray);
                })
            });
        })
    }

    renderHeader() {
        return (
            <TextButton
                textStyles={{alignSelf: 'flex-end'}}
                color='#eeeeee'
                onPress={async () => {
                    let result = await this.turnUrlToFile(this.refs.cameraRoll.state.selected);
                    go('newImagePost', {images: result})
                }}>
                下一步
            </TextButton>
        )
    }

    renderModal() {
        return (
            <Modal style={styles.camera}
                   visible={this.state.showModal}
                   animationType='slide'>
                <Camera ref="camera"
                        style={styles.camera}
                        aspect={Camera.constants.Aspect.fill}>
                    <TouchableHighlight style={styles.button}
                                        underlayColor='rgba(71,150,217,.6)'
                                        onPress={() => this.takePhoto()}>
                        <View style={styles.button_inner}/>
                    </TouchableHighlight>
                </Camera>
            </Modal>
        )
    }

    render() {
        let modal;
        if (this.state.showModal) {
            modal = this.renderModal();
        }

        return (
            <View>
                <NavigatorView renderHeader={() => this.renderHeader()}>
                    <Camera
                        ref="icon"
                        style={styles.cameraIcon}
                        aspect={Camera.constants.Aspect.fill}>
                        <IconButton size={24} name="camera" color='#ffffff' onPress={() => {
                            this.setState({showModal: true})
                        }}/>
                    </Camera>
                    <CameraRollPicker
                        ref="cameraRoll"
                        backgroundColor='#374A60'
                        callback={() => {}}/>
                </NavigatorView>

                {modal}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    newImagePostView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#374A60',
        paddingTop: 22,
        paddingHorizontal: 20
    },
    cameraIcon: {
        height: 120,
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    button_inner: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#4796D9'
    }

});


export {PickPhoto};