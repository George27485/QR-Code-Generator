import { useState } from 'react'
import generateQRCode from './components/api';
import './App.css'

function App() {
  const [qrData,setQrData]= useState('example.com');
  const [qrSize,setqrSize]= useState('200x200');

  return (
   <div className='app container'>
    <h1 className='app-title'>QR Code Generator</h1>
    <div className='input-container'>
      <label className='input-label'>QR url: </label>
      <input 
      className='input-field'
      type='text'
      value={qrData}
      onChange={(e)=>setQrData(e.target.value)}
      />
       <input 
      className='input-field'
      type='text'
      value={qrSize}
      onChange={(e)=>setqrSize(e.target.value)}
      />
    </div>
    <div className='QR-code'>
      <img className='QR-image' src={generateQRCode(qrData,qrSize)} alt='QR code'/>
    </div>

    
   </div>
  )
}

export default App
