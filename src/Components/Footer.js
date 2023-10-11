import "../Styles/Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="wrapper credits">
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
      <p className="copyright">Copyright © Adrian Filip {year}</p>
      <div className="wrapper contact">
        <p>Contact Me.</p>
        <div>
          {" "}
          <a href="mailto:adrianxfilip@gmail.com">
            <i className="fi fi-rs-circle-envelope"></i>
          </a>
          <a href="https://t.me/adrianfilip" target="_blank">
            <i className="fi fi-brands-telegram"></i>
          </a>
          <a href="" target="blank">
            <i className="fi fi-brands-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
