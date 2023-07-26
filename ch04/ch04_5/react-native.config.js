module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    project: {
        ios: {},
        android: {},
    },
    env: {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    },
    assets: ['./src/assets/fonts']
}
