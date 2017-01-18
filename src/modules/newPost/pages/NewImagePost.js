/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavigatorView} from '../../../components/NavigatorView';
import {TextButton} from '../../../components/TextButton';
import {View, Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native';

import * as actions from '../actions';
import * as _ from "lodash";

class NewImagePost extends Component {

    static PropTypes = {
        images: React.PropTypes.array.isRequired
    };

    state = {
        caption: '',
        images: this.props.images
    };

    renderImages() {
        const {images}= this.props;

        return _.map(images, (image, index) => {
            return <Image style={styles.image} key={index} source={{uri: `data:image/png;base64,${image}`}}/>
        })
    }

    renderHeader() {
        return (
            <TextButton
                textStyles={{alignSelf: 'flex-end'}}
                color='#eeeeee'
                onPress={() => this.props.newImagePost(this.state.caption, this.state.images)}>
                提交
            </TextButton>
        )
    }

    render() {
        const images = this.renderImages();

        return (
            <NavigatorView renderHeader={() => this.renderHeader()}>
                <TextInput
                    style={styles.title}
                    placeholder="图片标题"
                    placeholderTextColor="#eeeeee"
                    multiline={true}
                    onChangeText={(text) => this.setState({caption: text})} value={this.state.caption}/>
                <View style={styles.imageContainer}>{images}</View>
            </NavigatorView>
        )
    }

}


const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('window').width / 3 - 4,
        height: Dimensions.get('window').width / 3 - 4,
        margin: 2
    },
    title: {
        height: 140,
        color: '#ffffff',
        fontSize: 16,
        padding: 10
    }
});

export default connect(
    state => ({}),
    dispatch => ({
        newImagePost: (caption, images) => dispatch(actions.newImagePost(caption, images))
    })
)(NewImagePost);


