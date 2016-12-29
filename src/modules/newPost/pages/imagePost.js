/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import React, {Component} from 'react';
import {connect} from "react-redux";

import {View, Text, CameraRoll, Platform, StyleSheet, Dimensions, Button, TextInput} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Camera from 'react-native-camera';

import * as actions from '../actions';

class NewImagePost extends Component {


    state = {
        caption: '',
        images: []
    };

    // componentWillMount() {
    //     CameraRoll.getPhotos({first: 1000})
    //         .then(res => console.log(res))
    // }

    _takePicture() {
    }


    turnUrlToFile(data) {
        let formImages = data.map(each => {
            return {
                uri: each.uri,
                type: 'image/jpeg',
                name: each.filename,
            }
        });
        this.setState({images: formImages})
    }

    render() {
        return (
            <View style={styles.newImagePostView}>
                <Button onPress={() => this.props.newImagePost(this.state.caption, this.state.images)} title="提交"/>
                <TextInput
                    style={{height: 40}}
                    placeholder="图片标题"
                    onChangeText={(text) => this.setState({caption: text})} value={this.state.caption}/>
                <Camera
                    style={{width: 200, height: 200}}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text onPress={this._takePicture}>[CAPTURE]</Text>
                </Camera>
                <CameraRollPicker
                    style={{ width: 200, height: 500}}
                    callback={(data) => this.turnUrlToFile(data)}/>
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
    }
});

export default connect(
    (state) => ({}),
    (dispatch) => ({
        newImagePost: (caption, images) => dispatch(actions.newImagePost(caption, images))
    })
)(NewImagePost);