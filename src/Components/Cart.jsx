import React, { useEffect, useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import Footer from './Footer';
import axios from 'axios';

const CartItem = ({ name, price, quantity, image }) => (
  <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    <div className="flex w-2/5">
      <div className="w-20">
        <img className="h-24" src={image} alt={name} />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <span className="font-bold text-sm">{name}</span>
        <button className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center">
          <Trash2 className="w-4 h-4 mr-1" />
          Remove
        </button>
      </div>
    </div>
    <div className="flex justify-center w-1/5">
      <button className="text-gray-600 focus:outline-none focus:text-gray-600">
        <Minus className="w-4 h-4" />
      </button>
      <input className="mx-2 border text-center w-12" type="text" value={quantity} />
      <button className="text-gray-600 focus:outline-none focus:text-gray-600">
        <Plus className="w-4 h-4" />
      </button>
    </div>
    <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
    <span className="text-center w-1/5 font-semibold text-sm">${price * quantity}</span>
  </div>
);

const Cart = () => {
  const [cartItems, setcartItems] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const token = localStorage.getItem('auth_token');

    axios.get(
      'http://127.0.0.1:8000/api/cart/get/',
      {
        headers: {
          'Authorization': `Token ${token}`, // Send token in the Authorization header
        },
      }
    )
    .then(response=>{
      console.log(response)
      setcartItems(response.data)
      setLoading(false)
    })
  }, [])

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto pt-2">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          <div className="w-full md:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
            </div>
            <div className='h-[70vh] overflow-x-hidden overflow-y-auto '>
            {cartItems.map(item => (
              <CartItem key={item.id} name={item.product.name} price={item.product.price} quantity={item.quantity} image={item.product.image} />
            ))}</div>
          </div>

          <div id="summary" className="w-full md:w-1/4 px-8 py-10 bg-gray-50">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
              <span className="font-semibold text-sm">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Tax</span>
              <span className="font-semibold text-sm">${tax.toFixed(2)}</span>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;

