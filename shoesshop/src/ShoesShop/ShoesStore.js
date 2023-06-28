import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import { data } from '../Data/ProductData'
export default class ShoesStore extends Component {

  render() {
    return (
      <div className=''>
        <ProductList data={data}/>
      </div>
    )
  }
}
