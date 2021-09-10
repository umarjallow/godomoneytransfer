import DatePicker from "react-datepicker";


export function DatePick({selected, onChangeDate, placeholderText, shouldCloseOnSelect, minDate}) {
   // console.log(selected)
    return (
        <DatePicker 
            isClearable 
            shouldCloseOnSelect={shouldCloseOnSelect} 
            selected={selected} 
            onChange={(selected) => onChangeDate(selected)} 
            placeholderText={placeholderText} 
            minDate={minDate}
        />
    );
}


