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
const Person: FC<PersonProps> = ({person: initialPerson}) => {
    const avatarPressed = useCallback(() => Alert.alert('아바타가 눌렸어요'), [])
    const deletePressed = useCallback(() => Alert.alert('삭제가 눌렸어요'), [])
    // initialPerson.counts.comment, retweet, heart
    const [comment, setComment] = useState<number>(0)
    const [retweet, setRetweet] = useState<number>(0)
    const [heart, setHeart] = useState<number>(0)

    const commentPressed = useCallback(
        () => setComment((comment) => comment + 1),
        [])
    const retweetPressed = useCallback(
        () => setRetweet((retweet) => retweet + 1),
        [])
    const heartPressed = useCallback(
        () => setHeart((heart) => heart + 1),
        [])

    return (
        <View style={[styles.view]}>
            <View style={[styles.leftView]}>
                <Avatar imageStyle={[styles.avatar]}
                        uri={initialPerson.avatar} size={50} onPress={avatarPressed}/>
            </View>
            <View style={[styles.rightView]}>
                <Text style={[styles.name]}>{initialPerson.name}</Text>
                <Text style={[styles.email]}>{initialPerson.email}</Text>
                <View style={[styles.dateView]}>
                    <Text style={[styles.text]}>
                        {moment(initialPerson.createdDate).startOf('day').fromNow()}
                    </Text>
                    <Icon name='trash-can-outline' size={26} color={Colors.lightBlue500}
                          onPress={deletePressed}/>
                </View>
                <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{initialPerson.comments}
                </Text>
                <Image style={[styles.image]} source={{uri: initialPerson.image}}/>
                <View style={[styles.countsView]}>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={commentPressed}
                              name="comment" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={comment}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={retweetPressed}
                              name="repeat-variant" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={retweet}/>
                    <IconText viewStyle={[styles.touchableIcon]}
                              onPress={heartPressed}
                              name="heart" size={24} color={Colors.blue500}
                              textStyle={[styles.iconText]} text={heart}/>
                </View>
            </View>
        </View>
    )
}
export default Person;
