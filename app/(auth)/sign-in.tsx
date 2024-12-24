import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { darkTheme } from "../styles/theme";
import { router } from "expo-router";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: darkTheme.background }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardView}
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Sign in</Text>

                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="m@example.com"
                                placeholderTextColor="#666"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                                editable={!isLoading}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={[styles.input, styles.passwordInput]}
                                    secureTextEntry={secureTextEntry}
                                    value={password}
                                    onChangeText={setPassword}
                                    editable={!isLoading}
                                />
                                <Pressable
                                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                                    style={styles.eyeIcon}
                                >
                                    <Feather
                                        name={secureTextEntry ? "eye" : "eye-off"}
                                        size={24}
                                        color="#666"
                                    />
                                </Pressable>
                            </View>
                        </View>

                        <TouchableOpacity
                            style={[styles.signInButton, { backgroundColor: darkTheme.foreground }]}
                            onPress={() => { router.push("/dashboard") }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={[styles.signInButtonText, { color: darkTheme.background }]}>Sign in</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    keyboardView: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    form: {
        gap: 16,
    },
    inputContainer: {
        gap: 8,
    },
    label: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },
    input: {
        backgroundColor: "#111",
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        padding: 16,
        color: "#fff",
        fontSize: 16,
    },
    passwordContainer: {
        position: "relative",
    },
    passwordInput: {
        paddingRight: 50,
    },
    eyeIcon: {
        position: "absolute",
        right: 16,
        top: 16,
    },

    signInButton: {
        backgroundColor: "#0070f3",
        padding: 16,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 8,
    },
    signInButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    forgotPassword: {
        alignItems: "center",
        marginTop: 16,
    },
});
