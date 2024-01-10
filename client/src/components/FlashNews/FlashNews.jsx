import React from 'react'
import "./FlashNews.scss"
import useFetch from '../../hooks/useFetch';
import truncateText from "../../utils/truncateText"
const FlashNews = () => {
  const{data,loading,error}=useFetch("/news?isFlash=true");
  return (
    <div className='flashNews'>
      {
        loading ? <p>Loading...</p>:
        <>
        {data.map(news=>(
          <div className="flashNewsContents" key={news._id}>
              <h1 className="headline">{news.title}</h1>
              <span className="newsImage">
                  <img src={news.image} alt="newsImg" />
              </span>
              <span className="newsSummary">{news.summary}</span>
              <span className="newsContent"><b>{news.location} - </b>{truncateText(news.content,145)}</span>
              <span className="continueReading">Continue Reading</span>
          </div>
        ))}  
        </>
      }
    </div>
  )
}

export default FlashNews