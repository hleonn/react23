import React, { useState,useEffect } from 'react';

function Reloj({hora}) {
  return<h3>{hora}</h3>;
}
export default function RelojHooks() {
  const[hora,setHora] = useState(new Date().toLocaleTimeString());//hora
  const[visible,setVisible] = useState(false);//visibilidad
  //
  useEffect(() => {
    let temporizador;
    if(visible){
    temporizador = setInterval(()=>{
      setHora(new Date().toLocaleTimeString());
      },1000);
    }else{
      clearInterval(temporizador);
    }
    return ()=>{
      console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
  }, [visible])
  //
  return(
    <>
      <h2>Reloj con Hooks</h2>
      {visible &&<Reloj hora={hora}/>}
      {/* <h3>{this.state.hora}</h3> */}
      <button onClick={()=>setVisible(true)}>START</button>
      <button onClick={()=>setVisible(false)}>STOP</button>
      
    </>
  );
}
