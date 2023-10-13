import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {fetchTopAlbums} from './api/api';
import Card from './components/Card/Card';
import { useEffect, useState } from "react";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setTopAlbumsData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <div>
     <Navbar/>
     <Hero/>
     {
      topAlbumsData.map((item)=>{
        return (
          <Card data={item} type="albums"/>
        )
      })
     }
    </div>
  );
}

export default App;
