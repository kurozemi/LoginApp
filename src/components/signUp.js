import React, { useState } from 'react'
import { AsyncStorage } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

function RadioButton(props) {
    return (
        <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: '#fff',
                    }} />
                    : null
            }
        </View>
    );
}

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);
    const [isOtherGender, setIsOtherGender] = useState(false);


    const checkIsBlank = () => {
        if (username == '' || password == '' || email == '' || phone == '')
            return true;
        return false;
    }

    const selectGender = (gender) => {

    }

    return (
        <View style={signup_style.main}>
            <Text style={signup_style.brandName}>Sign Up</Text>

            <View style={signup_style.container}>
                <TextInput
                    style={signup_style.inputText}
                    keyboardType = 'email-address'
                    placeholder='Email '
                    onChangeText={(inp_email) => setEmail(inp_email)}
                    defaultValue={email}
                >
                </TextInput>
                <TextInput
                    style={signup_style.inputText}
                    keyboardType = 'number-pad'
                    placeholder='Phone Number '
                    onChangeText={(inp_phone) => setPhone(inp_phone)}
                    defaultValue={phone}
                >
                </TextInput>
                <TextInput
                    style={signup_style.inputText}
                    placeholder='Enter your username'
                    onChangeText={(inp_username) => setUsername(inp_username)}
                    defaultValue={username}
                >
                </TextInput>
                <TextInput
                    secureTextEntry = {true}
                    style={signup_style.inputText}
                    placeholder='Enter your password'
                    onChangeText={(inp_password) => setPassword(inp_password)}
                    defaultValue={password}
                >
                </TextInput>

                <View style={signup_style.gender}>

                    <Text style={[ {fontWeight: 'bold', fontSize: 17},signup_style.whiteText]}>Gender</Text>

                    <TouchableOpacity
                        onPress={() => { setIsMale(true); setIsFemale(false) }}
                        activeOpacity={0.7}
                    >
                        <RadioButton selected={isMale} />
                        <Text style={signup_style.whiteText}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setIsMale(false); setIsFemale(true) }}
                        activeOpacity={0.7}
                    >
                        <RadioButton selected={isFemale} />
                        <Text style={signup_style.whiteText}>Female</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={signup_style.loginBtn}
                    onPress={async () => {
                        if (!checkIsBlank()) {
                            
                            if (await AsyncStorage.getItem(username) !== null)
                            {
                                alert('There\'s already an account with this username');
                            }
                            else {
                                await AsyncStorage.setItem(username, password);
                                navigation.navigate('Sign In');
                            }
                        }
                        else {
                            alert('Please fill in all the information');
                        }
                    }}
                ><Text style={signup_style.signUpText}>Sign Up</Text></TouchableOpacity>

                <View style={signup_style.noaccount_layout}>
                    <Text style={signup_style.logInText}>Already have an account?</Text>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Sign In')}
                    >
                        <Text style={signup_style.logInText2}>Sign In</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const signup_style = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#282C34',
    },
    container: {
        flex: 1,
        marginLeft: 30,
        justifyContent: "center",
        marginBottom: 30,
        marginRight: 30,
    },

    signUpText: {
        color: 'white',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    noaccount_layout: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
    },
    logInText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
    },
    logInText2: {
        paddingLeft: 10,
        color: 'rgba(8, 220, 252, 0.7)',
        fontSize: 17,
        fontWeight: 'bold',
    },

    whiteText: {
        color: 'white',

    },
    gender: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    brandName: {
        top: 100,
        left: 30,
        paddingBottom: 15,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
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
        backgroundColor: 'white',
        fontSize: 17,

        alignSelf: "stretch",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'white',

        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    }
});

export default SignUp;