import { DocumentNode, gql } from '@apollo/client';
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { HeaderLookupFragment } from '../../../generated/graphql';

const styles = StyleSheet.create({
    container: {},
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
            <Text>{lookup.symbol}</Text>
            <Text>{lookup.companyName}</Text>
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