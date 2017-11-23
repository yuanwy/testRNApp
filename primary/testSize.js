/**
 * Description: A brief description of the Com.
 * Author: yuanwy
 * Date: 22/11/2017
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    Text,
    View,
} from 'react-native';




class testSize extends Component<{}> {
    render() {
        return (
            <Text>testSize!</Text>
        );
    }
}

// export default testSize

//与设备像素密度无关的逻辑像素点。
// 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
                <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
                <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
                    <View style={{flex: 1, width: 100}}>
                        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                    </View>
                    <View style={{flex: 0.5, backgroundColor: 'yellow'}}/>
                </View>
            </View>
        );
    }
};

export default FixedDimensionsBasics