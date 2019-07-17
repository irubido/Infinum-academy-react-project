import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useLocalStorage } from 'react-use';
// import { useAsync } from 'react-use';
  
  // function apiCall() {
    // return fetch('https://flighter-hw7.herokuapp.com/api/session', {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //     },
    //   body: JSON.stringify({
    //     "session": {
    //       "email": "ivan.horvat@example.com",
    //       "password": "kadulja"
    //     }
    //   })
    // })
  //     .then((response) => response.json())
      
  // }
  // const data = useAsync(apiCall);
  // console.log(data);

  // const x = useFetch('https://flighter-hw7.herokuapp.com/api/session', {
  // method: "POST",
  // headers: {
  //   "Accept": "application/json",
  //   "Content-Type": "application/json"
  //   },
  // body: JSON.stringify({
  //   "session": {
  //     "email": "ivan.horvat@example.com",
  //     "password": "kadulja"
  //   }
  // })
  // });
  // console.log(x);


  // function show() {
  //   console.log(values.email, values.password);
  // }

  // bez fukcije
  // const [token, setToken] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //       const res = await fetch('https://flighter-hw7.herokuapp.com/api/session', {
  //         method: "POST",
  //         headers: {
  //           "Accept": "application/json",
  //           "Content-Type": "application/json"
  //           },
  //         body: JSON.stringify({
  //           "session": {
  //             "email": "ivan.horvat@example.com",
  //             "password": "kadulja"
  //           }
  //         })
  //       });
  //       const data = await res.json();
  //       setToken(data.session.token);
  //       console.log(data.session.token);
  //   };
  //   fetchData();
  // }, []);

  const Login = () => {
  // const { values, handleChange, handleSubmit } = useForm(fetchData);
  
  
  const [token, setToken] = useLocalStorage('token','');
  const [valueEmail, setValueEmail] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  
  
  const fetchData = async (valueEmail,valuePassword) => {
    const res = await fetch('https://flighter-hw7.herokuapp.com/api/session', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
        },
      body: JSON.stringify({
        "session": {
          "email": `${valueEmail}`,
          "password": `${valuePassword}`
        }
      })
    });
    const data = await res.json();
    console.log(data);
    if (data.session) {
    setToken(data.session.token);
    console.log(data.session.token);
    
    return(data.session.token);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(valueEmail, valuePassword);
    fetchData(valueEmail,valuePassword);
  }
  
  return(
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <input type="email" name="email" value={valueEmail} onChange={e => setValueEmail(e.target.value)} placeholder="Username" required ></input>
        </div>
        <div>
          <input type="password" name="password" value={valuePassword} onChange={e => setValuePassword(e.target.value)} placeholder="Password" required ></input>
        </div>
        <div>
          <input type="checkbox"></input>
          Remember me
        </div>
        <button className="login-button">Login</button>
      </form>
      <div className="toregister">
        <p>Don't have an account?</p>
        <p><Link to="/register">Register here</Link></p>
      </div>
    </div>

  )
}
export default Login;