import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { WithFragments } from "../types";
import { gql } from "@apollo/client";
import { OverviewLookupFragment } from "../../../generated/graphql";
import { formatMoney } from "../../modules/util";
import { colors, spacing } from "../styles";
import Spacer from "../Spacer";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: spacing[400],
    },
    attribute: {
        borderBlockColor: colors.border,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
    },
    column: {
        flex: 1,

    },
});

type Props = {
    lookup: OverviewLookupFragment
};

const Overview: React.FC<Props> & WithFragments = ({lookup}) => {
    return (
    <View style={styles.container}>
        <View style={styles.column}>
            <View style={styles.attribute}>
                <Text>Market cap</Text>
                <Text>{formatMoney(lookup.stats.marketCap)}</Text>
            </View>
            <View style={styles.attribute}>
                <Text>P/E TTM</Text>
                <Text>{lookup.stats.peRatioTtm}</Text>
            </View>
            <View style={styles.attribute}>
                <Text>P/E FWD</Text>
                <Text>{lookup.stats.peRatioFwd}</Text>
            </View>
        </View>
        <Spacer width={20} />
        <View style={styles.column}>
            <View style={styles.attribute}>
                <Text>Profit margin</Text>
                <Text>{lookup.stats.profitMarginPercent}%</Text>
            </View>
            <View style={styles.attribute}>
                <Text>FCF yield</Text>
                <Text>{lookup.stats.freeCashFlowYield}%</Text>
            </View>
            <View style={styles.attribute}>
                <Text>Div yield</Text>
                <Text>{lookup.stats.dividendYield}%</Text>
            </View>
        </View>
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