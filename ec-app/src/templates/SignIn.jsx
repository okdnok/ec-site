import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {PrimaryButton, TextInput} from "../component/UIkit"
import { signIn } from '../reducks/users/operations';


const SignIn = () =>{
    const dispatch = useDispatch()

    const 
        [email, setEmail] = useState(""),
        [password, setPassword] = useState("");




    const inputEmail =useCallback((event)=>{
        setEmail(event.target.value)
    },[setEmail])

    const inputPassword =useCallback((event)=>{
        setPassword(event.target.value)
    },[setPassword])


    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">サインいん</h2>
            <div className="module-spacer--medium"/>

            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />

            <div className="module-spacer--medium"/>
            <div className="center">
                <PrimaryButton
                    label={"アカウントを登録する"}
                    onClick={() => dispatch(signIn(email,password))}
                />
            </div>
        </div>
    )
}

export default SignIn