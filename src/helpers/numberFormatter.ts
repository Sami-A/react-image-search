const formatter = Intl.NumberFormat("en", { notation: "compact" });

// Compact numbers to => 1k, 1.2M, 7.7B
const numberFormat = (num: number): string => formatter.format(num);

export default numberFormat;
