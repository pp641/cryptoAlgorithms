import React, { useState } from 'react'
import CryptoJS from 'crypto-js'




const AlgorithmOne = () => {
    const [encryptedData , setEncryptedData] = useState("");
    const [originalTextInput , setOrignalTextInput] = useState("");

    const getCipherText =  (data) => {
        var ciphertext = CryptoJS.MD5(data).toString();
        setEncryptedData(ciphertext);
        setOrignalTextInput("");
        }
    return (
        <div>
            <h1> Hashing AlgorithmMD5</h1>
            <input type= "text"   value = {originalTextInput} onChange={(e)=>setOrignalTextInput(e.target.value)} />
            <button  onClick={()=> {getCipherText(originalTextInput)}}>On click do get Cipher Text</button>
            <div> Encrypted Data  : {encryptedData}</div>
        </div>
    )
}

export default AlgorithmOne
