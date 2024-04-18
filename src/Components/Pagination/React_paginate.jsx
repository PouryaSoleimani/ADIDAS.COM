import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


const React_paginate = () => {
 const [data, setData] = useState([])

 const getData = () => { axios.get('/posts').then(response => { setData(response.data) }) }

 useEffect(() => { getData() }, [])


 // ^ RETURN =================================================================================================================
 return (
  <>
   {/* {data &&
    data.map((item) => (
     <div key={item.id}>
      <h6>{item.id}-{item.title}</h6>
     </div>
    ))} */}
    <Pagination data={data}/>
  </> 

 )
}

export default React_paginate