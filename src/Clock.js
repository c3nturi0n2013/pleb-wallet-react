import React, { useState, useEffect } from 'react'
import './AnalogClock.css'
import Bitcoin from './Bitcoin'

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  }, [])

  const tick = () => {
    setCurrentTime(new Date())
  }

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <div>
      <h2>
        {formatTime(currentTime.getHours())}:
        {formatTime(currentTime.getMinutes())}:
        {formatTime(currentTime.getSeconds())}
      </h2>
      {/* <div className="App">
        <Bitcoin />
      </div> */}
    </div>
  )
}

export default Clock
