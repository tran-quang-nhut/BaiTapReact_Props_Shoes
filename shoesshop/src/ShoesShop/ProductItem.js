import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
  
  render() {
    const {item} = this.props;
    let {changeChooseItem} = this.props;
    return (
      <div className='col-4 mt-4' key={item.id}>
        <div className="card">
            <img src={item.image} alt="..." />
            <div className="card-footer">
                <p className='fs-3'>{item.name}</p>
                <p className='fs-4'>{item.price} $</p>
                <Link to='/shop' id='shopBtn'></Link>
                <button className="btn btn-dark fs-4" onClick={()=>changeChooseItem(item)}
              >Add to carts <i className='fa fa-shopping-cart'></i></button>
            </div>
        </div>
      </div>
    )
  }
  
}
