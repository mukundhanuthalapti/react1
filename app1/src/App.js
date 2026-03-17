import React from "react";

const App = () => {
  const myStyle = {
    color: "red",
    backgroundColor: "aqua",
    padding: "10px",
  };
  return (
    <>
      <div>
        <div>
          <h1 style={myStyle}>What is HTML</h1>
          <p style={{ color: "red", backgroundColor: "aqua", padding: "10px" }}>
            HTML (HyperText Markup Language) is the standard markup language
            used to create and structure content on the World Wide Web. It acts
            as the "skeleton" for a webpage, defining elements such as headings,
            paragraphs, links, and images, which web browsers then interpret and
            display as a visual page
          </p>
        </div>
        <h1 className="title">What is HTML</h1>
        <p id="test">
          HTML (HyperText Markup Language) is the standard markup language used
          to create and structure content on the World Wide Web. It acts as the
          "skeleton" for a webpage, defining elements such as headings,
          paragraphs, links, and images, which web browsers then interpret and
          display as a visual page
        </p>
      </div>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default App;
