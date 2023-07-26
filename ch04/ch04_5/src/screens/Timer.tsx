import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator, Button} from "react-native";
import {MD2Colors as Colors} from "react-native-paper";
import {useToggle, useTimeout} from "../hooks";
// prettier-ignore
export default function Timer() {
    const [loading, toggleLoading] = useToggle(true);
    useTimeout(() => loading && toggleLoading(), 3000, [loading])
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Timer</Text>
            <Text>loading: {loading.toString()}</Text>
            <Button onPress={toggleLoading}
                    title={loading ? '로딩을 스탑해' : '로딩을 시작해'}/>
            {loading && (
                <ActivityIndicator size='large' color={Colors.deepPurple700}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: Colors.yellow300},
    title: {fontSize: 30, fontWeight: '600'}
})
