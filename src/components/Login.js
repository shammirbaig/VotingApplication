import React from 'react'
import { withRouter } from "react-router-dom";
import config from "../config";
// import Home from './Home';
// import { UserContext } from '../App';




// const Login =({location})=>{
// const [userResponse,setUserResponse]= useState(null);


// const token = new URLSearchParams(location.search).get("token");
// console.log(token);

//     localStorage.setItem("token",token);
//     // // const { state, dispatch } = useContext(UserContext)
//     //     const { userProfileResponse } = userResponse;
//     //     console.log(JSON.stringify(userProfileResponse))
//     //     localStorage.setItem("user",JSON.stringify(userProfileResponse));
//     if (token) {
//       fetch(
//         "https://api.loginradius.com/identity/v2/auth/account?apikey=" +
//         config.API_KEY,
//         {
//           method: "GET",
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       )
//         .then((res) => res.json())
//         .then((res) => {
//           setUserResponse({ userResponse: res });
//           localStorage.setItem("user",JSON.stringify(userResponse));
//           // dispatch({ type: "USER", payload: res })

          
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     } else {
//       window.location.assign(
//         `https://${config.APP_NAME}.hub.loginradius.com/auth.aspx?action=login&return_url=${window.location.origin}/login`
//       );
//     }





// }


// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userProfileResponse: null,
//     };
//   }

//   // componentDidMount() {
   
  
//   //   const token = new URLSearchParams(this.props.location.search).get("token");
//   //   localStorage.setItem("token",token);
//   //   if (token) {
//   //     fetch(
//   //       "https://api.loginradius.com/identity/v2/auth/account?apikey=" +
//   //       config.API_KEY,
//   //       {
//   //         method: "GET",
//   //         headers: {
//   //           Authorization: "Bearer " + token,
//   //         },
//   //       }
//   //     )
//   //       .then((res) => res.json())
//   //       .then((res) => {
//   //         this.setState({ userProfileResponse: res });
//   //         // const { userProfileResponse } = this.state;
//   //         // console.log(JSON.stringify(userProfileResponse))
//   //         localStorage.setItem("user",JSON.stringify(res));
      


//   //         // dispatch({ type: "USER", payload: res.user })

          
//   //       })
//   //       .catch((e) => {
//   //         console.log(e);
//   //       });
//   //   } else {
//   //     window.location.assign(
//   //       `https://${config.APP_NAME}.hub.loginradius.com/auth.aspx?action=login&return_url=${window.location.origin}/login`
//   //     );
//   //   }
//   // }

//   render() {
//     // const { state, dispatch } = useContext(UserContext)
    
    
    
//     return (
      
//     <div>
    
//     <h1>hi</h1>
    
    
//     </div>
//         // <Home/>





      
//     );
//   }
// }

// export default withRouter(Login);
