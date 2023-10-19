import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WithFragments } from "../types";
import { gql } from "@apollo/client";
import { OverviewLookupFragment } from "../../../generated/graphql";
import { formatMoney } from "../../modules/util";

const styles = StyleSheet.create({
    container: {},
});

type Props = {
    lookup: OverviewLookupFragment
};

const Overview: React.FC<Props> & WithFragments = ({lookup}) => {
    return (
    <View style={styles.container}>
        <Text>Market cap</Text>
        <Text>{formatMoney(lookup.stats.marketCap)}</Text>
    </View>
    );
};

Overview.fragments = {
    lookup: gql`
    fragment OverviewLookup on Lookup {
        stats {
            marketCap
            peRatioTtm
            peRatioFwd
            profitMarginPercent
            freeCashFlowYield
            dividendYield
            }
    }
    `
};

export default Overview;