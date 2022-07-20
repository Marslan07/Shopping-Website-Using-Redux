import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/CartSlice';
const Cart = () => {
  const selectedItem =useSelector(state=> state.cart );
  const dispatch= useDispatch();

const handleRemove=(productId)=>{
  dispatch(remove(productId))
}
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          selectedItem.map(product=>(
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h4>{product.price}</h4>
              <button className='btn' onClick={()=> {handleRemove(product.id)}} >Remove</button>
            </div>
      ))
        }
      </div>
    </div>
  )
}

export default Cart