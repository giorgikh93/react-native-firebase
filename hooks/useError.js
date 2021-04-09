import React,{useState} from 'react';

function useError(props) {
  const [error,setError] = useState({state:false,text:''})


    return {error,setError}
}
export default useError;