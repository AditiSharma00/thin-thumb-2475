import React from "react";

const Seconddiv = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        // marginLeft: "63px",
        // marginRight: "63px",
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/Image/chcikfill.png"}
        alt=""
        style={{
          width: "45%",
          marginLeft: "63px",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      />
      <img
        src={process.env.PUBLIC_URL + "/Image/chcikfill2.png"}
        alt=""
        style={{
          //   border: "1px solid black",
          width: "45%",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      />
    </div>
  );
};

export default Seconddiv;
