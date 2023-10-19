import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import { colors } from "./styles";
import Svg, { Path } from "react-native-svg";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.greenBackground,
        borderRadius: 5,
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    negative: {
        backgroundColor: colors.redBackground,
    },
    text: {
        color: colors.green,
        fontWeight: '500',
        fontSize: 15,
        marginLeft: 5,
    },
    textNegative: {
        color: colors.red,
    },
});

type Props = {
    value: number;
};

const ChangePercent: React.FC<Props> = ({value}) => {

    const isPositive = value >= 0;

    return (
        <View style={[styles.container, !isPositive && styles.negative]}>
            {isPositive ? <UpArrow /> : <DownArrow/>}
            <Text style={[styles.text, !isPositive && styles.textNegative]}>{Math.abs(value)}%</Text>
        </View>
    );
};

const UpArrow = () => {
    return (
        <Svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
        >
            <Path d="M4.125 0L8.02211 6.75H0.227886L4.125 0Z" fill="#58A55C"/>
        </Svg>
    )
}

const DownArrow = () => {
    return (
        <Svg
            width="9"
            height="7"
            viewBox="0 0 9 7"
            fill="none"
        >
            <Path d="M4.125 7L0.227886 0.250001L8.02211 0.25L4.125 7Z" fill="#A60E0D"/>
        </Svg>
    )
}

export default ChangePercent;