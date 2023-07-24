import React, {useEffect, useLayoutEffect, useCallback} from "react";
import {Platform, StyleSheet, View, Text} from "react-native";
import {MD2Colors as Colors} from "react-native-paper";
import type {LayoutChangeEvent} from "react-native";

export default function LifeCycle() {
    useEffect(() => {
        console.log(Platform.OS, 'useEffect 가 호출되었어요')
        return () => console.log(Platform.OS, 'useEffect가 끝났습니다.')
    }, [])
    useLayoutEffect(() => {
        console.log(Platform.OS, 'useLayoutEffect가 호출되었어요')
        return () => console.log(Platform.OS, 'useLayoutEffect 가 끝났어요')
    }, [])
    const onLayout = useCallback((e: LayoutChangeEvent) => {
        const {layout} = e.nativeEvent
        console.log(Platform.OS, 'onLayout 이 호출되었어요', layout)
    }, [])
    console.log(Platform.OS, '렌더가 시작됐어요')
    return (
        <>
            <View onLayout={onLayout} style={styles.view}>
                <Text style={styles.title}>LifeCycle</Text>
            </View>
        </>
    )
}
// prettier-ignore
const styles = StyleSheet.create({
    view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
    title: {fontSize: 30, fontWeight: '600'}
})
