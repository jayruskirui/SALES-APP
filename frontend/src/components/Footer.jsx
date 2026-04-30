import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src= {assets.logo} alt=" " className='mb-5 w-32'/>
                <p className='w-full md:w-2/3text-gray-600'>
                    We are committed to providing our customers with the best shopping experience possible. Our team is dedicated to ensuring that you find the perfect products to meet your needs and exceed your expectations. We value your feedback and are always looking for ways to improve our services. Thank you for choosing us as your go-to destination for all your shopping needs.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+254 724 168 604</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>


        </div>

        <div>
            <hr/>
            <p className='text-center text-sm py-5'>Copyright © 2026 Forever You. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer