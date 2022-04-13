import Images1 from "../Images/images 1.jpg";
export default function Custom(){
return(
  <>
  <section>
      <div className="custom container">
          <div className="row">
              <div className="col-sm-4">
                  <div className="box">
                      <img src={Images1} className="img-fluid" alt="image-1"/>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="box">
                      <img src={Images1} className="img-fluid" alt="image-1"/>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div className="box">
                      <img src={Images1} className="img-fluid" alt="image-1"/>
                  </div>
              </div>
          </div>
      </div>

  </section>
  </>
  
)

}