import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  const [data, setData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
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
    </div>
  );
}

export default App;
