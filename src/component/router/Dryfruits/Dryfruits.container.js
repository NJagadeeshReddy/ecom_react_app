import React, { PureComponent } from 'react'
import Dryfruitscomponent from './Dryfruits.component'

export default class Dryfruitscontainer extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      dryfruits:[]
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/dryfruits')
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      this.setState({
        dryfruits:data,
      })
    })
    .catch((error)=>console.log(error));
    
  }
 
  render() {
    const {dryfruits}=this.state;
   
    return (
      <div>
        <Dryfruitscomponent 
        dryfruits={dryfruits}
       
         />

      </div>
    );
  }
}
