import { gql } from '@apollo/client';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SnapshotLookupFragment } from '../../../generated/graphql';
import { colors, spacing } from '../styles';
import Spacer from '../Spacer';
import { WithFragments } from '../types';
import ChangePercent from '../ChangePercent';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: spacing[400],
    },
    header: {
        fontSize: 18,
        marginBottom: 18,
    },
    group: {
        flex: 1,
    },
    groups: {
        flexDirection: "row",
    },
    cagr: {
        color: colors.labelSubtle,
        fontSize: 10,
        alignSelf: "flex-end",
    },
    percent: {
        marginVertical: 4,
    },
    timeframe: {
        fontSize: 12,
    },
});

type Props = {
    lookup: SnapshotLookupFragment
};

const Snapshot: React.FC<Props> & WithFragments= ({lookup}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Snapshot</Text>

            <View style={styles.groups}>
                <View style={styles.group}>
                    <Text style={styles.timeframe} >Today</Text>
                    <ChangePercent value={lookup.snapshotToday.changePercent} style={styles.percent} />
                </View>
                <Spacer width={10}/>

                <View style={styles.group}>
                    <Text style={styles.timeframe}>1Y</Text>
                    <ChangePercent value={lookup.snapshot1Year.changePercent} style={styles.percent} />
                </View>
                <Spacer width={10}/>

                <View style={styles.group}>
                    <Text style={styles.timeframe}>5Y</Text>
                    <ChangePercent value={lookup.snapshot5Year.changePercent} style={styles.percent} />
                    <Text style={styles.cagr}>{lookup.snapshot5Year.cagrPercent}%</Text>
                </View>
                <Spacer width={10}/>

                <View style={styles.group}>
                    <Text style={styles.timeframe}>10Y</Text>
                    <ChangePercent value={lookup.snapshot10Year.changePercent} style={styles.percent} />
                    <Text style={styles.cagr}>{lookup.snapshot10Year.cagrPercent}%</Text>
                </View>
            </View>
        </View>
    );
};

Snapshot.fragments = {
    lookup: gql`
    fragment SnapshotLookup on Lookup {
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
    }
    `
};

export default Snapshot;