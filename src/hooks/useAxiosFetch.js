import { Axios } from 'axios';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useAxiosFetch=(dataURL)=>{
    const[data,setData]=useState();
    const[isLoading,setIsLoading]= useState(false);
    const[fetchError, setFetchError]=useState(null);

    useEffect(()=>{
        let isMounted=true;
        const source=axios.CancelToken.source();

        const fetchData= async(url)=>{
            setIsLoading(true);
            try{
                const response=await axios.get(url,{cancelToken: source.token});
                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }
            }catch(err){
                if(isMounted){
                    setData([]);
                    setFetchError(err.message);
                }
            }
            finally{
                isMounted && setTimeout(()=>setIsLoading(false),3000);
            }
        }
       fetchData(dataURL);
        const cleanUp=()=>{
            isMounted=false;
            source.cancel();
        }
        return cleanUp;
    },[dataURL])
return {data,fetchError,isLoading};

}
export default useAxiosFetch
