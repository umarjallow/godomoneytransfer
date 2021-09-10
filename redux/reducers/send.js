

  const initialState = []
  
  export default function formStepSend(state = initialState, action) {
    switch (action.type) {
      case 'SAVE_FIRST_STEP':
        return {
           ...state,
           step1:{
             ...state.step1,
             ...action.payload
           }, 
        }
      case 'SAVE_SECOND_STEP':
        return {
          ...state,
          step2:{
            ...state.step2,
            ...action.payload
          }, 
        } 
      case 'SAVE_THIRD_STEP':
          return {
            ...state,
            step3:{
              ...state.step3,
              ...action.payload
            }, 
        }  

      /* case 'HANDLE_INPUTS':
          return {
            ...state,
            step3:{
              ...state.step3,
              ...action.payload
            }, 
        }  */ 
            
      default:
        return state
    }
  }
  
  
  