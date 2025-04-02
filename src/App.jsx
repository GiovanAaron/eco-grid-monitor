import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreenResultCard from './components/green_result_card/GreenResultCard'
import NotGreenResultCard from './components/not_green_result_card/NotGreenResultCard'

import LoadingCard from './components/loading_card/LoadingCard'
import fetchEnergyData from './hook/apiCall'
import { filterByBaselineSettlementPeriod, calculateEnergyTotals, compareEnergyTotals } from './utils/data_context'

function App() {
 

  const [isLoading, setIsLoading] = useState(false);

  const [energyStatus, setEnergyStatus] = useState("green");

  const [energyInsights, setEnergyInsights] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
        fetchEnergyData().then((data) => {
            setIsLoading(false);
            // setEnergyData(data);
            // console.log(data)
            const filteredData = filterByBaselineSettlementPeriod(data);
            console.log(filteredData)
            // console.log({filtereddataminus1: filteredData[filteredData.length-1], filtereddata0: filteredData[0]})
            const yesterdayEnergyTotals = calculateEnergyTotals(filteredData[0]);
            const todayEnergyTotals = calculateEnergyTotals(filteredData[filteredData.length-1]);

            console.log({yesterdayEnergyTotals: yesterdayEnergyTotals, todayEnergyTotals: todayEnergyTotals})
            console.log(compareEnergyTotals(yesterdayEnergyTotals, todayEnergyTotals))
            compareEnergyTotals(yesterdayEnergyTotals, todayEnergyTotals).isRising ? setEnergyStatus("not green") : setEnergyStatus("green");
            setEnergyInsights(compareEnergyTotals(yesterdayEnergyTotals, todayEnergyTotals));

        })


    }, 3000);
  }, []);

  


  if (isLoading) {
    return <LoadingCard />;
  }

  if (energyStatus === "not green") {
    return (
      <>
      <GreenResultCard rate={Math.round(energyInsights.greenPercentage * 100) / 100}/>
      </>
    )
  }

  return (
    <>
    <NotGreenResultCard rate={Math.round(energyInsights.notGreenPercentage * 100) / 100}/>
    </>
  )
}

export default App
