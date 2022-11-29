import React from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  
  const userPresent = user === null ? false : true;
  const token = localStorage.getItem("token");
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          listStyleType: "none",
          margin: "0px",
          padding: "30px",
          overflow: "hidden",
          backgroundColor: "#333",
        }}
      >
        <li>
          <a
            style={{
              display: "block",
              color: "white",
              textAlign: "center",
              paddingLeft: "14px",
              textDecoration: "none",
              fontSize: "30px",
            }}
            className="active"
            href={userPresent ? `/home?token=${token}` : "/"}
          >
            Voting App
          </a>
        </li>
      </ul>
      {userPresent ? (
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "-40px",
            listStyleType: "none",
          }}
        >
          {user.Roles && user.Roles.includes("Admin") ? (
            <li>
              <a
                style={{
                  display: "block",
                  color: "white",
                  textAlign: "center",
                  paddingLeft: "0px",
                  textDecoration: "none",
                  fontSize: "20px",
                }}
                href={"/result"}
              >
                Result
              </a>
            </li>
          ) : null}
          <li>
            <a
              style={{
                display: "block",
                color: "white",
                textAlign: "center",
                paddingLeft: "14px",
                textDecoration: "none",
                fontSize: "20px",
              }}
              href={"/profile"}
            >
              Edit profile
            </a>
          </li>
          <li>
            <a
              style={{
                display: "block",
                color: "white",
                textAlign: "center",
                paddingLeft: "14px",
                textDecoration: "none",
                fontSize: "20px",
              }}
              href={"/logout"}
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
