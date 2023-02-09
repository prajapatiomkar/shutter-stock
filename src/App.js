import { createContext, useState } from 'react';
import './App.css';
import Images from './components/Images';
import Navbar from './components/Navbar';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';

// Create Context 
export const ImageContext = createContext()

function App() {
  const[searchImage,setSearchImage] = useState("")
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=XbYMWq4pzwZ391XsSEfmMDtTi_LbIsRlxJWqCk4aIew`)
  console.log(response);
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (
    <ImageContext.Provider value={value}>
      <Navbar>
        <SearchField />
      </Navbar>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
