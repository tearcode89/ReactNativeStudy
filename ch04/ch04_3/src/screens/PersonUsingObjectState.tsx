import React, {useCallback, useState} from 'react';
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

// prettier-ignore
const PersonUsingObjectState: FC<PersonProps> = ({person: initialPerson}) => {
    const avatarPressed = useCallback(() => Alert.alert('아바타가 눌렸습니다'), [])
    const deletePressed = useCallback(() => Alert.alert('삭제가 눌렸습니다'), [])

    const [person, setPerson] = useState<D.IPerson>({
        ...initialPerson,
        counts: {comment: 0, retweet: 0, heart: 0}
    })
    const commentIconPressed = useCallback(() => setPerson(person => ({
        ...person,
        counts: {
            ...person.counts,
            comment: person.counts.comment + 1
        }
    })), [])
    const retweetIconPressed = useCallback(() => setPerson(person => ({
        ...person,
        counts: {
            ...person.counts,
            retweet: person.counts.retweet + 1
        }
    })), [])
    const heartIconPressed = useCallback(() => setPerson(person => ({
        ...person,
        counts: {
            ...person.counts,
            heart: person.counts.heart + 1
        }
    })), [])
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
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>
                    {person.comments}
                </Text>
                <Image style={[styles.image]} source={{uri: person.image}}/>
                <View style={[styles.countsView]}>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={commentIconPressed}
                              name="comment" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={retweetIconPressed}
                              name="repeat-variant" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.retweet}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={heartIconPressed}
                              name="heart" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={person.counts.heart}/>
                </View>
            </View>
        </View>
    )
}
export default PersonUsingObjectState;
