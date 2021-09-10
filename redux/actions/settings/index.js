import {SET_CONFIG} from '../../type-actions'


export const setConfig = () => ({
    type: SET_CONFIG,
    payload:{
        name : "godo-transfert",
        description : "for our future and particular app in finetech"
    }
})
