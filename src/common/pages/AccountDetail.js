/**
 * All Codes below are Lifetime Warranted by Tomi since 10/01/2017.
 */

import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';
import {TumblrClient} from '../../api';

class AccountDetail extends Component {

    state = {
        user: {}
    };

    componentWillMount() {
        TumblrClient.userInfo((err, data) => {
            this.setState({user: data.user});
        })
    }

    render() {
        return (
            <View>
                <Text>{'账号'}</Text>
                <View>
                    <Text>{'likes'}</Text>
                    <Text>{this.state.user}</Text>
                </View>
            </View>
        )
    }

}

export{AccountDetail};