function Skills() {
    return (
        <div className="row text-center justify-content-center text-light bg-dark">
            <div className="display-5 fw-bold p-2 m-4">Skills</div>
            <div className="row text-center justify-content-evenly col-12 m-3">
                <p className="small col-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum cumque dignissimos aliquid impedit, dolores cupiditate mollitia repudiandae laboriosam enim? Id obcaecati enim nihil harum ullam aliquam omnis quas natus necessitatibus.</p>
                <div className="d-flex flex-column align-items-center justify-content-between m-5 col-5">
                    <div className="m-2 w-50 border-light border-bottom p-2">Skills Covered</div>
                    <div className="w-50">
                        <p className="m-1 p-1">HTML</p>
                        <p className="m-1 p-1">CSS</p>
                        <p className="m-1 p-1">JavaScript</p>
                        <p className="m-1 p-1">SASS</p>
                    </div>
                </div>
                <div className="row align-items-center m-5 col-5">
                    <div className="progress border border-light m-2 h-20 p-0">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">HTML</div>
                        <div className="progress-bar bg-secondary w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress border border-light m-2 h-20 p-0">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">CSS</div>
                        <div className="progress-bar bg-secondary w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress border border-light m-2 h-20 p-0">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                        <div className="progress-bar bg-secondary w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="progress border border-light m-2 h-20 p-0">
                        <div className="progress-bar bg-dark" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">SASS</div>
                        <div className="progress-bar bg-secondary w-50" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;