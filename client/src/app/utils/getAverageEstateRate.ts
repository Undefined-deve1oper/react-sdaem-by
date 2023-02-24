export function getAverageEstateRate(rates: any[]) {
    let sumOfRates = 0;

    rates.forEach((rate) => {
        sumOfRates += Number(rate);
    });

    return (sumOfRates / rates.length).toFixed(0).toString();
}
