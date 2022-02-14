// importa la librería react
import React from  "react";

// crear extensión del componente
class Button extends React.Component{

    constructor(props){
super(props);
console.log("hola mundo 3");
this.state = {
    
}
    }
    //retorna js.element
    render(){
        return (
            <div>
                <label>hola mundo 3</label>
            <button className="btn btn-primary" onClick={this.props.miOnclick}>{this.props.text} </button>
            </div>
        );

    }


}     

export default Button;