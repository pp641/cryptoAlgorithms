import React, { useState } from "react";
import CryptoJS from "crypto-js";

const AlgorithmOne = () => {
  const [encryptedData, setEncryptedData] = useState("");
  const [encryptedDataInput, setEncryptedDataInput] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [originalTextInput, setOrignalTextInput] = useState("");

  const getCipherText = (data) => {
    var ciphertext = CryptoJS.TripleDES.encrypt(
      data,
      "secret key 123"
    ).toString();
    console.log(ciphertext);
    setEncryptedData(ciphertext);
    setOrignalTextInput("");
  };

  const getOriginalText = (data) => {
    var bytes = CryptoJS.TripleDES.decrypt(data, "secret key 123");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    setOriginalText(originalText);
    setEncryptedDataInput("");
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
      <h1> AlgorithmTripleDES</h1>
      <input
        type="text"
        value={encryptedDataInput}
        placeholder="Enter Encrypted Text ..."
        onChange={(e) => setEncryptedDataInput(e.target.value)}
      />
      <button
        onClick={() => {
          getOriginalText(encryptedDataInput);
        }}
      >
        Original Text
      </button>
      <div> Original Data : </div>
      <div style={{ color: "blue" }}>{originalText}</div>
      <input
        type="text"
        value={originalTextInput}
        placeholder=" Enter Original Text ..."
        onChange={(e) => setOrignalTextInput(e.target.value)}
      />
      <button
        onClick={() => {
          getCipherText(originalTextInput);
        }}
      >
        On click do get Cipher Text
      </button>
      <div> Encrypted Data :</div>

      <div style={{ color: "blue" }}> {encryptedData}</div>
    </div>
  );
};

export default AlgorithmOne;
