import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

//Initial test component for react native
const Dashboard: React.FC = () => {
    const [symbol, setSymbol] = useState('');

    return (
    <View>
        <TextInput value={symbol} onChangeText={setSymbol} />
        <Button onPress={() => getQuote({variables: { symbol }})} title= "Get Quote" />
        <Text> {JSON.stringify(error || data)} </Text>
    </View>
    );
};

export default Dashboard;
