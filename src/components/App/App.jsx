import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Header } from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';
import Cardlist from '../Cardlist/CardList';
import Sort from '../Sort/Sort.jsx';
import data from '../../assets/data.json'

function App() {
  const [cards, setCards] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRequest = () => {
    const filterCards = data.filter((item) =>
      item.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setCards(filterCards);
  };

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };

  return (
    <div className="App">
      <Header>
        <>
          <Logo className='logo logo_place_header' href='/' />
          <Search onSubmit={handleFormSubmit} onInput={handleInputChange} />
        </>
      </Header>
      <Sort/>
      <Cardlist goods={cards}/>
      <Footer/>
    </div>
  );
}
export default App;
