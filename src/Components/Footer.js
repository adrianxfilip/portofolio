import "../Styles/Footer.scss";
import telegram from "../telegram.png";
import linkedin from "../linkedin.png";
import gmail from "../gmail.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="credits">
            <p>ADRIAN FILIP</p>
            <p>
              UIcons by{" "}
              <a href="https://www.flaticon.com/uicons" target="_blank">
                Flaticon
              </a>
            </p>
            <p>
              Logo by{" "}
              <a href="https://www.vecteezy.com/free-vector/af" target="_blank">
                Vecteezy
              </a>
            </p>
          </div>
          <div className="contact">
            <p>CONTACT</p>
            <div>
              <a href="mailto:adrianxfilip@gmail.com">
                <img src={gmail} />
              </a>
              <a href="https://t.me/adrianfilip" target="_blank">
                <img src={telegram} />
              </a>
              <a href="" target="blank">
                <img src={linkedin} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright {year} © Adrian Filip </p>
      </div>
    </section>
  );
}
