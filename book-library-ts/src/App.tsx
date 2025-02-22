import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import BookList from './components/BookList'

const App: React.FC = () => {
  
  return (
    <>
    <Header/>
      <BookList/>
      <Footer/>
    </>
  );
};

export default App;
