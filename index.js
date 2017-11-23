import { AppRegistry } from 'react-native';

import App from './primary/App';
import testProps from './primary/testProps';
import testState from './primary/testState';
import testStyle from './primary/testStyle';
import testSize from './primary/testSize';
import testFlexbox from './primary/testFlexbox';
import testTextInput from './primary/testTextInput';
import testScrollView from './primary/testScrollView';
import testListView from './primary/testListView';
import testNet from './primary/testNet';

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('testRNApp', () => testNet);