import React, { useState } from 'react'
import { AsyncStorage } from 'react-native';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    var checkIsBlank = () => {
        if (username == '' || password == '')
            return true;
        return false;
    }

    return (
        <View style={style.main}>
            <Image source={require('../../react-native-logo.png')}
                style={style.logo}
            />

            <View style={style.container}>
                <TextInput
                    style={style.inputText}
                    placeholder='Enter your username'
                    onChangeText={(inp_username) => setUsername(inp_username)}
                    defaultValue={username}
                >
                </TextInput>

                <TextInput
                    secureTextEntry={true}
                    style={style.inputText}
                    placeholder='Enter your password'
                    onChangeText={(inp_password) => setPassword(inp_password)}
                    defaultValue={password}
                >
                </TextInput>


                <TouchableOpacity
                    activeOpacity={0.7}
                    style={style.loginBtn}
                    onPress={async () => {
                        if (!checkIsBlank()) {
                            var message = 'Username or password is incorrect';
                            const val_password = await AsyncStorage.getItem(username);
                            if (val_password !== null) {
                                if (password == val_password)
                                {
                                    navigation.navigate('Main UI', {
                                        user: {
                                            username: username,
                                            password: password
                                        }
                                    });
                                    message = 'Sign in successfully';
                                }
                            }
                            alert(message);
                        }
                        else {
                            alert('Username and password can\'t be blank');
                        }
                        setUsername("");
                        setPassword("");

                    }}
                >
                    <Text style={style.loginText}>Login</Text>
                </TouchableOpacity>

                <View style={style.noaccount_layout}>
                    <Text style={style.signUpText}>Don't have an account yet?</Text>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            setUsername("");
                            setPassword("");
                            navigation.navigate('Sign Up')
                        }}
                    >
                        <Text style={style.signUpText2}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View >
    )
}


const style = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#282C34',
    },
    container: {
        flex: 1,
        marginLeft: 30,
        justifyContent: "center",
        marginBottom: 30,
        bottom: 40,
        marginRight: 30,
    },

    noaccount_layout: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },

    logo: { width: 200, height: 230, top: 30, alignSelf: "center" },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    signUpText2: {
        paddingLeft: 10,
        color: 'rgba(8, 220, 252, 0.7)',
        fontSize: 17,
        fontWeight: 'bold',
    },

    loginBtn: {
        alignSelf: "stretch",
        backgroundColor: 'rgba(8, 220, 252, 0.8)',

        borderWidth: 1,
        borderRadius: 20,

        marginTop: 20,
        marginBottom: 5,


        paddingTop: 10,
        paddingBottom: 10,
    },
    inputText: {
        fontSize: 17,
        backgroundColor: 'white',
        alignSelf: "stretch",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'white',

        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    }
});

export default SignIn;