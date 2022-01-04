import "./about.css";
import books from "../../images/bookshelf.jpg";
import motivation from "../../images/Removal-190.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={books} alt="lala" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Rules</h1>
        <p className="a-sub">We have some rules...</p>
        <p className="a-desc">
          <ol>
            <li style={{ color: "red", fontWeight: "900" }}>
              Respect each other
            </li>
            <li style={{ color: "red", fontWeight: "900" }}>
              Keep your place clean
            </li>
            <li style={{ color: "red", fontWeight: "900" }}>
              Try to not to use your phones
            </li>
            <li style={{ color: "red", fontWeight: "900" }}>
              Be on time, Leave on time
            </li>
          </ol>
        </p>
        <div className="a-motivation">
          <img src={motivation} alt="motivation" className="a-motivation-img" />
        </div>
        <div className="a-motivation-texts">
          <h4 className="a-motivation-title">NEW RULE!!!</h4>
          <p style={{ lineHeight: "1.5" }} className="a-motivation-desc">
            After the last lesson, we presented Golden Tickets to students who
            actively participated. So if YOU want to be a holder of this ticket,
            you should meet one of the organizers of our club and pass a quiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
