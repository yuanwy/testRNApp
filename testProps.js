/**
 * Description: A brief description of the Com.
 * Author: yuanwy
 * Date: 22/11/2017
 */

import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Image,
} from 'react-native';


class testProps extends Component<{}> {
    render() {
        return (
            <Text>testProps</Text>
        );
    }
}
// AppRegistry.registerComponent('testProps', () => testProps);
// export default testProps

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}} />
        );
    }
}

// AppRegistry.registerComponent('Bananas', () => Bananas);
// export default Bananas

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component<{}> {
    render() {
        return (
            <View style={{alignItems: 'center'}}>

                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>

        );
    }
}
AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);
export default LotsOfGreetings

