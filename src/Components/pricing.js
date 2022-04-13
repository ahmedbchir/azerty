export default function Pricing(){
    return(
        //Pricing section start
        <>
        <div className="pricing container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="box">
                        <h6>Basic</h6>
                        <h5>$101</h5>
                        <p>lerem2 </p>
                        <button className="btr">Buy Now</button>
                    </div>
                </div>
                <div className="col-sm-4 mid">
                    <div className="box active">
                        <h6>advance</h6>
                        <h5>$201</h5>
                        <p>lerem2 </p>
                        <button className="btr">Buy Now</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="box">
                        <h6>Premium</h6>
                        <h5>$301</h5>
                        <p>lerem2 </p>
                        <button className="btr">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}