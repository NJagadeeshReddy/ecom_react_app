import React, { PureComponent } from 'react'
import Fruitscomponent from './Fruits.component'

export default class Fruitscontainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruits:[]
    };
  }
  componentDidMount(){
    fetch('http://localhost:3000/fruits')
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({
        fruits:data,
      })
    })
    .catch((error)=>console.log(error));
  }
 
 
  render() {
   
    const {fruits} = this.state;
    return (
      <div>
        
        <Fruitscomponent
          fruits={fruits}
         />
      </div>
    )
  }
}
