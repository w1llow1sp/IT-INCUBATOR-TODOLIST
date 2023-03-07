import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

   let [message, setMessage] = useState([
        {message:'message1'},
        {message:'message2'},
        {message:'message3'},
    ]);

    let [title, setTitle] = useState('')
    console.log(title)

/*    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }*/

    const addMessage = (title:string) => {
        let newMessage ={message:title}
        setMessage([newMessage,...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')

    }

/*
   const ButtonChangeSender= (title:string) => {
       //console.log(title)
       let newMessage = {message:title}
       setMessage([newMessage,...message])
   }
*/


    return (
        <div className={'App'}>
            <Input setTitle={setTitle} title={title} />
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {/*<FullInput functionForBtn={ButtonChangeSender}/>*/}
{/*            <div>
                <input />
                <button>+</button>
            </div>*/}
            {message.map((el,index)=>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
  );
}

export default App;
