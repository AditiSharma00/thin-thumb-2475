import React from "react";

const Firstdiv = () => {
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid black",s

        justifyContent: "space-between",
        height: "812px",
        alignContent: "center",
        alignItems: "center",
        margin: "0px 63px 0px 63px",
      }}
    >
      <div
        style={{
          marginLeft: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            // border: "1px solid red",
            // justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <img
            src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/Breakfast.svg/Breakfast.svg?h=26&w=40&la=en"
            alt=""
          />
          <h3
            style={{
              fontSize: "1.6rem",
              color: "#485259",
              fontWeight: "700",
              fontFamily: "apercu,sans-serif",
              margin: "22px 0px 11px 22px",
            }}
          >
            Your Perfect Morning Mix
          </h3>
        </div>

        <h1
          style={{
            color: "#dd0031",
            fontSize: "45px",
            fontFamily: "apercu,sans-serif",
            fontWeight: "700",
            width: "450px",
          }}
        >
          {" "}
          A delicious start to your day
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            boxSizing: "border-box",
            width: "450px",
            // border: "1px solid red",
            // marginLeft: "30px",
            marginTop: "2px",
          }}
        >
          <button
            style={{
              // border: "1px solid red",
              background: "rgba(221,0,49,.99)",
              borderRadius: "13px",
              color: "#fff",
              width: "48%",
              height: "60px",
            }}
          >
            Order Pickup
          </button>
          <button
            style={{
              border: "1px solid red",
              background: "rgba(221,0,49,.99)",
              borderRadius: "13px",
              color: "#fff",
              width: "48%",
              height: "60px",
            }}
          >
            Order Delivery
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Daypart%20Hero/CFA2212020-bfast-Daypart-Desktop_710x580V2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Firstdiv;
