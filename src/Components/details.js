import Detailimg from "../Images/images4.jpg";
export default function Details() {
  return (
    <>
      <div className="details container">
        <div className="row">
          <div className="col-sm-5">
            <h6>There is No Tomorrow</h6>
            <p>
              lorem20  <br />
              <br />
              lorem
            </p>
            <button className="btr">View More</button>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <img src={Detailimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
