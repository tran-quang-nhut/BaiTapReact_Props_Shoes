import React, { Component } from 'react'
import { data } from '../Data/ProductData'
export default class Modal extends Component {
  render() {
    let {item} = this.props;
    return (
      <div className=''>
        <div className="row">
          <div className="col-5">
              <img src={item.image} alt="..." width={400} />
          </div>
          <div className="col-7 px-3 d-flex flex-column justify-content-center">
              <p className='fs-3 my-1'>{item.name}</p>
              <p className='fs-5 my-0 fw-bolder'>{item.price} $</p>
              <p className='f-5'>{item.description}</p>
              <p><button className="btn btn-dark">Add to carts  <i className="fa fa-shopping-cart"></i></button></p>
          </div>
        </div>
      </div>
    )
  }
}
