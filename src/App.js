import React, { useState } from "react";
import CryptoJS from "crypto-js";
import "./App.css";

// 🔐 Funciones con clave "leolopez"
const cifrar = (texto) => {
  return CryptoJS.AES.encrypt(texto, "leolopez").toString();
};

const descifrar = (texto) => {
  const bytes = CryptoJS.AES.decrypt(texto, "leolopez");
  return bytes.toString(CryptoJS.enc.Utf8);
};

function App() {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [hashedText, setHashedText] = useState("");

  const handleEncrypt = () => {
    const ciphertext = cifrar(text);
    setEncryptedText(ciphertext);
  };

  const handleDecrypt = () => {
    try {
      const originalText = descifrar(encryptedText);
      setDecryptedText(originalText);
    } catch (e) {
      setDecryptedText("Error al descifrar");
    }
  };

  const handleHash = () => {
    const hash = CryptoJS.SHA512(text).toString(CryptoJS.enc.Hex);
    setHashedText(hash);
  };

  return (
    <div className="App">
      <h1>Lab 2 - Cipher, Decipher & Hash</h1>

      <input
        type="text"
        placeholder="Texto plano"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleEncrypt}>Cifrar</button>
      <p>
        <strong>Texto cifrado:</strong> {encryptedText}
      </p>

      <button onClick={handleDecrypt}>Descifrar</button>
      <p>
        <strong>Texto original:</strong> {decryptedText}
      </p>

      <button onClick={handleHash}>Generar Hash (SHA-512)</button>
      <p>
        <strong>Texto con hash:</strong> {hashedText}
      </p>
    </div>
  );
}

export default App;
