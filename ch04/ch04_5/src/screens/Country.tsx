import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import type {FC} from 'react'
import * as D from '../data';

export type CountryProps = {
    country: D.ICountry
}
const Country: FC<CountryProps> = ({country}) => {
    const {name, population, subregion, region} = country
    return (
        <View>
            <View>
                <Text style={styles.name}>{name}</Text>
            </View>
            <View>
                <Text>인구수: {population}</Text>
                <Text>소구역: {subregion}</Text>
                <Text>지역: {region}</Text>
            </View>
        </View>
    )
}
export default Country;
const styles = StyleSheet.create({
    view: {padding: 5},
    name: {fontSize: 30, fontWeight: '400'}
})
