import React, { PureComponent } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import CatageroiesComponent from './CategoriesComponent';
export default class CatageroiesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
          selectedCategory: null,
          product: [],
        };
      }
    
      componentDidMount() {
        this.fetchCategories();
        this.fetchProductdata();
      }
      componentDidUpdate(prev,item){
        if(prev!==prev){
        this.fetchProductdata(item);
        }
      }
     
    
      fetchCategories() {
        fetch('http://localhost:3000/categories')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({
              categories: data,
            });
          })
          .catch((error) => console.log(error));
      }
      fetchProductdata(item){
        fetch(`http://localhost:3000/${item}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState({
              product: data,
            });
          })
          .catch((error) => console.log(error));
      }


  render() {
    const { categories,product} = this.state;
    console.log(categories)
    console.log(product)
   
    return (
      <>
        <div className='category-bar'>
          {categories.map((item, i) => (
            <Link key={i} 
            className='category-link'
            onClick={()=>this.fetchProductdata(item)} 
             to={`/${item}`} 
             >  
              {item}
            </Link>
          ))}
        </div>
        <Routes>
            <Route
             path="/:item" 
            element={<CatageroiesComponent
            product={product}
            categories={categories}
            />} />
        </Routes>
      </>
    )
  }
}
