import React from 'react';
import PropTypes from 'prop-types'

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
  return <div>name={props.name} age={props.age}</div>
}

// 型設定
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
