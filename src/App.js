import { useState } from 'react'
import './app.css'

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imcMult, setImc] = useState('');

  function calcularIMC (){
    const alt = altura / 100;
    const imc = peso / (alt * alt)

    if(imc < 18.6) setImc(`MAGREZA ${imc.toFixed(2)}`);
    else if (imc >= 18.6 && imc < 24.9)setImc(`NORMAL IMC : ${imc.toFixed(2)}`);
    else if (imc >= 25.0 && imc < 29.9)setImc(`SOBREPESO IMC : ${imc.toFixed(2)}`);
    else if (imc >= 30.0 && imc < 39.9)setImc(`OBESIDADE IMC : ${imc.toFixed(2)}`);
    else if (imc >= 40)setImc(`OBESIDADE GRAVE IMC : ${imc.toFixed(2)}`);
    

  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>
   
    
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>

      <h2>{imcMult}</h2>
    </div>
  )
}

