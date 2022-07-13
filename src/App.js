import './App.css';
import {useState} from 'react';
import Blowfish from 'javascript-blowfish';

function App() {


  const [key,setKey]=useState('');
  const bf = new Blowfish(key);

  const [enc,setEncrypt]=useState('');
  const [dec,setDecrypt]=useState('');
  var [encMime,setEncMime]=useState('');
  let [decMime,setDecMime]=useState('');


  // Encryption

  const encryption = ()=>{
    var encrypted = bf.encrypt(enc);
    var encryptedMime = bf.base64Encode(encrypted);
    setEncMime(encryptedMime);
    document.getElementById('encMime').value=encMime;
  }
  

  // Decryption
  const decryption = ()=>{
    var decryptedMime = bf.decrypt(
      bf.base64Decode(encMime)
  );
    setDecMime(decryptedMime);
    document.getElementById('decMime').value=decMime;

  }
  
  

  return (
    <div className="App">
      <h1>Blowfish encryption/ decryption DEMO</h1>
      <form>
        <div className="text">
        <textarea placeholder="Encryption" id="decMime" name="encrypt" rows="12" cols="70" onChange={(e)=>{setEncrypt(e.target.value)}}>{decMime}</textarea><br/>
        <textarea placeholder="Decryption" id="encMime" name="decrypt" rows="12" cols="70" onChange={(e)=>{setDecrypt(e.target.value)}}>{encMime}</textarea><br/>
        </div>
        <input placeholder="Secret Key" className="key" type="text" name="secretKey" size="56" onChange={(e)=>{setKey(e.target.value)}}/><br/>
        <input  className="enc" type="button" name="encrypt" value="Encrypt" onClick={encryption}/>
        <input  className="enc" type="button" name="decrypt" value="Decrypt" onClick={decryption}/>
        
      </form>
    </div>
  );
}

export default App;
