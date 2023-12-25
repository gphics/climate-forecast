
import { useEffect, useState } from 'react'
import Nav from './Nav'
import getLocation from './helper/getLocation'
import getLocationState from './helper/getLocationState'
import constructUrl from './helper/constructUrl'
import storeCtrl from "./helper/storeCtrl"
import conversion from './helper/conversion'

function Climate() {
  const [climateData, setClimateData] = useState(null)
  async function fetchData() {
    const lat = storeCtrl.getItem("lat")
    const lon = storeCtrl.getItem("lon")
    const url = constructUrl(lat, lon)
    const first = await fetch(url)
    const second = await first.json()
    const { humidity, pressure, temp } = second.main
    const arr = [
      { name: "Pressure", value: pressure },
      { name: "Humidity", value: humidity },
      { name: "Temperature", value: temp },
    ]
    setClimateData(arr)
  }

  useEffect(() => {
    const location_state = getLocationState()
    if (!location_state) getLocation()
    fetchData()
  }, [])
  return (
    <div className='climate-page'>
      <Nav />
      {climateData !== null ? <ClimateInfo data={climateData} /> : <ClimateLoading />}

    </div>
  )
}
function ClimateInfo({ data }) {
  return <main className="climate-info">
    <PressureInfo {...data[0]} />
    <TemperatureInfo {...data[2]} />
    <HumidityInfo {...data[1]} />

    <article className="climate-each note">Note : All plant species have their individual standard planting climatic parameter range but the standard value given here is a general standard for all plants.</article>
  </main>
}
// temp start
function TemperatureInfo({ name, value }) {
  const { kelvin, celcius, fahrenheit } = conversion.tempConverter(value)
  const [recValue, setRecValue] = useState("")


  function updateRec() {
    if (fahrenheit >= 65 & fahrenheit <= 100) {
      setRecValue(`Base on the standard temperature value, it's recommended to plant now.`)
    } else if (fahrenheit < 65) {
      setRecValue("The current temperature is less than the recommended temperature hence it is not best to plant now.")
    } else {
      setRecValue("The current temperature is too high and it is not recommended to plant at the moment.")
    }
  }
  useEffect(() => { updateRec() }, [])
  return <div className='climate-each temperature-info'>
    <h4> {name} </h4>
    <ul>
      <li>Kelvin: {kelvin}</li>
      <li>Celcius: {celcius} </li>
      <li>Fahrenheit: {fahrenheit} </li>
    </ul>
    <h4>Standard Temperature: 65 to 100F</h4>
    <p>Recommendation: {recValue}</p>
  </div>
}
// temp end
function HumidityInfo({ name, value }) {
  const [recValue, setRecValue] = useState("")
  function updateRec() {
    if (value >= 40 & value <= 60) {
      setRecValue("This is the best moment to plant your desired crop")
    } else if (value < 40) {
      setRecValue("It is not recommended to plant at the moment")
    } else {
      setRecValue("It is not recommended to plant at the moment")
    }
  }
  useEffect(() => { updateRec() }, [])
  return <div className='climate-each humidity-info'>
    <h4> current {name} : {value}% </h4>
    <h4>Standard {name}: 40-60%</h4>
    <p>Recommendations: {recValue} </p>
  </div>
}
function PressureInfo({ name, value }) {
  const { psi, hPa, atm } = conversion.pressureConverter(value)
  const [recValue, setRecValue] = useState("")
  function updateRec(params) {
    if (atm === 1) {
      setRecValue("This is the best moment to plant your desired crop")
    } else if (atm < 1) {
      setRecValue("Base on the standard, it is not recommended to plant at the moment")
    } else {
      setRecValue("Base on the standard, it is not recommended to plant at the moment")
    }
  }
  useEffect(() => { updateRec() }, [])
  return <div className='climate-each pressure-info'>
    <h4> Current {name}: </h4>
    <ul>
      <li>psi: {psi}</li>
      <li>hPa: {hPa}</li>
      <li>atm: {atm}</li>
    </ul>
    <h4>Recommended {name}: 1 atm</h4>
    <p>Recommendation: {recValue} </p>
  </div>
}
function ClimateLoading() {
  return <div className='climate-loading'>Loading ....</div>
}
export default Climate