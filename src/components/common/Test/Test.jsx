import React, { useState } from 'react'

// export default class Test extends React.Component {
//   render() {
//     return (
//       <div>
//         <button type={this.props.behaivor}>{this.props.children}</button>
//       </div>
//     )
//   }
// }
export default function Test(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      {props.children} {count} 
    </button>
  );
}