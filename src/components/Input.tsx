import React, {ChangeEvent} from 'react';
type InputPropsType = {
    setTitle:(title:string)=>void
    title:string
}
export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

