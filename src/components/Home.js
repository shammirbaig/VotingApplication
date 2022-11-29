import React, { useState, useEffect } from "react";
import swal from "sweetalert";

import { useLocation } from "react-router-dom";
import config from "../config.js";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  // const token = searchParams.get("token");
  const [userResponse, setUserResponse] = useState(null);

  localStorage.setItem("token", token);
  
  
  //GET THE USERRESPONSE FROM LR API AND SAVE IT IN THE LOCALSTORAGE
  useEffect(()=>{


    if (token !== null) {
      fetch(
        "https://api.loginradius.com/identity/v2/auth/account?apikey=" +
          config.API_KEY,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setUserResponse({ res })
  
          localStorage.setItem("user", JSON.stringify(res));
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      window.location.assign(
        `https://${config.APP_NAME}.hub.loginradius.com/auth.aspx?action=login&return_url=${window.location.origin}/home`
      );
    }
  },)
  

  // useEffect(() => {
  //   if (isLoading) {
  //     fetch("http://localhost:5000/allposts", {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {
  //         // console.log(result)
  //         setData(result.posts);
  //         setLoading(false);
  //       });
  //   }
  // }, [data, isLoading]);

  useEffect(() => {
    fetch("http://localhost:5000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  // console.log(data)

  let postidremove;

  const userId = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).Uid
    : null;
  
//TRAVERSE THE POSTS TO FIND THE POST WHICH WE HAVE VOTED FOR SO THAT WE CAN PASS THAT POST ID INTO REMOVE VOTE FUNCTION
  for (var key in data) {
    for (var key1 in data[key]) {
      for (var key2 in data[key][key1]) {
        if (userId === data[key][key1][key2]) {
          // console.log(data[key]._id);
          postidremove = data[key]._id;
        }
      }
    }
  }

  const removevote = (postidremove, userId) => {
    swal({
      title: "Are you sure ?",
      text: "To remove your vote!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("http://localhost:5000/removevote", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            postId: postidremove,
            userId,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const newData = data.map((item) => {
              if (item._id === result._id) {
                return result;
              } else {
                return item;
              }
            });
            setData(newData);
            console.log(newData);
          })
          .catch((err) => {
            console.json(err);
          });
        swal("You successfully has removed your vote!", {
          icon: "success",
        });
      } else {
        swal("Again ,select your option!");
      }
    });
  };

  
  //FUNCTION TO VOTE FOR A PERSON
  const votePlayer = (id, userId) => {
    swal({
      title: "Are you sure?",
      text: "Once selected, you will not be able to reselect the options!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("http://localhost:5000/vote", {
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            postId: id,
            userId,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const newData = data.map((item) => {
              if (item._id === result._id) {
                return result;
              } else {
                return item;
              }
            });
            setData(newData);
            console.log(newData);
          })
          .catch((err) => {
            console.json(err);
          });
        swal("You successfully has given your vote!", {
          icon: "success",
        });
      } else {
        swal("Again ,select your option!");
      }
    });
  };

  let isVote;
  if (JSON.parse(localStorage.getItem("user")) !== null) {
    isVote = JSON.parse(localStorage.getItem("user")).Uid;
  }

  // CREATES AN ARRAY OF ARRAY OF USERS ,SO THAT WE CAN CHECK IF THE LOGGED IN USER HAS VOTED BEFORE ,IF ALREADY VOTED WE CAN DISABLE VOTE BUTTON
  const userIdExist = data.map((item) => item.votes.filter((item) => item));

  let userVotedBefore = false;

  // TRAVERSE THE ARRAY OF ARRAY OF VOTES
  //   console.log(userIdExist);
  for (let key of userIdExist) {
    if (key.length > 0) {
      for (let key2 of key) {
        if (key2 === isVote) {
          userVotedBefore = true;
        }
      }
    }
  }

  const userName = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user")).FullName
    : null;

  return (
    <div>
      {userResponse && <Navbar />}
      {userResponse && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"space-around",
          }}
        >
          <h2>Hi {userName}</h2>
          <button
            style={{
              backgroundColor: "#4CAF50" /* Green */,
              border: "none",
              color: "white",
              padding: "15px",
              textAlign: "center",
              marginTop: "25px",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
            }}
            onClick={() => removevote(postidremove, userId)}
          >
            Remove vote
          </button>
        </div>
      )}

      <div className="col-md-8" style={{ margin: "auto", paddingTop: "5%" }}>
        <div
          className="col-md-8"
          style={{
            margin: "auto",
            backgroundColor: "white",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          {data.map((item, index) => {
            return (
              <div
                key={item._id}
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#f2f4f6",
                  height: "60px",
                  borderRadius: "15px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <h2>
                    <b style={{}}>{index + 1}</b>
                  </h2>
                  <h2>
                    <b style={{}}>{item.title}</b>
                  </h2>

                  <div className="card-content" style={{ margin: "10px" }}>
                    {!item.votes.includes(userId) &&
                    userVotedBefore === false ? (
                      <button
                        className=" btn btn-success"
                        style={{
                          backgroundColor: "#4CAF50" /* Green */,
                          border: "none",
                          color: "white",
                          padding: "15px",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "inline-block",
                          borderRadius: "5px",
                          fontSize: "16px",
                        }}
                        onClick={() => {
                          votePlayer(item._id, userId);
                        }}
                      >
                        Vote
                      </button>
                    ) : (
                      <button
                        className="btn disabled"
                        style={{
                          backgroundColor: "#EE4B2B" /* Green */,
                          border: "none",
                          color: "white",
                          padding: "15px",
                          textAlign: "center",
                          textDecoration: "none",
                          display: "inline-block",
                          fontSize: "16px",
                        }}
                      >
                        Already Voted
                      </button>
                    )}
                    {/*userVotedBefore ? (
                      <button
                        className="btn disabled"
                        style={{
                          marginLeft: "47px",
                          padding: "10px",
                          background: "red",
                        }}
                      >
                        Already Voted
                      </button>
                    ) : (
                      ""
                    )*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
