import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'
import Footer from '../components/Footer'

interface Props{
  posts: [Post];
}

export default function Home ({posts}: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>The Tech Walk - Hot tech takes</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <meta name="description" content="The Tech Walk : hottest tech takes on the coolest tech stacks.
News, Tutorials, Articles, Tech Blogs and a lot more!" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Technology blog, blogs, tech, web development, developers, programmers, software development, software developers" />
      </Head>
      <Header />
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-10 lg:py">
        <div className='px-10 space-y-5'>
          <h1 className="text-6xl max-w-xl font-wow">
            <span className='font-bold'>The Tech Walk </span> : <span className='text-red-500'>hottest</span> tech takes on the <span className='text-blue-400'>coolest</span> tech stacks.</h1>
          <h2>News, Tutorials, Articles and a lot more!</h2>
        </div>

        <img className='hidden md:inline-flex h-32 lg:h-full' src='/thelogo.png' alt='the tech walk logo, showing a man using mobile phone and reading his tech feed while taking a walk' />
      </div>

      {/* POSTS */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>

        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="Featured Image for the Article" />
              <div className='flex justify-between p-5 bg-white'>
           
             <div>
              <p className='text-lg font-bold'>{post.title}</p>
              <p className='text-xs'>{post.description} by  {post.author.name}</p>
            </div>
            <img className='h-12 w-12 rounded-full' src={urlFor(post.author.image).url()!} alt="author image for the Article" />
            </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
    
  );
}

export const getServerSideProps = async () =>{
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
   description,
   mainImage,
   slug
  }`;

  const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts,
    },
  };


}


