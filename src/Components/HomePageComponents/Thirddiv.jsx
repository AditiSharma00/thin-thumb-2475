import React from "react";

const Thirddiv = () => {
  return (
    <div style={{ marginLeft: "63px", marginTop: "63px" }}>
      <img
        src={process.env.PUBLIC_URL + "/Image/img3.png"}
        alt=""
        style={{
          width: "95%",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/Image/img4.png"}
        alt=""
        style={{
          width: "95%",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          marginTop: "63px",
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/Image/img5.png"}
        alt=""
        style={{
          width: "95%",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          marginTop: "63px",
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/Image/img6.png"}
        alt=""
        style={{
          width: "95%",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",

          marginTop: "63px",
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/Image/img7.png"}
        alt=""
        style={{
          width: "95%",
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",

          marginTop: "63px",
        }}
      />
    </div>
  );
};

export default Thirddiv;
