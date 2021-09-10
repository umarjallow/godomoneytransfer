//import {SET_CONFIG} from '../type-actions'


export default function config(
    state = {
        name : '',
        description : ''
    }, action
){
    switch (action.type){
        case 'SET_CONFIG': 
            return {
                ...state,
                ...action.payload
            }
        default :
            return {
                ...state
            }
            
         
    }
}