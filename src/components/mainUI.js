import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../assets/colors'

const MainUI = ({ route, navigation }) => {
    const { username, password } = route.params.user;
    return (
        <View
            style={main_styles.parentView}
        >
            <Text style={main_styles.whiteBigText}>Hello {username} </Text>
            <TouchableOpacity
                style={main_styles.logOut}
                onPress={() => { navigation.navigate("Sign In"); }}
            >
                <Text style={main_styles.whiteBigText}>Log Out</Text>
            </TouchableOpacity>

        </View>
    )
}

const main_styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: Colors.appTheme,
        alignItems: 'center'
    },

    whiteBigText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
    },
    logOut: {
        borderRadius: 3,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(8, 220, 252, 0.8)',
    },
}

)

export default MainUI