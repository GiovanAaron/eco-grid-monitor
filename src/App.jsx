import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreenResultCard from './components/green_result_card/GreenResultCard'
import NotGreenResultCard from './components/not_green_result_card/NotGreenResultCard'

import LoadingCard from './components/loading_card/LoadingCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GreenResultCard/>
    </>
  )
}

export default App
