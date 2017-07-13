/**
 * All Codes below are Lifetime Warranted by Tomi since 18/01/2017.
 */


import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet, Dimensions } from 'react-native';
import * as _ from 'lodash';
import crypto from 'crypto-js';
import md5 from 'crypto-js/md5';
import hmacsha1 from 'crypto-js/hmac-sha1';
import base64 from 'crypto-js/enc-base64';

const CUSTOMER_KEY = 'LXMQBT1mHyR16EaGYR3zcJ6d4oTMBEiHPo4lF66LDUUfZBQK28';
const CUSTOMER_SECRET = 'kK3OuagPXF7lAY4efsjm92uDMwsYWtPnLSyGugQXJmt1kIX3PF';

const request_tokenURL = 'https://tumblr.com/oauth/request_token';


class Login extends Component {

  componentWillMount() {
    
    let oauth_parameters = {
      'oauth_consumer_key': CUSTOMER_KEY,
      'oauth_nonce': '402057506',
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000),
      'oauth_version': '1.0',
    };

    const formData = new FormData();
    for (let name in oauth_parameters) {
      formData.append(name, oauth_parameters[name]);
    }

    let normalized_parameters = encodeURIComponent(_.map(oauth_parameters, (value, key) => `${key}=${value}`).join('&'));
    let normalized_http_method = 'POST';
    let normalized_http_url = encodeURIComponent(request_tokenURL);


    let signature_base_string = [normalized_http_method, normalized_http_url, normalized_parameters].join('&');
    // alert(signature_base_string);
    // console.dir((signature_base_string));

    let oauth_key = CUSTOMER_SECRET + '&';
    let hashed = hmacsha1(signature_base_string, oauth_key);

    // console.log(base64);
    // console.log(base64.stringify(hashed));
    // console.log(hashed.toString(crypto.enc.Base64));

    console.log(oauth_parameters);
    console.log(hashed.toString(crypto.enc.Base64));
    // console.log(formData);

    formData.append('oauth_signature', hashed.toString(crypto.enc.Base64));

    fetch(request_tokenURL, {
      method: 'POST',
      body: formData,
    }).then(res => {
      console.log(res);
      return res.text()
    }).then(data => {
      console.log(data);
    })
  }

  makenonce() {
    let random_number = _.times(40, () => _.random(0, 9, false));
    let m = md5(parseInt(new Date().getTime() / 1000) + random_number);
    return m.toString(crypto.enc.Hex)
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <WebView source={{ uri: 'https://www.tumblr.com/login?redirect_to=%2Foauth%2Fauthorize%3Foauth_token%3DqRWqKFLpLjOLkUFsze5Y6OircDNzay4dce3jF2T0ddGL8N8fJ0' }}
                 style={styles.login}>

        </WebView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  login: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexBasis: 1,
  },
});

export { Login };