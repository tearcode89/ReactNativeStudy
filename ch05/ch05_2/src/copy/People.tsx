import React, {useState, useCallback} from "react";
import {StyleSheet, View, Text, Switch, FlatList} from 'react-native';
import {useToggleTheme} from "../contexts";
import * as D from '../data'
import Person from './Person';
import {useTheme} from "react-native-paper";

export default function People() {
    const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
    const theme = useTheme()
    const toggleTheme = useToggleTheme()
    const add = useCallback(() => {
        setPeople((people) => [...people, D.createRandomPerson()])
    }, [])
    const removeAll = useCallback(() => {
        setPeople((notUsed) => [])
    }, [])
    return (
        <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: theme.colors.onSecondary}]}>
                <Text onPress={add} style={styles.text}>
                    더하기
                </Text>
                <Text onPress={removeAll} style={styles.text}>
                    모두 제거하기
                </Text>
                <View/>
                <Switch/>
            </View>
            <FlatList
                data={people}
                renderItem={({item}) => <Person person={item}/>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {flex: 1},
    topBar: {flexDirection: 'row', padding: 5},
    text: {marginRight: 10, fontSize: 20}
})
