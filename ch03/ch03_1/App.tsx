import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {MD2Colors as Colors} from "react-native-paper";

export default function App() {
  return(
      <SafeAreaView style={[styles.safeAreaView]}>
        <Text style={[styles.text]}>하이~!</Text>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center' , justifyContent: 'center', backgroundColor: Colors.blue500},
  text: {fontSize: 20, color: Colors.blue200}
})
