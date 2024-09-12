import React, { useState } from 'react';


const Test = () => {

  let data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Andy', age: 28 },
    { id: 5, name: 'Crav', age: 45 },
  ];

    const [searchData, setSearchData] = useState("")
    console.log(searchData)

    const handleChange = (event)=>{
      setSearchData(event.target.value)
    }

  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchData.toLowerCase())
  )


  return (
    <div className='p-20'>
      <input onChange={handleChange} className='border-2 border-black'  type="search" placeholder='Search...'/>

    {filteredData.length > 0 ? (
      filteredData.map((item,index)=>(
        <h1 key={index}>{item.name}</h1>
      ))
    ):(
      <h1>Not result found</h1>
    )}
    </div>
  );
}

export default Test;
