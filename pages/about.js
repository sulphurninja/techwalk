import { useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useToast } from '../hooks/useToast';
import Footer from "../components/Footer"

import Header from "../components/Header"

function about() {
  


  const toast = useToast();
  const { register, handleSubmit, formState: { errors } , reset } = useForm();
  const router = useRouter();
  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          'success',
          'Thank you for contacting us, we will be in touch soon.'
        );
      }
    } catch (err) {}
  }
   

  return (
    <div>
      <Header />
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-10 lg:py">
        <h1>The Tech Walk is a Property of <span className='text-blue-400'>LeadcellB2B</span> Pvt. Ltd</h1>
        <h2>News, Tutorials, Articles and a lot more!</h2>

      </div>
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-10 lg:py">
        <article>
          The TechWalk is a B2B Lead generation company. Our extensive lead generation techniques utilize data, B2B email marketing, cold calling and tele-marketing automation to drive high ROI for marketing and technology clients. As a full-service B2B demand generation agency, we offer end to end B2B Lead Generation services- Whitepaper Dissemination, Content Syndication and Account Based Marketing solutions and much more. Also, we offer wider coverage to your content across millions of Technology readers who you could generate, nurture, and convert leads to revenue. Our sole purpose is to support you and stick to our commitments, to not just satisfy, but exceed your opportunity. We believe in fun and professional working environment as well as enabling us to provide on-going development opportunities for our talented team. With our team of experts, we ensure that no matter where you may be, you are provided with the best of services that help you move towards successful business growth
        </article>
      </div>


      
    <div className="b py-16 bg-amber-300 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
  
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
      <h1 className="pb-5 font-extrabold">Get in Touch!</h1>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              {...register('name',{
                required: {
                  value: true,
                  message: 'You must enter your name',
                },
              })} 
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="Full name"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.name?.message}
            </span>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              {...register('email',{
                required: {
                  value: true,
                  message: 'You must enter your email address',
                },
                minLength: {
                  value: 8,
                  message: 'This is not long enough to be an email',
                },
                maxLength: {
                  value: 120,
                  message: 'This is too long',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="Email"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              {...register}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              {...register('message',{
                required: {
                  value: true,
                  message: 'You need to enter your message',
                },
                maxLength: {
                  value: 1000,
                  message: "Your message can't be more than 1000 characters",
                },
                minLength: {
                  value: 50,
                  message: 'Your message must be longer than this!',
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? 'ring-2 ring-red-500' : null
              }`}
              placeholder="Message"></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors?.message?.message}
            </span>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-black hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>


      <Footer />
    </div>


  );
};

export default about
