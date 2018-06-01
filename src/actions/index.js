import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_ERROR } from '../constants/';
import { getVideo } from '../api/api';

export const getData = () => {
    return {
        type: FETCHING_DATA
    }
}


export const getDataSuccess = data => {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export const getDataFailure = (err) => {
    return {
        type: FETCHING_DATA_ERROR,
        err
    }
}


// Async functions ...  
export const fetchDataUser = (dataUser) => {
    console.log('fetchDataUser', dataUser)
    console.log(getUser)
    return (dispatch) => {
        dispatch(getData());
        getUser(dataUser).then(([response, json]) => {
            dispatch(getDataSuccess(json))
        })
            .catch((error) => dispatch(getDataFailure(error)))
    }
}