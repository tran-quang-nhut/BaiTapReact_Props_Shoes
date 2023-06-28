import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  state={
    chooseItem:{},
    name:''
  };
  render() {
    let {data} = this.props;
    
    return (
      <div>
        <h1 className='fw-light text-center my-3'>Bài Tập Giỏ Hàng Shoes Shop</h1>
        <div className='row'>
            {data.map(product=>{
                return <ProductItem item={product} key={product.id} changeChooseItem={this.changeChooseItem}/>
            })}
        </div>
      </div>
    )
  }

  changeChooseItem=async(item)=>{
    let {changeChoose} = this.props;
    this.setState({
      chooseItem:item
    });
    await changeChoose(this.state.chooseItem);
    let btn = document.querySelector('#shopBtn');
    btn.click();
  }

  componentWillUnmount=()=>{

    let {changeChoose} = this.props;
    changeChoose(this.state.chooseItem);
  }
}
