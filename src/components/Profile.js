import React from "react";
import { Table } from "react-bootstrap";
import "./profile.css";
import logo from "./qr.png";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo44 from "./trainLogo.png";
import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
  const location = useLocation();
  const { username } = location.state;
  console.log(username);
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    function getData() {
      axios
        .post("http://localhost:4000/profile", { username })
        .then((resp) => {
          setEmail(resp.data.email);
          setPhoneNo(resp.data.phoneNo);
          setIsChanged(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChanged]);

  return (
    <div>
      <div>
        <Card id="aaa" style={{ color: "white", height: "55px" }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/trains",
                      state: { username },
                    }}
                    style={{
                      fontSize: "25px",
                      fontFamily: "Trebuchet MS",
                      fontWeight: "bold",
                    }}
                  >
                    Trains
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/moreInfo",
                      state: { username },
                    }}
                    style={{
                      marginLeft: "10px",
                      fontSize: "25px",
                      fontFamily: "Trebuchet MS",
                      fontWeight: "bold",
                    }}
                  >
                    More Info
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/profile",
                      state: { username },
                    }}
                    style={{
                      marginLeft: "10px",
                      fontSize: "25px",
                      fontFamily: "Trebuchet MS",
                      fontWeight: "bold",
                    }}
                  >
                    Profile
                  </Link>
                </li>
                <img
                  src={logo44}
                  alt="logoooo"
                  style={{
                    height: "50 px",
                    width: "50px",
                    marginLeft: "960px",
                  }}
                />
                <li
                  className="nav-item"
                  style={{
                    marginLeft: "10px",
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
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <div
        className="container emp-profile"
        style={{
          borderRadius: "40px",
          width: "800px",
          backgroundColor: "#e0e0eb",
        }}
      >
        <form method="post" style={{ textAlign: "center", marginLeft: "70px" }}>
          <h1
            style={{
              marginBottom: "30px",
              textDecoration: "underline",
              marginRight: "55px",
            }}
          >
            Your Profile
          </h1>
          <div className="row">
            <div className="col-md-4" style={{ marginRight: "70px" }}>
              <img src={logo} alt="nouran" />
            </div>

            <div className="col-md-4">
              <Table
                striped
                bordered
                hover
                variant="light"
                style={{ marginTop: "30px" }}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Train Number</th>
                    <th>Date</th>
                    <th>Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>12579</td>
                    <td>11/20/2020</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>87581</td>
                    <td>4/9/2021</td>
                    <td>Paid</td>
                  </tr>
                </tbody>
              </Table>
              <div />
              <div />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{
                          marginTop: "15px",
                          marginRight: "80px",
                          marginLeft: "50px",
                        }}
                      >
                        User Name
                      </label>
                    </div>
                    <div
                      className="col-md-6"
                      style={{
                        marginTop: "15px",
                        maxWidth: "1 0%",
                        flex: "60%",
                      }}
                    >
                      <p style={{ marginLeft: "68px", textAlign: "left" }}>
                        {username}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label style={{ marginRight: "69px" }}>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ marginRight: "180px", marginLeft: "68px" }}>
                        {email}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        style={{ marginRight: "80px", marginLeft: "48px" }}
                      >
                        Phone No.
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p style={{ marginRight: "180px", marginLeft: "68px" }}>
                        {phoneNo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
