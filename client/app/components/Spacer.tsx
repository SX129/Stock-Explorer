import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {}
});

type Props = 
    |   {
            height?: never;
            width?: number;
        } 
    |   { 
            height?: number;
            width?: never;
        };

const Spacer: React.FC<Props> = ({width, height}) => {
    return <View style={{width, height}} />;
}

export default Spacer;