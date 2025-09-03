import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface CInputProps {
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
    secureTextEntry?: boolean;
    types?: "text" | "email" | "password" | "number" | undefined;
}

const CInput: React.FC<CInputProps> = ({
    value,
    onChange,
    placeholder,
    secureTextEntry,
    types,
}) => {
    const checktypeInput: Record<NonNullable<CInputProps["types"]>, Partial<TextInputProps>> = {
        'text': {
            keyboardType: "default"
        },
        'email': {
            keyboardType: "email-address",
            autoCapitalize: "none"
        },
        'number': {
            keyboardType: "numeric"
        },
        'password': {
            secureTextEntry: true
        }
    }
    const configType = checktypeInput[types || "text"];
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            {...configType}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 12,
        marginVertical: 8,
    },
});

export default CInput;