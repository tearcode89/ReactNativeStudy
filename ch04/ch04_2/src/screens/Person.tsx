import React from 'react';
import type {FC} from 'react'
import {View, Text, Image, Alert} from 'react-native';
import {MD2Colors as Colors} from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment-with-locales-es6'
import * as D from '../data'
import {Avatar, IconText} from '../components'
import {styles} from './Person.style'

moment.locale('ko')

export type PersonProps = {
    person: D.IPerson
}

const avatarPressed = () => Alert.alert('아바타가 눌렸어요')
const deletePressed = () => Alert.alert('삭제가 눌렸어요')
const countIconPressed = (name: string) => () => Alert.alert(`${name}가(이) 눌렸어요`)


const Person: FC<PersonProps> = ({person}) => {
    return (
        <View style={[styles.view]}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50}
                        onPress={avatarPressed}/>
            </View>
            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{person.name}</Text>
                <Text style={[styles.email]}>{person.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(person.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500}
                          onPress={deletePressed}/>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text,
                    styles.comments]}>{person.comments}</Text>
                <Image style={[styles.image]} source={{uri: person.image}}/>
                <View style={[styles.countsView]}>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('코멘트')}
                              name="comment" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('리트윗')}
                              name="repeat-variant" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={countIconPressed('하트')}
                              name="heart" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.comment}/>
                </View>
            </View>
        </View>
    )
}

export default Person;
