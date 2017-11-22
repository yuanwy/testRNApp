/**
 * Description: A brief description of the Com.
 * Author: yuanwy
 * Date: 22/11/2017
 */

import React, {Component} from 'react';

import {
    Text,
    View,
} from 'react-native';


class testFlexbox extends Component<{}> {
    render() {
        return (
            <Text>testFlexbox!</Text>
        );
    }
}

// export default testFlexbox

//flexDirection对应的这些可选项有 column（默认） row
class FlexDirectionBasics extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};
// export default FlexDirectionBasics


//justifyContent对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                justifyContent: 'space-around',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
};

// export default JustifyContentBasics

//alignItems对应的这些可选项有：flex-start、center、flex-end以及stretch。次轴排列
class AlignItemsBasics extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            // 只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                <View style={{height: 50, backgroundColor: 'powderblue'}} />
            </View>
        );
    }
};
export default AlignItemsBasics