import Head from 'next/head'
import Image from 'next/image'
import Front from '../components/Front'
import Mid from '../components/Mid'
import axiosFetch from './axiosFetch'



export default function Home() {
  const { data: blogs, isPending, error} = axiosFetch('https://my-json-server.typicode.com/xalpha7/Mindmagic-blog-db/db/blogs');
   
  return (
    <>
      <Head>
        <title>MindMagic Travels | Home</title>
        <meta name="description" content="travels" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </Head>
    <div className="homecontainer">
      {error && <div className='home'>{error}</div>}
      {isPending && <div className='home'> Loading... </div>}
      {blogs && <Front />}
      {blogs &&  <Mid/>}
    
   
    
    
      
    </div>
    </>
  )
}
