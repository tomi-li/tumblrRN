/**
 * All Codes below are Lifetime Warranted by Tomi since 27/12/2016.
 */

import React, {Component} from 'react';
import {NavigatorView} from '../../../components/NavigatorView';
import {View, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import {TextButton} from '../../../components/TextButton';
import {connect} from "react-redux";
import * as actions from '../actions';

class NewTextPost extends Component {

    state = {
        title: '',
        body: '',
        bodyHeight: 0
    };

    renderHeader() {
        return <TextButton
            textStyles={{ alignSelf: 'flex-end' , paddingRight: 10}}
            color='#eeeeee'
            onPress={() => this.props.newTextPost(this.state.title, this.state.body)}>提交</TextButton>
    }

    render() {

        return (
            <NavigatorView renderHeader={() => this.renderHeader()}>
                <View style={styles.newTextPostView}>
                    <TextInput
                        style={styles.title}
                        placeholder="标题"
                        placeholderTextColor='#aaaaaa'
                        autoFocus={true}
                        onChangeText={(text) => this.setState({title: text})}
                        value={this.state.title}
                    />
                    <TextInput
                        style={[styles.content, {height: Math.min(300, Math.max(50, this.state.bodyHeight))}]}
                        placeholder="正文"
                        placeholderTextColor='#aaaaaa'
                        multiline={true}
                        onContentSizeChange={
                            e => this.setState({bodyHeight: e.nativeEvent.contentSize.height})
                        }
                        onChangeText={(text)=> this.setState({body: text})}
                        value={this.state.body}
                    />
                </View>
            </NavigatorView>
        )
    }
}

const styles = StyleSheet.create({
    newTextPostView: {
        padding: 20,
    },
    title: {
        fontSize: 16,
        paddingVertical: 16,
        height: 50,
        color: '#eeeeee',
        fontWeight: '600'
    },
    content: {
        fontSize: 16,
        paddingVertical: 16,
        color: '#eeeeee'
    }
});

export default connect(
    state => ({}),
    dispatch => ({
        newTextPost: (title, body) => dispatch(actions.newTextPost(title, body))
    })
)(NewTextPost)
