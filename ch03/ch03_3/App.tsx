import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ImageBackground,
	Image,
	Platform,
	View,
	Text,
	Alert,
} from 'react-native'
import * as D from './src/data'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {MD2Colors as Colors} from 'react-native-paper'

const avatarUrl = D.randomAvatarUrl()
const avatarSize = 50

const text = `The sum of a developer's skills equals the sum of their pain`

const onIconPressed = () => Alert.alert('icon pressed')
export default function App() {
	return (
		<SafeAreaView style={[styles.flex]}>
			<ImageBackground
				style={[styles.flex, styles.backgroundImage]}
				source={require('./src/assets/images/bg.jpg')}>
				<Image source={{uri: avatarUrl}} style={[styles.image]} />
				<View style={[styles.flex, styles.padding]}>
					<Text style={[styles.text, styles.regular]}>
						{text} [regular]
					</Text>
					<Text style={[styles.text, styles.medium]}>
						{text} [medium]
					</Text>
					<Text style={[styles.text, styles.semiBold]}>
						{text} [semiBold]n
					</Text>
					<Text style={[styles.text, styles.bold]}>
						{text} [bold]
					</Text>
				</View>
				<Icon
					name="home"
					size={50}
					color={Colors.lightBlue500}
					onPress={onIconPressed}
				/>
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	flex: {flex: 1},
	backgroundImage: {padding: 10},
	image: {
		width: avatarSize,
		height: avatarSize,
		borderRadius: avatarSize / 2,
	},
	padding: {padding: 10},
	text: {textAlign: 'center', fontSize: 25, color: 'white', marginBottom: 10},

	regular: {fontFamily: 'DancingScript-Regular', fontWeight: '400'},
	medium: {fontFamily: 'DancingScript-Medium', fontWeight: '500'},
	semiBold: {fontFamily: 'DancingScript-SemiBold', fontWeight: '600'},

	bold: {
		fontFamily: 'DancingScript-Bold',
		fontWeight: Platform.select({ios: '700', android: '600'}),
	},
})
