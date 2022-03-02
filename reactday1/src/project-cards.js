function Projectcards(props) {
    const { cards } = props
    return (
        <div className="row align-items-center justify-content-center row-col-3 flex-wrap m-2">
            {cards.map((card) => {
                return (
                    <>
                        <div className="col-3 card m-2 bg-secondary shadow">
                            <div className="card-body">
                                <div className="card-text m-2 text-light text-center">
                                    <h5>{card}</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 card m-2 bg-dark shadow">
                            <div className="card-body">
                                <div className="card-text m-2 text-light text-center">
                                    <h5>{card}</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Projectcards;