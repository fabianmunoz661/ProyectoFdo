// importa la librería react
import React from  "react";


class CbbCiudad extends React.Component{

    constructor(props){
        super(props);
        console.log("cargando constructor de cbbCiudad");
        this.state = {
            
        }
    }


    render (){
        return (
            <div>
                <label>seleccione una ciudad</label>
                <select className="btn btn-secondary dropdown-toggle" onClick={this.props.miOnclick}>{this.props.text}
                <option className="dropdown-item"> Opción 1 </option>
                <option className="dropdown-item"> Opción 2 </option>
                <option className="dropdown-item">Opción 3 </option>
                </select>
            </div>
        );
    }
}

export default CbbCiudad;