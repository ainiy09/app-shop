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
import api from '../../utils/api';
import useDebounce from '../../hooks/useDebounce';

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const debounceSearchQuery = useDebounce(searchQuery, 500)

  const handleRequest = () => {
    // const filterCards = [].filter((item) =>
    //   item.name.toUpperCase().includes(searchQuery.toUpperCase())
    // );
    // setCards(filterCards);
    api
      .search(searchQuery)
      .then ((res)=>setCards(res))
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    handleRequest();
  }, [debounceSearchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  };

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue);
  };


  useEffect(()=>{
    Promise.all([api.getProductList(), api.getuserInfo()]).then (([poductsData, userData])=>{
      setCards(poductsData.products);
      setCurrentUser(userData);
    })
    // api.getProductList().then((data)=>setCards(data.products))
    // api.getuserInfo().then((userData)=>setCurrentUser(userData))
  },[]);

  function handleUpdateUser(userUpdateData) {
    api
    .setUserInfo({...userUpdateData, name: currentUser.name})
    .then((newUser) => {
      setCurrentUser(newUser)})
  }

  console.log(currentUser);
  return (
    <div className="App">
      <Header user={currentUser} onUpdateUser={handleUpdateUser} >
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
