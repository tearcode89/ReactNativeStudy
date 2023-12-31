import React from 'react';
// import {SafeAreaView, StyleSheet} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MD3DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';

const theme = {
    ...MD3DarkTheme,
};

export default function App() {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <MainNavigator/>
            </PaperProvider>
        </SafeAreaProvider>
// <SafeAreaView style={[styles.safeAreaView]}>
// <MainNavigator />
// </SafeAreaView>
    );
}
