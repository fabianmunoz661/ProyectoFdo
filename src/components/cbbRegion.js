// importa la librería react
import React from  "react";


class CbbRegion extends React.Component{

    constructor(props){
        super(props);
        console.log("cargando constructor de cbbRegion");
        this.state = {
            
        }
    }


    render (){
        return (
            <div>
                <label>seleccione una Región</label>
                <select className="btn btn-primary" onClick={this.props.miOnclick}>{this.props.text} 
                <option>Opción 1 </option>
                <option>Opción 2 </option>
                <option>Opción 3 </option>
                </select>
            </div>
        );
    }
}

export default CbbRegion;