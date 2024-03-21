import { View, Text, TextInput, StyleSheet } from 'react-native'

export function AuthForm ( props ) {
    return(
        <View style={ styles.form }>
            <Text style={ styles.title }>{ props.title }</Text>
            <Text>Email</Text>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 20,
        minWidth: "90%",
        backgroundColor: "lightblue",
        borderRadius: 20,
        marginVertical: 30,
        padding: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 24,
    }
})