import React from 'react';
import styles from './NotGreenResultCard.module.css';
import loader_icon from '../../assets/loader_icon.svg';
import rendesco_grid_logo from '../../assets/rendesco_grid_logo.svg';
import green_chart from '../../assets/green_chart.svg';
import not_green_chart from '../../assets/not_green_chart.svg';
import { useState, useEffect } from 'react';
import LoadingCard from '../loading_card/LoadingCard';
import BarChart from '../bar_chart/DataVis';
function NotGreenResultCard({handleFetchData, setEnergyStatus}) {

  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [greenPercentage, setGreenPercentage] = useState(null);

  // Fetch data on mount & when "Check Again" is clicked
  const fetchData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      
      const {fetchedInsights, greenPercentage, todayEnergyTotals} = await handleFetchData(); // ✅ Now this will return valid data
      console.log(fetchedInsights);
      if (fetchedInsights) {
          setGreenPercentage(greenPercentage);
          setInsights(fetchedInsights);
          setRate(Math.round(fetchedInsights.notGreenPercentage * 100) / 100);
      }
      if (fetchedInsights.isRising) {
          setIsLoading(false);
      } else setEnergyStatus("green");
      
  };

  useEffect(() => {
      fetchData(); // Fetch data on component mount
  }, []);

  if (isLoading) {
      return <LoadingCard />; // Show loading until data is fetched
  }




  return (
    <div className={styles.container}>
        
        <BarChart/>
    <div className={styles.greenPerc}>
                       <span className={styles.dot}></span> <p>{greenPercentage}% Green Power</p>
                   </div>
    <div className={styles.resulttext}>
    <p className={styles.ohNo}>Oh no!</p>
    <p className={styles.fossilFuelConsumptionIsUp}>
    <span>{`Fossil Fuel consumption is up by `}</span>
    <span className={styles.span}>{rate}%</span>
    <span className={styles.fromYesterdayAt}> from yesterday at this hour</span>
    </p>
    </div>
    <i className={styles.disclaimertext}>Disclaimer: Energy data is reported with an approximate 90-minute delay.</i>
    <button onClick={fetchData} className={styles.greenbtn}>
    <div className={styles.checkAgain}>Check Again</div>
    </button>
    <img className={styles.rendescoGridLogoIcon} alt="" src={rendesco_grid_logo} />
    <div className={styles.advisory}>We advise that you reduce your energy consumption</div>
    <div className={styles.overlay} />
    </div>)
}

export default NotGreenResultCard;
