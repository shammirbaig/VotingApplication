import React, { useState, useEffect } from 'react';

import  Navbar from "./Navbar.js";
const Result = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/allposts', {

    }).then(res => res.json())
      .then(result => {

        setData(result.posts)
      })
  }, [])
  let total = 0;

  data.map(item => {
    total += (item.votes.length);
  })





  return (


    <div>
    {data.length &&  <Navbar/> }

      <table style={{ width: "60%", marginTop: "50px", marginLeft: "10%" }}>
        <thead style={{ fontSize: "22px" }}>
          <tr>
            <th >Name</th>
            <th>Vote</th>
            <th>Percentage Vote</th>
          </tr>
        </thead>

        {
          data.map(item => (
            <tbody key={item.title} style={{ padding: "5px" }}>
              <tr >
                <td style={{textAlign:"center"}}>{item.title}</td>

                
                <td style={{ fontSize: "19px", fontWeight: "700",textAlign:"center" }}>{item.votes.length}</td>
                <td style={{textAlign:"center"}}>{((item.votes.length / total) * 100).toFixed(2)}%</td>
              </tr>

            </tbody>
          ))
        }
      </table>
      <p style={{ fontSize: "30px" ,marginTop:"50px"}}><b style={{ marginLeft: "39%", backgroundColor: "white", marginTop: "300px" }}>Total counting Vote : {total}</b></p>
    </div>
  )
}


export default Result;