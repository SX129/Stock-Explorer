import { gql } from '@apollo/client';
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { HeaderLookupFragment } from '../../../generated/graphql';
import { colors, spacing } from '../styles';
import Spacer from '../Spacer';
import { WithFragments } from '../types';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: colors.border,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: spacing[400],
        paddingTop: 24,
    },
    symbol: {
        color: colors.labelSubtle,
        fontSize: 14,
    },
    companyName: {
        fontSize: 24,
    },
    logo: {
        width: 80,
        height: 80,
    },
});

type Props = {
    lookup: HeaderLookupFragment
};

const Header: React.FC<Props> & WithFragments= ({lookup}) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.symbol}>{lookup.symbol}</Text>
                <Spacer height={6} />
                <Text style={styles.companyName}>{lookup.companyName}</Text>
            </View>
            {lookup.logoUrl ? <Image style={styles.logo} source={{uri: lookup.logoUrl}}/> : null}
        </View>
    );
};

Header.fragments = {
    lookup: gql`
    fragment HeaderLookup on Lookup {
        symbol
        companyName
        logoUrl
    }
    `
};

export default Header;