import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreenResultCard from './components/green_result_card/GreenResultCard'
import NotGreenResultCard from './components/not_green_result_card/NotGreenResultCard'

import LoadingCard from './components/loading_card/LoadingCard'
import fetchEnergyData from './hook/apiCall'

function App() {
  const [count, setCount] = useState(0)

  const [isLoading, setIsLoading] = useState(false);

  const [energyStatus, setEnergyStatus] = useState("green");

  const [energyData, setEnergyData] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
        fetchEnergyData().then((data) => {
            setIsLoading(false);
            setEnergyData(data);
            console.log(data)
        })


    }, 3000);
  }, []);


  if (isLoading) {
    return <LoadingCard />;
  }

  if (energyStatus === "green") {
    return (
      <>
      <GreenResultCard/>
      </>
    )
  }

  return (
    <>
    <NotGreenResultCard/>
    </>
  )
}

export default App
