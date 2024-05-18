import React from 'react'
import news from '../assets/News.jpg'
import SubNav from './SubNav'
import NewsM from './NewsM'
import Footer from './Footer'


const News:React.FC = () => {
  return (
    <div className='News w-full'>
      <SubNav main="Home" submain="News" heading="Gallery" bgimg={news}/>

{/* the main content starts */}
<NewsM/>
<Footer/>
    </div>
  )
}

export default News
