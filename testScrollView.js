/**
 * Description: A brief description of the Com.
 * Author: yuanwy
 * Date: 22/11/2017
 */

import React, {Component} from 'react';

import {
    Text,
    ScrollView,
    Image,
    View
} from 'react-native';


class testScrollView extends Component<{}> {
    render() {
        return (
            <Text>testScrollView!</Text>
        );
    }
}

// export default testScrollView

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        let pic = {
            // require('./img/favicon.png')//本地图片
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Image source={pic} style={{width: 193, height: 110}} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}
export default IScrolledDownAndWhatHappenedNextShockedMe