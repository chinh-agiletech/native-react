import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 4,
        backgroundColor: '#007bff',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default Button;