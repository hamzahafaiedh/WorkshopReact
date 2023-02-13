import { Component } from "react";

class Welcome extends Component{

    constructor(props){
        super(props)
        this.state=
        {
            'txt':"ali",
            count : 0,
            tab : [
                { nom: 'hamza', age: 23, id: 1 },
                { nom: 'oussema', age: 23, id: 2 }
              ]
        }
    }
    increment=()=>{
        this.setState(
            {
                count:this.state.count+1,
                txt : "med",
                tab : [...this.state.tab,{id:4, nom:"GElectrique"}]
            }
        )
    }

    render(){
        return(
        <>
        <h1>bonjour {this.state.txt}</h1>
        <h1>count : {this.state.count}</h1>
        <ul>
                {this.state.tab.map((e)=><li key={e.id}>{e.nom}</li>)}
        </ul>
        <button onClick={this.increment}>increment</button>
        </>
        );
    }
}
export default Welcome;