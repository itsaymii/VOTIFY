import React, { useEffect } from 'react';
import './Home.css';
import check from '../assets/check.png';
import hand from '../assets/hand.png';
import food from '../assets/food.png';
import sports from '../assets/sports.png';
import music from '../assets/music.png';
import sent from '../assets/sent.png';
import notif from '../assets/notif.png';
import ballot from '../assets/ballot.png';
import managerImg from '../assets/laptop.png';
import categoriesImg from '../assets/chart.png';
import topicImg from '../assets/Checklist.png';
import qrcodeImg from '../assets/share.png';
import timerImg from '../assets/hour.png';
import monitoringImg from '../assets/system.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const features = [
  { img: managerImg, label: 'Create show manager account' },
  { img: categoriesImg, label: 'Create categories and add topics' },
  { img: topicImg, label: 'Add type of your topic to be hosted' },
  { img: qrcodeImg, label: 'Share and show your voting via QR code' },
  { img: timerImg, label: 'Set up poll and duration of topic' },
  { img: monitoringImg, label: 'Monitoring performance real-time' },
];

const polls = [
  {
    image: food,
    date: 'June 30, 2025',
    title: 'Top 5 Best Songs of Filipino boy band SB19?',
  },
  {
    image: sports,
    date: 'June 30, 2025',
    title: 'Top 5 Best NBA players in NBA All Stars?',
  },
  {
    image: music,
    date: 'June 30, 2025',
    title: 'Top 5 Best Filipino Dishes',
  },
    {
    image: music,
    date: 'June 30, 2025',
    title: 'Top 5 Best Filipino Dishes',
  },
];

  return (
    <div id='home'>
      <div className="box-container">
        <div className="box1">
          <div className="box1-content">
            <h1 data-aos="fade-right">Tap<span>.</span>Vote<span>.</span>Done<span>.</span></h1>
            <p data-aos="fade-right">Instant Polling Made Easy</p>
            <a data-aos="fade-right" className="first-button" href="/signup" style={{ display: 'inline-block', 
              textDecoration: 'none', display: 'flex', textAlign: 'center', alignItems:'center'}}>Get Started</a>          
          </div>
          <div className="image-section">
            <img src={check} alt="Check" className="check" data-aos="fade-down"  />
            <img src={hand} alt="Hand" className="hand" data-aos="fade-up" />
          </div>
        </div>
        <div className="box2">
          <div className="topic-image">
            <img src={food} alt="" className="food" data-aos="fade-down" />
            <img src={sports} alt="" className="sport" data-aos="fade-up" />
            <img src={music} alt="" className="music" data-aos="fade-down" />
          </div>
          <div className="box2-content">
            <h2 data-aos="fade-left">Your Go-To Platform for <br /> Smarter Voting</h2>
            <p data-aos="fade-left">
              Votify simplifies voting with fast votes, real time results and <br />
              easy management. Perfect for food challenges, sports <br />
              events, fan votes, and entertainment polls.
            </p>
          </div>
        </div>
        <div className="box3">
          <img src={sent} alt="Sent" className="box3-img left" data-aos="fade-up" />
            <div className="circles">
              <span className="circle1" data-aos="fade-left"></span>
            </div>
          <div className="box3-content">
            <h2 data-aos="fade-down">Follow all the conversations <br /> from one place</h2>
            <p data-aos="fade-up">Popular shows handpicked <br /> specifically for you</p>
          </div>
          <img src={notif} alt="Notif" className="box3-img right" data-aos="fade-up" />
            <div className="circles">
              <span className="circle2" data-aos="fade-right"></span>
            </div>
          <img src={ballot} alt="Ballot" className="box3-img bottom" data-aos="fade-down" />
            <div className="circles">
              <span className="circle3" data-aos="fade-left"></span>
            </div>
        </div>
        <div className="main-sections">
          <header className="hero-section">
            <h1 data-aos="fade-right">Create and Manage Your Voting Polls with Ease</h1>
            <p data-aos="fade-right">With Votify, setting up and managing online polls is fast, easy, and powerful.</p>
            <button data-aos="fade-right" className="cta-button">Get started</button>
          </header>
          <section className="features-section">
            {features.map((feat, index) => (
              <div key={index} className="feature-card" data-aos="fade-left">
                <img src={feat.img} alt={feat.label} className="icon-img" />
                <p>{feat.label}</p>
              </div>
            ))}
          </section>
        </div>
        <section className="polls-section">
          <h2 data-aos="fade-right" className="polls-header">Latest Polls</h2 >
          <div className="polls-grid" >
            {polls.map((poll, index) => (
              <div key={index} className="poll-card" data-aos="fade-down">
                <img src={poll.image} alt={poll.title} className="poll-image" />
                <p className="poll-date">{poll.date}</p>
                <h3 className="poll-title">{poll.title}</h3>
                <button className="vote-btn">Vote now</button>
              </div>
            ))}
          </div>
            <a
  data-aos="fade-up"
  className="view-more-btn"
  href="/discover"
  style={{ display: 'inline-block', textDecoration: 'none' }}
>
  View more topics
</a>        
          </section>

        </div>
      </div>
  )
}

export default Home;