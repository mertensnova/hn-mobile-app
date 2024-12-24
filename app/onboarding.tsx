import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { darkTheme } from './styles/theme';
import { router } from "expo-router";
const { width } = Dimensions.get("window");
export default function OnboardingScreen() {

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: darkTheme.background }]}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.title, { color: darkTheme.primary }]}>Welcome</Text>
                    <Text
                        style={[styles.signInText, { color: darkTheme.secondary }]}
                    >
                        Start your journey with us
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => router.push('/sign-in')}
                    style={[styles.signInButton, { backgroundColor: darkTheme.primary }]}
                >
                    <Text
                        style={[styles.signInText, { color: darkTheme.secondary }]}
                    >
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "hsl(240, 10%, 3.9%)",
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: "space-between",
    },
    header: {
        marginTop: 60,
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        opacity: 0.8,
    },
    signInButton: {
        paddingVertical: 16,
        borderRadius: 12,
        width: width - 48,
        alignSelf: "center",
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    signInText: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
});
