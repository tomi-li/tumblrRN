/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import {TextButton} from '../../../components/TextButton';
import {connect} from "react-redux";
import * as actions from '../actions';

class NewTextPost extends Component {

    state = {
        title: '',
        body: ''
    };

    render() {
        return (
            <View style={styles.newTextPostView}>
                <TextInput
                    style={{height: 40}}
                    placeholder="标题"
                    placeholderTextColor='#cccccc'
                    autoFocus={true}
                    onChangeText={(text) => this.setState({title: text})}
                    value={this.state.title}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="正文"
                    placeholderTextColor='#cccccc'
                    multiline={true}
                    onChangeText={(text)=> this.setState({body: text})}
                    value={this.state.body}
                />
                <TextButton
                    textStyles={styles.submitButton}
                    color='#cccccc'
                    onPress={() => this.props.newTextPost(this.state.title, this.state.body)}
                >提交</TextButton>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    newTextPostView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#374A60',
        paddingTop: 22,
        paddingHorizontal: 20
    },
    submitButton: {
        borderColor: '#cccccc',
        borderWidth: 1,
        width: 100,
        padding: 4,
        alignItems: 'center'
    }
});

export default connect(
    (state) => ({}),
    (dispatch) => ({
        newTextPost: (title, body) => dispatch(actions.newTextPost(title, body))
    })
)(NewTextPost)
