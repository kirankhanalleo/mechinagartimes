import React from 'react'
import "./LatestNews.scss"
import { MdOutlineArrowOutward } from "react-icons/md";
import useFetch from '../../hooks/useFetch';
import truncateText from "../../utils/truncateText"
const LatestNews = () => {
    const{data,loading,error}=useFetch("/news?latest=true");
  return (
    <div className="latestNews">
        <div className="latestNewsContents">
            <div className="heading">
                <h1>Latest News</h1>
                <span className="viewAll">View All</span>
            </div>
            <div className="newsContainerWrapper">
            {loading ? "Loading":
            <>
                {data.map(news=>(
                    <div className="newsContainer" key={news._id}>
                        <img src={news.image} alt="newsImage" className='newsImage'/>
                        <h1 className="newsHeadline">{truncateText(news.title,8)}</h1>
                        <span className="newsContent">{truncateText(news.content,40)}</span>
                        <span className="readMore">
                            Continue Reading
                            <MdOutlineArrowOutward className='readMoreIcon'/>
                        </span>
                    </div>
                ))}
            </>
            }
            </div>
        </div>
    </div>
  )
}

export default LatestNews