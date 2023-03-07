import React, {ChangeEvent, useState} from 'react';

type AppProps = {
    functionForBtn:(title:string)=>void
}

export const FullInput = (props:AppProps) => {

    let [title, setTitle] = useState('');
    //console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.functionForBtn(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};


