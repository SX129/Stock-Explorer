import { Link } from "expo-router";
import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";

const Home: FC = () => {
    return (
        <SafeAreaView>
            <Text> Examples </Text>

            <Link href="/symbol/AAPL"> AAPL </Link>
        </SafeAreaView>
    );
};

export default Home;