import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import smashing from 'public/images/home/smashing.jpg';
import summit from 'public/images/home/summit.jpg';
import reactathon from 'public/images/home/reactathon.jpg';
import ship from 'public/images/home/ship.jpg';
import filming from 'public/images/home/filming.jpg';
import meetups from 'public/images/home/meetups.jpg';
import { PreloadResources } from 'app/preload';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const skills = [
  {
    title: 'Web Technologies',
    items: [
      {img: '/next.svg', name: 'NextJS'},{img:'/nestjs.svg',name:'NestJS'},{img:'/fastapi.svg',name:'FastAPI'},{img:'/flask.svg',name:'Flask'},{img:'/express.svg', name:'ExpressJS'},
    ]
  },
  {
    title: 'DevOps and Cloud',
    items: [
      {img: '/docker.svg', name: 'Docker'},{img:'/terraform.svg',name:'Terraform'},{img:'/lambda.svg',name:'AWS Lambda'},{img:'/serverless.svg',name:'serverless'},{img:'/express.svg', name:'ExpressJS'},
    ]
  }
];


export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm gopinath 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I am a proficient full-stack developer with expertise in `}
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Next.js logomark" src="/next-logo.svg" className="!mr-1" width="14" height="14" />
            Next.js
          </Badge>
        </span>
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/python2.svg" className="!mr-1" width="14" height="14" />
            Python
          </Badge>
        </span>
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/node.svg" className="!mr-1" width="14" height="14" />
            Node JS
          </Badge>
        </span>
        {`. I specialize in deploying robust and scalable applications on leading cloud platforms, including `} 
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/aws.svg" className="!mr-1" width="14" height="14" />
            AWS
          </Badge>
        </span>
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/azure.svg" className="!mr-1" width="14" height="14" />
            Azure
          </Badge>
        </span>
        {`. Additionally, my extensive experience with crafting reliable pipelines for generative AI technologies allows me to craft innovative, intelligent and state of the art solutions using `}
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/openai.svg" className="!mr-1" width="14" height="14" />
            OpenAI
          </Badge>
        </span>
        <span className='mr-1'>
          <Badge href="https://nextjs.org">
            <img alt="Python logomark" src="/huggingface.svg" className="!mr-1" width="14" height="14" />
            Hugging Face
          </Badge>
        </span>
        {`that push the boundaries of what’s possible, integrating advanced large language models to enhance user experiences and streamline complex processes.`}
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past six years, I have developed and deployed 
          numerous web applications that are scalable, responsive, 
          and efficient. These applications leverage the latest technologies 
          and are designed to be fail-proof, ensuring high reliability and 
          performance spanning various fields, including management, logistics, 
          e-commerce, and medicine.
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        {skills.map((item1,key1)=>
          <div className='shadow border rounded-lg py-5 px-4' key={key1}>
            <p className='mb-2 text-xs font-bold text-gray-500 uppercase'>{item1.title}</p>
            <div>
              <div className='flex gap-3 flex-wrap'>
                {item1.items.map((item2,key2)=>
                  <div className='border border-neutral-200 rounded bg-neutral-50 px-3 py-2 flex items-center' key={key2}>
                    <img src={item2.img} width="25" height="25" />
                    <div className='h-[calc(100%)] w-[2px] max-w-[2px] bg-gray-300 mx-3'></div>
                    <p className='text-sm font-semibold text-[#3A4750]'>{item2.name}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="my-8 flex w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://linear.app">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#linear" />
            </svg>
          </a>
        </div>
        
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with and advised companies on{' '}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
          <Link href="/blog/devrel">developer relations</Link>, building
          open-source communities, product-led growth, and more.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
