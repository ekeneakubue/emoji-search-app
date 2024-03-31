import React, {useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import SearchForm from './components/SearchForm';


function App() {
  const [valueEmoji, setValueEmoji] = useState('smile');

   return (
    <div>
      <Header /> 
      <SearchForm 
          setValueEmoji={setValueEmoji}          
      />
      <SearchResult valueEmoji={valueEmoji}/>
      <Footer />
    </div>
  );  
}

export default App;
