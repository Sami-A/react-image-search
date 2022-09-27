const formatter = Intl.NumberFormat("en", { notation: "compact" });

const numberFormat = (num: number): string => formatter.format(num);

export default numberFormat;
