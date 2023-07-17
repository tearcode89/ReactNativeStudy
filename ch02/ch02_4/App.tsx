import React from 'react';
import {SafeAreaView, Alert, Button} from 'react-native';
import {TouchableOpacity, TouchableHighlight, Text} from "react-native";
import {TextInput} from "react-native";

const onPress = () => Alert.alert('홈버튼이 눌렸어요', 'message')
export default function App(): React.JSX.Element {
    return (
        <SafeAreaView>
            <Button title='home' onPress={onPress}></Button>
            <TouchableOpacity onPress={onPress}>
                <Text>TouchableOpacity</Text>
            </TouchableOpacity>
            <TouchableHighlight>
                <Text>TouchableHighLight</Text>
            </TouchableHighlight>
            <TextInput
                placeholder="당신의 이름을 넣어주세요"
                onChangeText={(text: string) => console.log(text)}
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onEndEditing={() => console.log('onEndEditing')}
            />
        </SafeAreaView>
    );
};
