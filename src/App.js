import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { auth } from "./firebase";
import Footer2 from "./Components/Footer2";
import AllRoutes from "./Components/Routes/AllRoutes";
function App() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <div>
        <AllRoutes />
      </div>
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
