import defaultAxios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({
                ...state,
                loading:false,
                data
            });
        }).catch(error => {
            setState({...state, loading:false, error});
        });
    }, []);
    if(!opts.url){
        return;
    }
    return state;
};

export default useAxios;