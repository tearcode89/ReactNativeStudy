import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text} from "react-native";
import {useClock} from './src/hooks';

export default function App() {
    const time = useClock();

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={[styles.digiFont, styles.time]}>
                {time.toLocaleTimeString('en-US',)}
            </Text>
            <Text style={styles.digiFont}>{time.toLocaleTimeString('en-US')}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    digiFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
    time: {fontSize: 50}
})
