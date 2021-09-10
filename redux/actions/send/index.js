import {SAVE_FIRST_STEP, SAVE_SECOND_STEP, SAVE_THIRD_STEP} from '../../type-actions'


export const saveFirstStep = (data) => ({
    type: SAVE_FIRST_STEP,
    payload: data
})

export const saveSecondStep = (data) => ({
    type: SAVE_SECOND_STEP,
    payload: data
})

export const saveThirdStep = (data) => ({
    type: SAVE_THIRD_STEP,
    payload: data
})

export const handleInputs = (data) => ({
    type: HANDLE_INPUTS,
    payload: data
})
