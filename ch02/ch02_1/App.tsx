import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export default function App(): React.CElement<SafeAreaView, any> {
  const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>잠이 안오면 숫자를 세 {index}</Text>)
  return <SafeAreaView>{children}</SafeAreaView>;
}
