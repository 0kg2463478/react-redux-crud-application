import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label>bar</label>
//         <input type="text" onClick={() => {console.log("hello")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const profiles = [
    {name:"A", age:1},
    {name:"B", age:2},
    {name:"C"}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>name={props.name} age={props.age} {props.index}</div>
}

User.defaultProps = {
  age:0
}

export default App;
