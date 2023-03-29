import React from "react";

class Display extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div id="display-container">
            <h1 id="display">
                {this.props.display}
            </h1>
        </div>
      )
    }
}

export default Display;