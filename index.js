import { AppRegistry } from 'react-native';

import App from './App';
import testProps from  './testProps';
import testState from  './testState';
import testStyle from  './testStyle';
import testSize from  './testSize';

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
// AppRegistry.registerComponent('testRNApp', () => App);
// AppRegistry.registerComponent('testRNApp', () => testProps);
// AppRegistry.registerComponent('testRNApp', () => testState);
// AppRegistry.registerComponent('testRNApp', () => testStyle);
AppRegistry.registerComponent('testRNApp', () => testSize);