import React, { useState } from "react";
import CryptoJS from "crypto-js";

const AlgorithmOne = () => {
  const [encryptedData, setEncryptedData] = useState("");
  const [originalTextInput, setOrignalTextInput] = useState("");

  const getCipherText = (data) => {
    var ciphertext = CryptoJS.SHA512(data).toString();
    setEncryptedData(ciphertext);
    setOrignalTextInput("");
  };
  return (
    <div
      style={{
        color: "red",
        border: "2px solid black",
        width: "40%",
        padding: "2%",
        height: "80%",
        margin: "2%",
        background: "lightblue",
        borderRadius: "5%",
        minWidth: "35%",
      }}
    >
      <h1> Hashing Algorithm512</h1>
      <input
        type="text"
        value={originalTextInput}
        onChange={(e) => setOrignalTextInput(e.target.value)}
      />
      <button
        onClick={() => {
          getCipherText(originalTextInput);
        }}
      >
        On click do get Cipher Text
      </button>
      <div> Encrypted Data : {encryptedData}</div>
    </div>
  );
};

export default AlgorithmOne;
