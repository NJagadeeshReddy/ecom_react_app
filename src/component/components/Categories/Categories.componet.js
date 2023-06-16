import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import "./Categories.scss";

export default class Categoriescomponet extends PureComponent {
  render() {
    return (
      <div className='cat'>
        <ol className='list'>
            <li><Link to="/" >Home</Link> </li>
            <li><Link to="fruits">Fruits</Link></li>
            <li><Link to="vegetables">Vegetables</Link></li>
            <li><Link to="dryfruits">Dry Fruits</Link></li>
            <li><Link to="juices">Juices</Link></li>
        </ol>
      </div>
    )
  }
}
