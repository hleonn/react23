import React, { Component } from 'react';

class Reloj extends Component{
  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    //console.log(3,"el componente ha sido eliminado del DOM");
  }
  render(){
    return <h3>{this.props.hora}</h3>;//this.props
  }
}

export default class CicloVida extends Component{
  
  constructor(props){
    super(props);
    //console.log(0,"El componente se inicializa, aún NO está en el DOM")
    this.state={
      hora:new Date().toLocaleTimeString(),
      visible:false,
    }
    this.temporizador=null;
  }
componentDidMount(){
  //console.log(1,"El componente se encuentra en el DOM");
}
componentDidUpdate(prevProps,prevState){
  //console.log(2,"El estado o las props del componente han cambiado");
  //console.log(prevProps);//{}
  //console.log(prevState);//{hora:'5:14:49'}
}


tictac=()=>{
    this.temporizador = setInterval(()=>{
    this.setState({
    hora:new Date().toLocaleTimeString(),
  });
    },1000);
  };

  iniciar =()=>{
this.tictac();
this.setState({
  visible:true,
});
  };
  
  detener =()=>{
clearInterval(this.temporizador);
  }
  
  render(){
    //console.log(4,"El componente se dibuja o redibuja por algun cambio en el DOM")
    return(
    <div>
      <h2>Ciclo de Vida de los componentes de clase</h2>
      {this.state.visible &&<Reloj hora={this.state.hora}/>}
      {/* <h3>{this.state.hora}</h3> */}
      <button onClick={this.iniciar}>START</button>
      <button onClick={this.detener}>STOP</button>
    </div>
    )}

}//end