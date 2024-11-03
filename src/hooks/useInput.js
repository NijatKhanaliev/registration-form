import { useState } from "react";

export default function useInput(defaultValue,validationFn){
const [enteredValue,setEnteredValue] = useState(defaultValue);
const [isEdited,setIsEdited] = useState(false);

function handleChange(e){
    setEnteredValue(e.target.value);
    setIsEdited(false);
}

const hasError = isEdited && !validationFn(enteredValue);

function handleBlur(){
    setIsEdited(true);
}

return{
    enteredValue,
    handleChange,
    handleBlur,
    hasError
}

}