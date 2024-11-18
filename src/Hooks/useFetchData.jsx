import React, { useEffect, useState } from 'react'
import Api from '../Service/Api'

function useFetchData(endPoint) {
const [data,setData] = useState([])
const [error,setError] = useState(null)
const[loading,setLoading] = useState(false)
useEffect(()=>{
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await Api.get(`${endPoint}`);
            console.log(response.data)
            setData(response.data)
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
},[endPoint])
  return {data,error,loading}
}

export default useFetchData