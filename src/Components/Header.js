import headerimg from "../Images/p.jpg";

export default function Header() {
  return (
    <>
      <section>
        <div className="header">
          <div className="img">
            <img src={headerimg} alt="image-header" />
          </div>
          <div className="Overlay"></div>
          <div className="Content">
            <h6>
              Build Your Fitness World <br /> By Building Your Body
            </h6>
            <button className="btr">Join Now</button>
          </div>
        </div>
      </section>
    </>
  );
}
