import React, { useEffect, useState } from 'react'
import PGNViewer from './components/pgnViewer/pgnviewer'

function App()  {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  

  return (
    <div>
      <PGNViewer />
    </div>
  )
}

export default App