import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { MultiSelect } from "react-multi-select-component";

const BookList = (props) => {
  const [selected, setSelected] = useState([]);
  let houses= [] ;
  let options =[];
  let arraySelected =[];
  function uniq(a) {
    return Array.from(new Set(a));
 }

 function showFilter  (){
    props.obj._collection.forEach(element => {
      houses.push(element.publishingHouse)
    });
  houses= uniq(houses);
  houses.forEach(element => {
    const option={ label: element, value: element }
    options.push(option)
  });
        
 };



  return (
    <>
      <Box>
        <Row>
        <Title>LISTA KSIĄŻEK</Title>
        </Row>
        {console.log("set",selected)}
        {}
       { console.log("set",arraySelected)}
         
          { props.obj._collection.map(book => {
            let check = 1;
            selected.forEach(element => {
              if(element.label == book.publishingHouse)
              check=0;
            });
        if(check){
        return (<>
        <Container>
          <Text style={{color: "red"}}>title: { book.title}</Text>
          <Text>{ book.author}</Text>
          <Text>{ book.publishingHouse}</Text>
          <Text>{ book.pages}</Text>
          <Text>{ book.id}</Text>
        </Container>
        </>
        )}}
      )};
    <Title >Publishing house filter:</Title>
    {showFilter()}
    <Container>
     <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy=" Publishing house filter:"
      />
    <button onClick={()=>setSelected([])}>Clean filters</button>
      </Container>
      </Box>
    </>
  );
};

export default BookList;

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
  margin-top:30px;
`;
const Text = styled.text`
  font-size: 13px;
  font-family: Merriweather Sans;
  font-style: normal;
  font-weight: normal;
  color: white;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  &:hover {
    background: #070e5b;
  }
`;