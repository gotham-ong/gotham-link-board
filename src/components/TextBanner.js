import React from "react";

const TextBanner = props => {
  const { title, text } = props;

  const myStyles = ({
    title: {
      fontFamily: "Monaco",
      fontWeight: "bold",
      margin: "20px",
      fontSize: "19px",
      color: "white"
    },
    headline: {
      fontFamily: "Monaco",
      margin: "20px",
      fontSize: "15px",
      color: "white"
    },
    box: {
      marginBottom: "35px",
    }
  })
  return (
    <div style={myStyles.box}>
      <h1 style={myStyles.title}>{title}</h1>
      <p style={myStyles.headline}>{text}</p>
    </div>
  )
}

export default TextBanner
