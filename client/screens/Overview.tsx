import { gql, useLazyQuery } from "@apollo/client";
import { FC, useState } from "react";
import { DateTime } from 'luxon';
import React from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme, VictoryLabel } from "victory";

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
    victoryContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

//Overview component with Victory charts and Luxon datetime
const Overview: FC = () => {

    //State hook for getting and setting stock ticker
    const [symbol, setSymbol] = useState("");

    //Query hook to retrieve queried data and its state
    const [execQuery, {data, loading, error}] = useLazyQuery(gql`
        query Lookup($symbol: String!) {
            lookup(symbol: $symbol) {
                symbol
                revenue(resolution: quarterly) {
                    date
                    value
                }
            }
        }
    `);

    if (error) return <Text>{error.message}</Text>;

    //Destructuring revenue from queried data and reversing the array to fit the look of the chart
    const chartData = data ? [...data.lookup.revenue].reverse() : [];

    return (
        <ScrollView style={{width: '100%'}}>
            <View style={styles.searchOuter}>
                <SafeAreaView style={styles.searchInner} >
                    <TextInput style={styles.input} value={symbol} onChangeText={setSymbol} />
                    <Pressable accessibilityLabel="Go" accessibilityRole="button" style={styles.button} onPress={() => execQuery({variables: {symbol}})} >
                        <Text style={styles.buttonText} > Go </Text>
                    </Pressable>
                </SafeAreaView>
            </View>
            { loading ? <Text>Loading...</Text> : 
            <View style={styles.victoryContainer}>
                <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
                    <VictoryAxis
                        tickFormat={(date: string) => DateTime.fromISO(date).toLocaleString({
                            month: 'short',
                            year: 'numeric',
                            })
                        }
                        tickLabelComponent={
                            <VictoryLabel angle={-45} style={{ fontSize: 8 }} textAnchor="end" />
                        } 
                    />
                    <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000000000}b`} />
                    <VictoryBar data={chartData} x="date" y="value" />
                </VictoryChart>
            </View> }
        </ScrollView>
    );
};

export default Overview;