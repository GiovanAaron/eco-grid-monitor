import React from 'react';
import styles from './GreenResultCard.module.css';
import loader_icon from '../../assets/loader_icon.svg';
import rendesco_grid_logo from '../../assets/rendesco_grid_logo.svg';
import green_chart from '../../assets/green_chart.svg';

function GreenResultCard() {
    return (
        <div className={styles.container}>
        <img className={styles.greenChartIcon}  src={green_chart}/>
        <div className={styles.resulttext}>
        <p className={styles.goodNews}>Good news!</p>
        <p className={styles.fossilFuelConsumptionIsDow}>
        <span>{`Fossil Fuel consumption is down `}</span>
        <span className={styles.span}>15%</span>
        <span className={styles.fromYesterdayAt}> from yesterday at this hour</span>
        </p>
        </div>
        <i className={styles.disclaimertext}>Disclaimer: Energy data is reported with an approximate 90-minute delay.</i>
        <div className={styles.greenbtn}>
        <div className={styles.checkAgain}>Check Again</div>
        </div>
        <div className={styles.overlay} />
        <img className={styles.rendescoGridLogoIcon}  src={rendesco_grid_logo} />
        </div>
        
    );
}

export default GreenResultCard;
