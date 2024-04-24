import { useEffect, useState } from 'react'
import Navbarb from './components/Navbarb'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Saved from './components/Saved'
import axios from 'axios'
import './App.css'

const API_KEY="c2iuQqMf3f37hpuMvn1Ncqa6CFCYd6HwF8OGgYqzm926Dm8cSNhlLWf9"

function App() {
const [image, setImage] = useState([])
const [search,setsearch] = useState('nature')
useEffect(() => {

 const fetchImage=async()=>{
  const res=await axios.get(`https://api.pexels.com/v1/search?query=${search}&per_page=80`,
  {
    headers:{
      Authorization:API_KEY,
    },
  }
  );
  //console.log(res.data.image)
  //console.log("response from api",res)
  //console.log("response from api",res.data.photos)
  setImage(res.data.photos)//here images is api bala
 }
fetchImage()

  
}, [search])


  return (
    <>
     <Router>
     <Navbarb setsearch={setsearch} />
     <Routes>
     <Route path="/" element={<Home image={image}/>} /> //here image is setimage bala passing as props
      <Route path="/saved" element={<Saved/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App
