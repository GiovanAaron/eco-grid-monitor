import React from 'react';
import styles from './NotGreenResultCard.module.css';
import loader_icon from '../../assets/loader_icon.svg';
import rendesco_grid_logo from '../../assets/rendesco_grid_logo.svg';
import green_chart from '../../assets/green_chart.svg';
import not_green_chart from '../../assets/not_green_chart.svg';

function NotGreenResultCard({rate}) {
  return (
    <div className={styles.container}>
 
   <img className={styles.notGreenChartIcon} alt="" src={not_green_chart} />
    <div className={styles.resulttext}>
    <p className={styles.ohNo}>Oh no!</p>
    <p className={styles.fossilFuelConsumptionIsUp}>
    <span>{`Fossil Fuel consumption is up by `}</span>
    <span className={styles.span}>{rate}%</span>
    <span className={styles.fromYesterdayAt}> from yesterday at this hour</span>
    </p>
    </div>
    <i className={styles.disclaimertext}>Disclaimer: Energy data is reported with an approximate 90-minute delay.</i>
    <div className={styles.greenbtn}>
    <div className={styles.checkAgain}>Check Again</div>
    </div>
    <div className={styles.overlay} />
    <img className={styles.rendescoGridLogoIcon} alt="" src={rendesco_grid_logo} />
    <div className={styles.advisory}>We advise that you reduce your energy consumption</div>
    </div>)
}

export default NotGreenResultCard;
