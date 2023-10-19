import { gql, useQuery } from "@apollo/client";
import { useLocalSearchParams  } from "expo-router";
import { round } from "lodash";
import { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Chart from "../components/Chart";
import SearchBar from "../components/SearchBar";
import SimpleTable from "../components/SimpleTable";
import { LookupQuery } from "../../generated/graphql";
import Header from "../components/stocks/Header";
//import { formatMoney } from "../..modules/util";

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
    },
    attributes: {
        paddingBottom: 45,
    },
    revenueHeader: {
        marginTop: 100,
    },
});

const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

//Parent view for all components
const Overview: FC = () => {

    const { symbol } = useLocalSearchParams();

    //Query hook to retrieve queried data and its states
    const {data, loading, error} = useQuery<LookupQuery>(gql`
        query Lookup {
            main: lookup(symbol: "AAPL") {
                ...HeaderLookup

                stats {
                    marketCap
                    peRatioTtm
                    peRatioFwd
                    profitMarginPercent
                    freeCashFlowYield
                    dividendYield
                }

                snapshotToday: snapshot(timeframe: today) {
                    changePercent
                }

                snapshot1Year: snapshot(timeframe: year1) {
                    changePercent
                }

                snapshot5Year: snapshot(timeframe: year5) {
                    changePercent
                    cagrPercent
                }

                snapshot10Year: snapshot(timeframe: year10) {
                    changePercent
                    cagrPercent
                }

                historicalTotalReturn(timeframe: year10) {
                    changePercent
                    data {
                        date
                        value
                    }
                }

                revenue(resolution: quarterly) {
                    date
                    value
                }
            }

            comparison: lookup(symbol: "VOO"){
                symbol

                stats {
                    peRatioFwd
                    dividendYield
                }

                historicalTotalReturn(timeframe: year10) {
                    changePercent
                    data {
                        date
                        value
                    }
                }
            }
        }
        ${Header.fragments.lookup}
    `, { variables: {symbol}}
    );

    if (error) return <Text>{error.message}</Text>;

    //
    const revenueData = data ? [...data.main.revenue].reverse().map((point) => ({
        ...point,
        label: currencyFormatter.format(point.value) })) : [];

    return (
        <ScrollView style={{width: '100%'}}>
            <SearchBar defaultValue={symbol} />

            {loading || !data ? (
                <Text> Loading... </Text>
            ) : (
                <View style={styles.body}>
                    <Header lookup={data.main} />

                    <Text style={styles.revenueHeader}> Revenue </Text>
                    <Chart data={revenueData}/>
                </View>
            )}
        </ScrollView>
    );
};

export default Overview;