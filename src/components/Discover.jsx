import React from "react";
import food from "../assets/food.png";
import sports from "../assets/sports.png";
import music from "../assets/music.png";

const posts = [
  {
    image: food,
    date: "July 2, 2025",
    title: "Best Filipino Dishes",
  },
  {
    image: sports,
    date: "July 1, 2025",
    title: "Top NBA Players",
  },
  {
    image: music,
    date: "June 30, 2025",
    title: "Song of the Year",
  },
  {
    image: food,
    date: "June 29, 2025",
    title: "Street Food Favorites",
  },
  {
    image: sports,
    date: "June 28, 2025",
    title: "Football Legends",
  },
  {
    image: music,
    date: "June 27, 2025",
    title: "Best Pop Bands",
  },
  {
    image: food,
    date: "June 26, 2025",
    title: "Best Desserts",
  },
  {
    image: sports,
    date: "June 25, 2025",
    title: "Olympic Champions",
  },
  {
    image: music,
    date: "June 24, 2025",
    title: "Classic Hits",
  },
    {
    image: music,
    date: "June 24, 2025",
    title: "Classic Hits",
  },
  
];

const Discover = () => {
  return (
    <div className="discover-page" id='/discover'>
      <div className="discover-container">
        <h2 className="discover-header" data-aos="fade-right">Latest Post</h2>
        <div className="discover-grid" data-aos="fade-left">
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", marginBottom: "2rem" }}>
            {posts.slice(0, 3).map((post, idx) => (
              <div key={idx} className="poll-card">
                <img src={post.image} alt={post.title} className="poll-image" />
                <p className="poll-date">{post.date}</p>
                <h3 className="poll-title">{post.title}</h3>
                <button className="vote-btn">Vote now</button>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
            {posts.slice(3, 6).map((post, idx) => (
              <div key={idx + 3} className="poll-card">
                <img src={post.image} alt={post.title} className="poll-image" />
                <p className="poll-date">{post.date}</p>
                <h3 className="poll-title">{post.title}</h3>
                <button className="vote-btn">Vote now</button>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-down" style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <button
            className="vote-btn"
            style={{
              width: 200,
              height: 50,
              borderRadius: 30,
              fontSize: "1rem",
              fontWeight: 600,
              margin: 0,
              marginTop: "40px",
            }}
          >
            Show more
          </button>
        </div>
      </div>
      <style>{`
        .discover-page {
          min-height: 100vh;
          padding: 48px 16px;
        }
        .discover-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .discover-header {
          margin-top: 100px;
          font-size: 2rem;
          font-weight: bold;
          color: black;
          padding-left: 9rem;
          margin-bottom: 1rem;
          text-align: left;
          font-family: 'Poppins', sans-serif;
        }
        .discover-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-bottom: 2rem;
        }
        .poll-card {
          background-color: #ffffff;
          color: #333;
          border-radius: 12px;
          width: 250px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          padding-bottom: 1rem;
          transition: transform 0.2s ease;
          height: 390px; 
          justify-content: space-between; 
        }
        .poll-card:hover {
          transform: translateY(-6px);
        }
        .poll-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .poll-date {
          font-size: 0.85rem;
          color: #888;
          padding-top: 10px;
          text-align: left;
        }
        .poll-title {
          text-align: left;
          font-size: 20px;
          font-weight: bolder;
          padding: 0 2rem;
          margin-bottom: 1rem;
          flex: 1; 
          display: flex;
          align-items: center;
        }
        .vote-btn {
          background-color: #003580;
          color: #fff;
          padding: 0.6rem 1.5rem;
          margin-bottom: 10px;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .vote-btn:hover {
          background-color: #0f5bcc;
        }
        @media (max-width: 700px) {
          .discover-header {
            font-size: 1.3rem;
          }
          .poll-card {
            padding: 14px;
            width: 100%;
            min-width: 0;
          }
          .poll-image {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Discover;