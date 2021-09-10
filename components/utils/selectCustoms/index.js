

export const customSelectSingle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#FFF' : '#000',
        backgroundColor : 
                state.isSelected 
                ? '#4C1D95' 
                : state.isFocused 
                ? '#EDE9FE' 
                : '#FFF',
        cursor: state.isDisabled ? 'not-allowed' : 'default',
    }),
    control: (provided, state) => ({
        ...provided,
        border :
            state.isSelected 
            ? '2px solid #4C1D95'
            : '2px solid #E5E7EB',
        height: '4rem',
        boxShadow: state.isFocused ? '#4C1D95' : '0',
        width : '100%',
        borderRadius : 6,

    }),
    indicatorSeparator : (provided) => ({
        ...provided,
        display :'none'

    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 700ms';
  
      return { ...provided, opacity, transition };
    }
  }