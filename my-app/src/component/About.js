import React, { useState } from "react";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    background: "white",
  });

  const [myBtnStyle, setMyBtnStyle] = useState({
    color: "white",
    background: "green",
  });
  const [mybtnText, setMybtnText] = useState("Enable Dark Mode");

  let changeBG = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        background: "black",
      });
      setMybtnText("Enable Light Mode");
      setMyBtnStyle({
        color: "white",
        background: "blue",
      });
    } else {
      setMyStyle({
        color: "black",
        background: "white",
      });
      setMybtnText("Enable Dark Mode");
      setMyBtnStyle({
        color: "white",
        background: "green",
      });
    }
  };
  return (
    <div>
      <div classNameName="container" style={myStyle}>
        <h2 classNameName="about us my-3">About Us</h2>
        <div classNameName="accordion" id="accordionExample" style={myStyle}>
          <div classNameName="accordion-item">
            <h2 classNameName="accordion-header">
              <button
                classNameName="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              classNameName="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div classNameName="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNameNamees that we use to style each element. These
                classNameNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div classNameName="accordion-item">
            <h2 classNameName="accordion-header">
              <button
                classNameName="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              classNameName="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div classNameName="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNameNamees that we use to style each element.
                These classNameNamees control the overall appearance, as well as
                the showing and hiding via CSS transitions. You can modify any
                of this with custom CSS or overriding our default variables.
                It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
          <div classNameName="accordion-item">
            <h2 classNameName="accordion-header">
              <button
                classNameName="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              classNameName="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div classNameName="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNameNamees that we use to style each element.
                These classNameNamees control the overall appearance, as well as
                the showing and hiding via CSS transitions. You can modify any
                of this with custom CSS or overriding our default variables.
                It's also worth noting that just about any HTML can go within
                the <code>.accordion-body</code>, though the transition does
                limit overflow.
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={changeBG}
          type="button"
          className="btn btn-primary my-4"
          style={myBtnStyle}
        >
          {mybtnText}
        </button>
      </div>
    </div>
  );
}

export default About;
