import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {MD2Colors as Colors} from "react-native-paper";
import {useLayout} from "../hooks/useLayout";

export default function LifeCycle() {
    const [layout, setLayout] = useLayout()
    return (
        <View onLayout={setLayout} style={styles.view}>
            <Text style={styles.title}>LifeCylce</Text>
            <Text>layout: {JSON.stringify(layout, null, 2)}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'}
})
