import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from './Loading'

const URL =
  'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'

const TourDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const { Name, Add, Opentime, Toldescribe, Picture1 } = data
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(URL)
      const responseJson = await response.json()
      const newData = responseJson.data.XML_Head.Infos.Info.filter(
        (item) => item.Id === id
      )
      setData(...newData)
    }
    fetchAPI()
  }, [])

  return (
    <>
      {data.length !== 0 ? (
        <main>
          <h2 className='attraction-name'>{Name}</h2>
          <div className='container'>
            <input
              className='button'
              type='button'
              value='
      回列表'
              onClick={() => navigate('/tour')}
            />
            <p className='bold'>開放時間: {Opentime}</p>
            <p className='bold'>地址: {Add}</p>
            <img className='attraction-img' src={Picture1} alt='' />
            <p className='content'>{Toldescribe}</p>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default TourDetails
