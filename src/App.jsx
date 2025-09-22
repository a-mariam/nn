import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count] = useState(0)

  return (
    <div className={ `w-[100vw]  h-[100vh] bg-red-300`}>
      <p className={` mr-auto ml-auto mt-auto mb-auto text-2xl text-purple-50  `}>yoooo{count}</p>
    </div>
  )
}

export default App
