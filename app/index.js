import { Link } from "expo-router"
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native"

import { AuthForm } from "../components/AuthForm"

export default function Index() {
    return (
        <SafeAreaView style={ styles.view }>
            <View>
                <AuthForm title="Login" />
            </View>
            
            <Link href="home">Home Screen</Link>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
    }
})