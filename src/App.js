import React , { useEffect, useState }from 'react';
import Picture from './Picture';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './App.css';


const App = () => {
  
  const client_id=`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`;

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('mountains');
  
  useEffect(() =>{
    getImages();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  }

  const getImages = async () => {
    const response = await fetch (
      `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${query}&per_page=30`
    );
    const data = await response.json();
    setImages(data.results);
    console.log(data.results);
}

 
  return (
    <div className="App">  
      <form onSubmit={getSearch} className="search-form">
        <TextField className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for Images"/>
        <Button variant='contained' color='primary' className='search-button' type="submit">Search</Button>
      </form>

          {images.map(image => (
            <Picture key={image.id} source={image.links.download} firstName={image.user.first_name} lastName={image.user.last_name} likes={image.likes} thumbnail={image.urls.thumb}/>
          ) 
          )}    
    </div>
  );
}

export default App;
