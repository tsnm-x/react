function Aboutme(){
    console.log("hello!");
    return(
        <div className="row bg-light text-start p-5">
            <div className="col-4">
            <div className="display-4">About Me</div>
            </div>
            <div className="col-8">
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus blanditiis aliquam ullam odio modi possimus quam iste expedita omnis quas labore debitis atque molestiae, reprehenderit aut. Unde, quam inventore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus blanditiis aliquam ullam odio modi possimus quam iste expedita omnis quas labore debitis atque molestiae, reprehenderit aut. Unde, quam inventore!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus blanditiis aliquam ullam odio modi possimus quam iste expedita omnis quas labore debitis atque molestiae, reprehenderit aut. Unde, quam inventore!</p>
                <a href="app.component.html" download="Portfolio" className="btn btn-dark border border-light border-2 rounded-0">More Details</a>
            </div>
            </div>
        </div>
    )
}

export default Aboutme;