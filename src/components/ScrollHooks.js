import React, { useState, useEffect } from 'react';

export default function ScrollHooks (){
  const [scrollY,setScrollY] = useState(0);
  

  useEffect(()=>{
    console.log("Moviendo el scroll");//componente en navegador
    const detectarScroll=()=> setScrollY(window.pageYOffset); 
  
  window.addEventListener("scroll",detectarScroll);//detecta el scrollY
  return ()=>{window.removeEventListener("scroll",detectarScroll)};
  console.log("Fase de desmontaje");
},[scrollY]);

useEffect(()=>{
  console.log("Fase de Montaje");
},[]);

useEffect(()=>{
  console.log("Fase de Actualizacion");
},);

useEffect(()=>{
  return ()=>{
    console.log("Fase de desmontaje");
  }
},);


  return(
    <>
    <h2>Hooks-useEffect & Ciclo de Vida</h2>
    <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
  
    

