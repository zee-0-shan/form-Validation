import "./App.css"
import React, {useState} from "react";

const App = () => {
  const [user, setUser] = useState({name:"",email:"",number:"",password:""})
  const[formError,setFormError]=useState({})
  const[isSubmit,setIsSubmit]=useState(false)

  let name, value

  const HandleInput=(e)=>{
 name=e.target.name
 value=e.target.value
 setUser({...user,[name]:value})
  }

  const HandleSubmit=(e)=>{
    e.preventDefault();
    setFormError(validate(user))
    setIsSubmit(true);
  }
  


  const validate=(values)=>{
    const errors={}
    const emailRegex=/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    const numberRegex=/^[0-9]{10}$/
    const nameRegex=/^[a-z\d\s]+$/i
    if(!values.name) {
      errors.name="All fields are mandatory"
    }
    else if(!nameRegex.test(values.name)){
      errors.name=" Name is not alphanumeric"
    }
    if(!values.email) {
      errors.email="All fields are mandatory";
    }
    else if(!emailRegex.test(values.email)){
      errors.email="Email must contain @"
    }
    if(!values.number) {
      errors.number="All fields are mandatory"
    }
    else if(!numberRegex.test(values.number)){
      errors.number=" Phone Number must contain only 10 numbers "}

    if(!values.password) {
      errors.password="All fields are mandatory"
    }
    else if(values.password.length<6){
      errors.password="Password must contain atleast 6 letters"
    }
    return errors
  }
  return (
    <div id="main">      
          <form onSubmit={HandleSubmit}>
          {Object.keys(formError).length===0  && isSubmit ? (<p>Hi {user.email.split("@")[0]}</p>): ""}
            <label htmlFor="name">Enter the name</label>
            <input type="text" id="name" name="name" data-testid="name" value={user.name} onChange={HandleInput} />
            <p>{formError.name}</p>

            <label htmlFor="email">Enter your email</label>
            <input type="email" id="email" name="email" data-testid="email" value={user.email} onChange={HandleInput}  />
            <p>{formError.email}</p>

            <label htmlFor="gender">select gender</label>
            <select name="gender" id="gender" >
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>

            <br />
            <br />

            <label htmlFor="number">Enter your Phone Number</label>
            <input type="tel" id="number" name="number" value={user.number} data-testid="phoneNumber" onChange={HandleInput} />
            <p>{formError.number}</p>

            <label htmlFor="password">Enter the Password</label>
            <input type="password" id="password" value={user.password} name="password" data-testid="password" onChange={HandleInput} />
            <p>{formError.password}</p>

            <button type="submit" >Submit</button>
          </form>
      
    </div>
  )
}


export default App;
