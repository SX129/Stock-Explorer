import { gql, useQuery } from "@apollo/client";
import { useLocalSearchParams  } from "expo-router";
import { round } from "lodash";
import { FC } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


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

type Props = {
    data: number;
};

const Chart: FC = (data) => {

    return (
        <ScrollView style={{width: '100%'}}>
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
                    <VictoryBar data={data} x="date" y="value" />
                </VictoryChart>
            </View> }
        </ScrollView>
    );
};

export default Chart;