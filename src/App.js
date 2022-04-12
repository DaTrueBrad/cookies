import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {useCookies} from 'react-cookie'
import Child from './Child';

function App() {
  const [cookies, setCookie] = useCookies(['userInput', 'name'])
  const [data, setData] = useState("")

  const handleChange = (e) => {
    switch(e.target.name){
      case "nameThing":
        return setCookie('name', e.target.value, {path: '/'})
      case "userInput":
        return setCookie('userInput', e.target.value, {path: '/'})
      default:
        console.log("Nothing")
    }
    
  }
  

  return (
    <div className="App">
      <h1>UserInput: {cookies.userInput}</h1>
      <h1>Name: {cookies.name}</h1>
      <input type="text" name="userInput" placeHolder='User Input' onChange={handleChange}/>
      <input type="text" name="nameThing" placeHolder='Name' onChange={handleChange}/>
      <Child />
    </div>
  );
}

export default App;
