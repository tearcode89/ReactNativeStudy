import React from 'react';
import {Platform, Dimensions, StyleSheet, SafeAreaView, Text, View} from "react-native";
import {MD2Colors as Colors} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

export default function App() {
    return(
        <SafeAreaView style={[styles.safeAreaView]}>
            <Text style={[styles.text]}>os: {Platform.OS}</Text>
            <Text style={[styles.text]}>width: {width}</Text>
            <Text style={[styles.text]}>height: {height}</Text>

            <View style={[styles.box, styles.border]}/>
            <View style={[styles.box, styles.border, {borderRadius: 20}]}/>
            <View style={[styles.box, styles.border, {borderRadius: 40, borderBottomEndRadius: 40}]}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeAreaView: {backgroundColor: Colors.blue500, flex: 1, paddingLeft: Platform.select({ios: 0, android: 20})},
    text: {fontSize: 20, marginBottom: 10, marginLeft: 50, marginTop: 20},
    box: {width: '70%', height: 100, backgroundColor: 'white', marginBottom: 10},
    border: {borderWidth: 10, borderColor: Colors.lime500},
})
