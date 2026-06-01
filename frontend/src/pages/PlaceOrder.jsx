import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  const [method, setMethod] = useState('momo')
  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------- Left Side ---------------- */}
      {/* --------------- Left Side ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="text"
          placeholder='Full name'
        />

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="tel"
          placeholder='Phone number'
        />

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="email"
          placeholder='Email address'
        />

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="text"
          placeholder='Detailed address: house number, street name...'
        />

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='Province / City'
          />

          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='District'
          />
        </div>

        <textarea
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full resize-none'
          rows="3"
          placeholder='Delivery note, e.g. deliver during office hours'
        ></textarea>
      </div>

      {/* -------------- Right Side --------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* ----------- Payment Method Selection ------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* MoMo */}
            <div
              onClick={() => setMethod('momo')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'momo' ? 'bg-green-400' : ''}`}></p>

              <div className='flex items-center gap-2 mx-4'>
                <img className='h-5 w-auto' src={assets.momo_logo} alt="MoMo" />
                <p className='text-gray-500 text-sm font-medium mx-4'>MOMO</p>
              </div>
            </div>

            {/* Cash On Delivery */}
            <div
              onClick={() => setMethod('cod')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              onClick={() => navigate('/orders')}
              className='bg-black text-white px-16 py-3 text-sm'
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder