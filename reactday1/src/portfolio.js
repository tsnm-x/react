import React from "react";
import Projectcards from "./project-cards";
class Protfolio extends React.Component{
    constructor(){
        super();
        this.state={
            Projectnames : ['project1', 'project2', 'project3']
        }
    }

    render(){
        return (
            <div className="row justify-content-center bg-light h-100">
                <div className="col-12 display-6 m-3 p-4">Portfolio</div>
                <Projectcards cards={this.state.Projectnames}/>
            </div>
        )
    }
}

export default Protfolio;