import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode as jwt_decode } from "jwt-decode";

export default function Navbar({
  handlesetsearch,
  handlesetcategoryvalue,
  handleclearfilter,
}) {
  const [userObject, setUserObject] = useState({});
  function handleCallbackResponse(response) {
    console.log("encoded jwt id token :" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUserObject(userObject);
    document.getElementById("signinDiv").hidden = true;
  }
  function handleSignOut(event) {
    setUserObject({});
    document.getElementById("signinDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "948876146-bf2u7a4ftt1j5nhcpdmhvh330vhiegkm.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <>
      <div className="navbar justify-content-evenly position-sticky top-0 d-flex">
        <div className="d-flex align-items-center">
          <Link
            onClick={handleclearfilter}
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Roboto Slab serif",
            }}
          >
            <h3 className="navbarHeading">The Second Skin</h3>
          </Link>
        </div>
        <div className="d-flex align-items-center border-bottom border-light">
          <input
            onChange={handlesetsearch}
            className=" mx-3 bg-transparent border-0 search"
            id="search"
            style={{ height: "30px", width: "", fontStyle: "italic" }}
            placeholder="You are looking for ?"
          />
        </div>
        <div>
         {userObject.name && (
            <div className="introo">
              <h5> Hello {userObject.name} !</h5>{" "}
            </div>
          )}
         </div>
        <div className="d-flex align-items-center">
          <Link
            to="/checkout/info"
            style={{ textDecoration: "none", color: "white" }}
          >
          <h3><i class="bi bi-cart2"></i></h3>
          </Link>
        </div>
        
          <div id="signinDiv"></div>
          
         
         <div> {Object.keys(userObject).length !== 0 && (
            <button className="logout" onClick={(e) => handleSignOut(e)}>Log Out</button>
          )}
</div>
         
        
      </div>
      <div>
        <marquee className="markq" style={{color:"black"}}>🌟🚀HURRY UP🌟🚀 20% OFF FLASH SALE! 🌟🌟 Grab your favorites now!🛍️🛍️Hurry, before it's gone!🚀🚀🚀 </marquee>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-eve secnvb">
        <div className="container-fluid secnvb">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse secnvb"
            id="navbarTogglerDemo01"
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly"
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                width: "100%",
              }}
            >
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator "
                  onClick={handlesetcategoryvalue} style={{color:"white", fontFamily:"serif"}}
                >
                  Women's clothing
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator"
                  aria-current="page"
                  onClick={handlesetcategoryvalue}
                  style={{color:"white", fontFamily:"serif"}}
                >
                  Men's clothing
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator"
                  onClick={handlesetcategoryvalue}
                  style={{color:"white", fontFamily:"serif"}}
                >
                  Women's Accessories
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator"
                  onClick={handlesetcategoryvalue}
                  style={{color:"white", fontFamily:"serif"}}
                >
                  Men's Accessories
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator"
                  onClick={handlesetcategoryvalue}
                  style={{color:"white", fontFamily:"serif"}}
                >
                  Women's Footwear
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link fs-5 p-1 px-2 smnvit cator"
                  onClick={handlesetcategoryvalue}
                  style={{color:"white", fontFamily:"serif"}}
                >
                  Men's Footwear
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
