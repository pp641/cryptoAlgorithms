import React, { useState } from 'react'
import CryptoJS from 'crypto-js'




const AlgorithmOne = () => {
    const [encryptedData , setEncryptedData] = useState("");
    const [encryptedDataInput , setEncryptedDataInput] = useState("");
    const [originalText , setOriginalText] = useState("");
    const [originalTextInput , setOrignalTextInput] = useState("");

    const getCipherText =  (data) => {
        var ciphertext = CryptoJS.RC4.encrypt(data, 'secret key 123').toString();
        console.log(ciphertext); 
        setEncryptedData(ciphertext);
        setOrignalTextInput("");
        }

        const getOriginalText =  (data) => {
            var bytes  = CryptoJS.RC4.decrypt(data, 'secret key 123');
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            setOriginalText(originalText)
            setEncryptedDataInput("");
            }

    return (
        <div>
            <h1> AlgorithmRC4</h1>
            <input type="text"   value = {encryptedDataInput} onChange={(e)=>setEncryptedDataInput(e.target.value)} />
            <button  onClick={()=> {getOriginalText(encryptedDataInput)}}>On click do get Original Text</button>
            <div> Original Data  : {originalText}</div>
            <input type= "text"   value = {originalTextInput} onChange={(e)=>setOrignalTextInput(e.target.value)} />
            <button  onClick={()=> {getCipherText(originalTextInput)}}>On click do get Cipher Text</button>
            <div> Encrypted Data  : {encryptedData}</div>
        </div>
    )
}

export default AlgorithmOne
