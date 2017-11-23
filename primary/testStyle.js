/**
 * Description: A brief description of the Com.
 * Author: yuanwy
 * Date: 22/11/2017
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class testStyle extends Component<{}> {
    render() {
        return (
            <Text>testStyle!</Text>
        );
    }
}

// export default testStyle


//在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
export default LotsOfStyles
