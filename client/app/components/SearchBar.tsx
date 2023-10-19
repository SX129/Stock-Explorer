import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    searchOuter: {
        backgroundColor: "#555",
    },
    searchInner: {
        flexDirection: "row",
        margin: 15,
    },
    input: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flex: 1,
        padding: 8,
    },
    button: {
        alignItems: "center",
        backgroundColor: "orange",
        borderRadius: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center",
        height: 44,
        width: 44,
    },
    buttonText: {
        color: "#000",
        fontWeight: "500",

    },
});

type Props = {
    defaultValue: number;
};

const SearchBar: React.FC = ({defaultValue}) => {
    return (
        <View style={styles.searchOuter}>
        <SafeAreaView style={styles.searchInner} >
            <TextInput style={styles.input} value={symbol} onChangeText={symbol} />
            <Pressable accessibilityLabel="Go" accessibilityRole="button" style={styles.button} onPress={() => execQuery({variables: {symbol}})} >
                <Text style={styles.buttonText} > Go </Text>
            </Pressable>
        </SafeAreaView>
    </View>
    );
};

export default SearchBar;
