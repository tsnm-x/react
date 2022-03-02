import React from "react";

class HeadComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Katie Reed",
            jobTitle: ["Web Developer", "Designer"]
        }
    }

    render() {
        const { name, jobTitle } = this.state;
        return (

            <div className="row bg-img">
                <div className="col-4 text-center text-light m-4 p-4">
                    <h1 className="display-4 fw-bolder">{name}</h1>
                    <h3 className="display-6">{jobTitle[0]} and {jobTitle[1]}</h3>
                    <a href="app.component.html" download="Portfolio" className="btn btn-outline-light border border-light border-2 rounded-0">Click Me!!</a>
                </div>
            </div>
        )
    }

}

export default HeadComponent;