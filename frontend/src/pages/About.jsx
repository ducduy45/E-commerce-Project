import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias laboriosam ipsum eligendi non natus quisquam eveniet adipisci quibusdam vero!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iure eveniet officiis impedit voluptas tempore quos nesciunt, quae dolorem laudantium! Fugiat exercitationem dolore eius soluta.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas veniam eum odit nostrum deserunt aliquam delectus, nihil voluptatem maxime architecto alias facilis, quas perferendis aut, dicta iure corporis pariatur distinctio cumque. Exercitationem ut dolore libero itaque est. Consequuntur, molestiae!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam ipsum quo soluta praesentium, mollitia consectetur non, officiis eos, nisi eum cum minima. Earum tempora odit voluptatum nisi voluptas eveniet, cum eos, vero et quia molestiae. Earum accusantium eius vitae.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam ipsum quo soluta praesentium, mollitia consectetur non, officiis eos, nisi eum cum minima. Earum tempora odit voluptatum nisi voluptas eveniet, cum eos, vero et quia molestiae. Earum accusantium eius vitae.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam ipsum quo soluta praesentium, mollitia consectetur non, officiis eos, nisi eum cum minima. Earum tempora odit voluptatum nisi voluptas eveniet, cum eos, vero et quia molestiae. Earum accusantium eius vitae.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About