import React from 'react';
import {StyleSheet, View} from "react-native";
import {MD2Colors as Colors} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize: number = 30, iconColor: string = 'white'
const icons: string[] = ['home', 'table-search', 'face-woman-profile', 'account-settings']
export default function BottomBar(): React.JSX.Element {
    const children: React.JSX.Element[] = icons.map((name: string) => (
        <Icon key={name} name={name} size={iconSize} color={iconColor}/>
    ))
    return <View style={styles.view}>{children}</View>
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10, background: Colors.lightBlue500
    }
})
