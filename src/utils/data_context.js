
function filterByBaselineSettlementPeriod(dataArray) {
    // Take the last object in the array to get the baseline settlementPeriod
    const baselineSettlementPeriod = dataArray[dataArray.length - 1].settlementPeriod;

    // Filter out all objects that don't have the same settlementPeriod
    const filteredData = dataArray.filter(entry => entry.settlementPeriod === baselineSettlementPeriod);

    return filteredData;

}

function calculateEnergyTotals(dataArray) {
    const classification = {
        BIOMASS: "Green",
        CCGT: "Not green",
        COAL: "Not green",
        INTELEC: "Neutral",
        INTEW: "Neutral",
        INTFR: "Neutral",
        INTGRNL: "Neutral",
        INTIFA2: "Neutral",
        INTIRL: "Neutral",
        INTNED: "Neutral",
        INTNEM: "Neutral",
        INTNSL: "Neutral",
        INTVKL: "Neutral",
        NPSHYD: "Green",
        NUCLEAR: "Green",
        OCGT: "Not green",
        OIL: "Not green",
        OTHER: "Neutral",
        PS: "Green",
        WIND: "Green"
    };
    
    
    const totals = {
        "Green": 0,
        "Not green": 0,
        "Neutral": 0
    };
        // console.log(dataArray)
    dataArray.data.forEach(item => {
            // console.log(item)
            const category = classification[item.fuelType];
            // console.log(fuelType)
            if (category) {
                totals[category] += item.generation;
            }
        });
    ;
    
    return totals;
}

function compareEnergyTotals(totals1, totals2) {
    const calculatePercentageChange = (oldValue, newValue) => {
        if (oldValue === 0) return newValue === 0 ? 0 : 100;
        return ((newValue - oldValue) / oldValue) * 100;
    };
    
    return {
        isRising: totals1["Not green"] < totals2["Not green"],
        notGreenPercentage: calculatePercentageChange(totals1["Not green"], totals2["Not green"]),
        greenPercentage: calculatePercentageChange(totals1["Green"], totals2["Green"]),
        neutralPercentage: calculatePercentageChange(totals1["Neutral"], totals2["Neutral"])
    };
}




export { filterByBaselineSettlementPeriod , calculateEnergyTotals, compareEnergyTotals};
