import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'



const FormField = ({title, value, placeholder, handleChangeText, ...props}: any) => {
    const [showPassword, setShowPassword] = useState(false);

    const { keyboardType, multiline, numberOfLines} = props;

    return (
        
        <View style={styles.field}>
            <TextInput 
                style={styles.text}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#ec4899"
                onChangeText={handleChangeText}
                secureTextEntry={title === 'Password' && !showPassword}
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
            />

            {title === 'Password' && (
                <TouchableOpacity style={styles.icon} onPress={() =>
                    setShowPassword(!showPassword)}>
                    <Feather 
                        name={!showPassword ? 'eye' : 'eye-off'}
                        color='#ec4899'
                        size={16}
                    />

                </TouchableOpacity>
            )}
        </View>
        
    )
};

const styles = StyleSheet.create({
    field: {
        display: 'flex',
        flexDirection: 'row',
        width: 250,
        borderBottomWidth: 3,
        borderRadius: 5,
        borderColor: '#ec4899',
    },
    text: {
        width: 215,
        textAlign: 'left',
        lineHeight: 30,
        fontSize: 16,
        fontFamily: 'Chewy',
        color: 'black',
    },
    icon: {
        justifyContent: 'center',
    }
});

export default FormField
