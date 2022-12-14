import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading.js'

const URL =
  'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'

const TourList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(URL)
      const responseJson = await response.json()

      setData(responseJson.data.XML_Head.Infos.Info)
    }

    fetchAPI()
  }, [])

  return (
    <>
      <div className='tour-list'>ๆ้ๅ่กจ</div>
      {data.length !== 0 ? (
        <div className='wrapper'>
          {data.map((item) => {
            return (
              <li key={item.Id}>
                <Link to={`${item.Id}`}>{item.Name}</Link>
              </li>
            )
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default TourList
