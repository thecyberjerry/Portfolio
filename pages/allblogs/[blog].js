import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';
import Aos from "aos";
import Image from 'next/image';
import 'aos/dist/aos.css'
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/router';
const montserrat = Montserrat({ weight: ['300'], subsets: ['latin'] });

export default function Blog({ data }) {
  const [blog, setBlog] = useState(data); // Corrected useState function name
  const router = useRouter();
  useEffect(() => {
    Aos.init();
  }, [])
  useEffect(() => {
    fetch(`/api/getblog?blog=${router.query.blog}`).then((data) => { if (data.status === 404) { router.push('/blogs') } else { return data.json() } }).then((response) => { return setBlog(response) })
  }, [router.query.blog])

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <Navbar />
      <div className={`${montserrat.className}  flex text-left  justify-center`}>
        <div >
          {!blog ?
             <div className='my-14  justify-center flex flex-col items-center'><Image src="/images/loading.gif" height={100} width={100} className='w-full'></Image>
              <p>Fetching Blog...</p></div>:<div >
              <Head>
                <title>{blog.title} | By {blog.author}</title>
              </Head>
              <div className=' flex justify-center text-3xl pt-14 font-bold text-center'>
                {blog.title}
              </div>
              <div className='px-10 py-10  md:px-32 text-sm md:text-xl' dangerouslySetInnerHTML={createMarkup(blog.content)}>
                {/* {blog.content} */}
              </div>
              <div className='flex text-center justify-end px-20 md:px-64'>
                -By {blog.author} on {blog.date}
                <br />
              </div>
            </div>}
        </div>
      </div>
      <Footer />
    </>
  );
}