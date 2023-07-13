import React, {Component} from "react";
import Teste from "./teste"


class CalcSimples extends Component{

    state = {
        pontuacao: 0,
        dificuldade: 5,
        respostaFinal: "Solucione a operação",
        texto: "",
        NumA: Math.floor(Math.random() * 5),
        NumB: Math.floor(Math.random() * 5),
        resposta: ""
    }

    maisDificil = () =>{
        this.setState({
            dificuldade: this.state.dificuldade + 1,
            pontuacao: this.state.pontuacao + 1
            
        })
    }
    
    menosDificil = () =>{
        this.setState({
            dificuldade: this.state.dificuldade - 1
        })
    }

    mudarValores = () =>{
        this.setState({
            NumA : Math.floor(Math.random() * this.state.dificuldade),
            NumB : Math.floor(Math.random() * this.state.dificuldade)
        })
        
        console.log(this.state.dificuldade+ "\n "+ this.state.pontuacao);
        if(this.state.texto =! ""){
         document.getElementById('resposta').value = ""
        }
    }


    mudarTexto = (e) =>{
        this.setState({
            texto : e
        })
    }
    
    render(){
        {if(this.state.pontuacao != 5){
            return(    
            <>
                <Teste A={this.state.NumA} B={this.state.NumB}/>
                <input type="text" id="resposta"
                onKeyUp={(event) => {
                    const resultado = this.state.NumA + this.state.NumB
                    const keyName = event.key
                    
                    if(keyName =='Enter'){
                        
                        if(this.state.texto == resultado){
                            this.setState({respostaFinal: "Correto !"})
                            this.maisDificil()
                        }else{
                            this.setState({respostaFinal: "Você errou !  O correto: "+ this.state.NumA +" + "+ this.state.NumB +" = "+ resultado})
                            this.menosDificil()
                        }
                        this.mudarValores()
                    }
                
                }} onChange={e => this.mudarTexto(e.target.value)}/>
                <p>{this.state.respostaFinal}</p>
            </>
            )
        }else{
            this.setState({respostaFinal: "Solucione a operação"})
            return(
                <>
                    <h1>Nível <br/>Concluido</h1>
                    <div onClick={() =>{this.setState({pontuacao: 0})}}>Refazer</div>
                </>
            )
        }}
}
}

export default CalcSimples