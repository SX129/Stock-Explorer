import { round } from "lodash";

export const formatMoney = (value: number) => {
    if (value >= 1000000000000) return `$${round(value / 1000000000000, 2)}T`;
    if (value >= 1000000000) return `$${round(value / 1000000000, 2)}B`;
    if (value >= 1000000) return `$${round(value / 1000000, 2)}M`;
    return `$${value}`;
}