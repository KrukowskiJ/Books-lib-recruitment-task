import './App.css';
import Nav from "./components/Nav";
import BookList from "./components/BookList";
import NewBook from './components/NewBook';
import React, { useState, useEffect, useRef } from "react";
import FakeBookApi from "./data/FakeBookApi.js"
const newFakeBook = new FakeBookApi();

function App() {
  const [status, setStatus] = useState(1);
  const [data, setData] = useState(newFakeBook._collection);
  const [obj, setObject] = useState(newFakeBook);
  const addBook = ()=> {
    setStatus(0);
  };
  const showBookList = ()=> {
    setStatus(1);
  };
  return (
    <div className="App">
        <Nav
        addBook = {addBook}
        showBookList= {showBookList}
        />
      {status ? <BookList obj={obj}/> : <NewBook obj={obj} changeObject={obj => setObject(obj)} changeStatus={status => setStatus(1)}/>}
    </div>
  );
}

export default App;
