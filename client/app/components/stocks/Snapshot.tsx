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
    },
});

type Props = {
    lookup: SnapshotLookupFragment
};

const Snapshot: React.FC<Props> & WithFragments= ({lookup}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Snapshot</Text>

            <Text>10Y</Text>
            <ChangePercent value={lookup.snapshot10Year.changePercent} />
            <Text>{lookup.snapshot10Year.cagrPercent}%</Text>
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