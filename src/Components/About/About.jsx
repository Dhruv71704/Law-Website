import React from "react";
import "./About.css";
import bgImage from "../../assets/images/aboutHome.jpg";
import abtImg from "../../assets/images/abt2.jpg";
import about_img from "../../assets/images/about.png";

const About = () => {
  return (
    <>
      <section className="bg-displaced-wrap">
        <div className="bg-displaced-body">
          <div className="containerAbt">
            <div className="inset-xl-left-70 inset-xl-right-70">
              <article className="box-cart bg-ebony-clay">
                <div className="box-cart-image">
                  <img src={abtImg} alt="" width="342" height="338" />
                </div>
                <div className="box-cart-body">
                  <blockquote className="blockquote-complex blockquote-complex-inverse">
                    <h3>About Us</h3>
                    <p>
                      <q>
                        When you place your case in the hands of our lawyers and
                        paralegals, you are placing your case in the hands of
                        professionals who are committed to achieving the best
                        possible outcome.
                      </q>
                    </p>
                    <div className="quote-footer">
                      <cite>Navjot Singh Sadhrao</cite>
                      <small>CEO at LawExpert</small>
                    </div>
                  </blockquote>
                  <div className="button-wrap inset-md-left-70">
                    <a className="buttonAbt" href="#">
                      Request a Free Consultation
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div
          className="bg-displaced bg-image2"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </section>
    </>
  );
};

export default About;
