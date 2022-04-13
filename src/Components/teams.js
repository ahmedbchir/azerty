import Teamsimg from "../Images/images3.jpg";
export default function Teams() {
  return (
    <>
      <section>
        <div className="teams container">
          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <img src={Teamsimg} className="img-fluid" alt="" />
                <div className="Content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <img src={Teamsimg} className="img-fluid" alt="" />
                <div className="Content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <img src={Teamsimg} className="img-fluid" alt="" />
                <div className="Content">
                  <h6>Easy Gym Team</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
