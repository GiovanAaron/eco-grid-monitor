import React, { useState, useEffect } from 'react';
import styles from './GreenResultCard.module.css';
import green_chart from '../../assets/green_chart.svg';
import rendesco_grid_logo from '../../assets/rendesco_grid_logo.svg';
import LoadingCard from '../loading_card/LoadingCard';

function GreenResultCard({ handleFetchData, setEnergyStatus }) {
    const [rate, setRate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [insights, setInsights] = useState(null);

    // Fetch data on mount & when "Check Again" is clicked
    const fetchData = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
        
        const fetchedInsights = await handleFetchData(); // ✅ Now this will return valid data
        console.log(fetchedInsights);
        if (fetchedInsights) {

            setInsights(fetchedInsights);
            setRate(Math.round(fetchedInsights.greenPercentage * 100) / 100);
        }
        if (!fetchedInsights.isRising) {
            setIsLoading(false);
        } else setEnergyStatus("not green");
        
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    if (isLoading) {
        return <LoadingCard />; // Show loading until data is fetched
    }

    return (
        <div className={styles.container}>
            <img className={styles.greenChartIcon} src={green_chart} />
            <div className={styles.resulttext}>
                <p className={styles.goodNews}>Good news!</p>
                <p className={styles.fossilFuelConsumptionIsDow}>
                    <span>{`Fossil Fuel consumption is down `}</span>
                    <span className={styles.span}>{rate}%</span>
                    <span className={styles.fromYesterdayAt}> from yesterday at this hour</span>
                </p>
            </div>
            <i className={styles.disclaimertext}>Disclaimer: Energy data is reported with an approximate 90-minute delay.</i>
            <button className={styles.greenbtn}>
                <div className={styles.checkAgain} onClick={fetchData}>Check Again</div>
            </button>
            <div className={styles.overlay} />
            <img className={styles.rendescoGridLogoIcon} src={rendesco_grid_logo} />
        </div>
    );
}

export default GreenResultCard;
