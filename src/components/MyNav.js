import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const myNav=(props)=> {

  const username=props.user; 

  return (
    <div>
      <Card style={{ color: "white", height: "34px" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "17px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/trains",
                    state: { username},
                  }}
                >
                  Trains
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/moreInfo",
                    state: {username},
                  }}
                >
                  More Info
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{
                    marginLeft: "10px",
                    fontSize: "25px",
                    fontFamily: "Trebuchet MS",
                    fontWeight: "bold",
                  }}
                  to={{
                    pathname: "/profile",
                    state: {  username},
                  }}
                >
                  Profile
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  marginLeft: "1030px",
                  fontSize: "35px",
                  fontFamily: "Trebuchet MS",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Go Train
              </li>
            </ul>
          </div>
        </nav>
      </Card>
    </div>
  );
}

export default myNav;
