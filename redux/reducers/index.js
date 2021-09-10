
import { combineReducers } from 'redux'
import config from './config'
import formStepSend from './send'

const rootReducer =  combineReducers({
    formStepSend,
    config
})

export default rootReducer

