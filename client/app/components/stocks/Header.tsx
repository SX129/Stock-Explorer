import { DocumentNode, gql } from '@apollo/client';
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { HeaderLookupFragment } from '../../../generated/graphql';
import { colors } from '../styles';
import Spacer from '../Spacer';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    symbol: {
        color: colors.labelSubtle,
        fontSize: 14,
    },
    companyName: {
        fontSize: 24,
    },
    logo: {
        width: 100,
        height: 100,
    },
});

type Props = {
    lookup: HeaderLookupFragment
};

const Header: React.FC<Props> & {fragments: {[key: string]: DocumentNode };}= ({lookup}) => {
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