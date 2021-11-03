import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Book from "../model/book.model"

function NewBook(props) {
  let newBook = new Book();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [pages, setPages] = useState(0);
  const [publishingHouse, setPublishingHouse] = useState('');

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = e => {
    setAuthor(e.target.value);
  };
  const handleChangePages = e => {
    setPages(e.target.value);
  };
  const handleChangePublishingHouse = e => {
    setPublishingHouse(e.target.value);
  };

const fetchData = () => {
  newBook.title=title
  newBook.author=author
  newBook.pages=pages
  newBook.publishingHouse=publishingHouse
  props.obj.addNewBook(newBook);
  props.changeObject(props.obj)
  props.changeStatus();
}
  return (
    <>
     <Box id="newbook">
        <Row>
        <Title>Dodaj nową książkę !</Title>
        </Row>
        <Row>
       
          <input
            placeholder='title'
            name='text'
            className='todo-input'
            value={title}
            onChange={handleChangeTitle}
          />
         <input
            placeholder='author'
            name='text'
            className='todo-input'
            value={author}
            onChange={handleChangeAuthor}
          />
           <input
            placeholder='pages'
            name='text'
            className='todo-input'
            value={pages}
            onChange={handleChangePages}
          />
           <input
            placeholder='publishingHouse'
            name='text'
            className='todo-input'
            value={publishingHouse}
            onChange={handleChangePublishingHouse}
          />
            
          <button onClick={()=> fetchData()}>
            Add Book
          </button>
    </Row>
      </Box>
    </>
  );
};

export default NewBook;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
`;

const Box = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #050e1b;
  top: 0;
  height: 100vh;
  width: 100%;
`;

const Title = styled.text`
  font-size: 30px;
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  color: white;
`;
