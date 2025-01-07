import { Box, Stack } from '@mui/material';
import '../../componentsStyle/Youtube.css';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import { youtubeOptions } from '../../../util/fetchData'
//npm install react-horizontal-scrolling-menu

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "/icons/left-arrow.png";
import RightArrowIcon from "/icons/right-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} sx={{ cursor: "pointer" }}>
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: "40px" }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} sx={{ cursor: "pointer" }}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: "40px" }} />
    </Typography>
  );
};
const Youtube = () => {
    const [videos, setVideos] = useState([]);
    const [searchLetter, setSearchLetter] = useState("reactjs");
  
    const handelSearch = (e) => {
      setSearchLetter(e.target.value);
    };
  
    useEffect(() => {
      const fetchVideos = async () => {
        if (searchLetter.trim() !== "") {
          const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
          try {
            const response = await fetch(`${youtubeSearchUrl}/search?query=${searchLetter}`, youtubeOptions);
            const exerciseVideosData = await response.json();
            setVideos(exerciseVideosData.contents || []);
          } catch (error) {
            console.error("Error fetching videos:", error);
          }
        }
      };
  
      // Fetch videos when searchLetter changes
      if (searchLetter) {
        fetchVideos();
      }
    }, [searchLetter]);

  
    return (
      <main>
    
      
      <div className="App min-h-screen bg-gray-100 ">
        <header className="text-yellow-100 p-8 text-center shadow-lg">
          <h1 className="head_text blue_gradient">YouTube Video Search</h1>
        </header>
  
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg w-1/3">
            <input
              type="text"
              placeholder="Search video..."
              onChange={handelSearch}
              value={searchLetter}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={() => handelSearch}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
  
        
      {/* CHANNEL */}
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
          {videos.slice(0, 5).map((item, index) => {
            const channel = item?.video;
            if (!channel) return null; // Skip if channel data is not available
  
            return (
  
             <Box className="channel-card" direction="row" spacing={1} justifyContent="flex-start" ml="21px">
               <Stack
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg"
              direction="row" spacing={1} justifyContent="flex-start" ml="21px"
            >
              {/* Channel Thumbnail */}
              <img
                src={channel.thumbnails[0]?.url}
                alt={channel.channelName}
                className="w-16 h-16 object-cover rounded-full"
              />
            
              {/* Channel Info */}
              <div className="flex flex-col">
                <Typography variant="body1" fontWeight="bold" color="text.primary">
                  {channel.channelName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Some additional info (optional)
                </Typography>
              </div>
            </Stack>
             </Box>
            
            );
          })}
        </ScrollMenu>
  
      {/* video display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
  {videos?.slice(0, 6).map((item, index) => {
    const video = item?.video;
    if (!video) return null; // Skip if video data is not available

    return (
      <Box
        key={index}
        sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '8px', overflow: 'hidden' }}
        className="bg-white p-4"
      >
        {/* Embedded YouTube Video */}
        <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <Box p="10px">
          <Typography variant="h6" fontWeight="bold" color="#000" noWrap>
            {video.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {video.channelName}
          </Typography>
        </Box>
        {/* Channel Section */}
        <Box className="channel-section mt-4">
          <Typography variant="body2" fontWeight="bold" color="#000">
            Channel Info:
          </Typography>
          <div className="flex items-center space-x-2">
            <div>
              <Typography variant="body2" color="text.secondary">
                {video.channelName}
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {video.description}
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    );
  })}
</div>

      </div>
      </main>
  )
}

export default Youtube