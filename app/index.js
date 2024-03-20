import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Index() {
    return (
        <View style={ styles.view }>
            <Text>Home</Text>
            <Link href="home">Home Screen</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})