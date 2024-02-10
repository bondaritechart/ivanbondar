import { StaticImageData } from 'next/image'

import coverwalletImg from 'assets/images/projects/coverwallet.svg'
import tillyImg from 'assets/images/projects/elemy.svg'
import keepsImg from 'assets/images/projects/keeps.svg'
import popsaImg from 'assets/images/projects/popsa.svg'

export interface Project {
  id: number
  cardTitle: string
  cardDescription: string
  pageTitle: string
  tag: string
  pageDescription: string
  introduction: string
  url: string
  role: string
  technologies: string
  image: StaticImageData
}

export const projects: Project[] = [
  {
    id: 1,
    cardTitle: 'Keeps',
    cardDescription:
      'The most affordable way across the United States to get an expert-backed hair loss treatment plan',
    pageTitle: 'Keep your hair',
    tag: 'Healthcare',
    pageDescription:
      'The most affordable way across the United States to get an expert-backed hair loss treatment plan',
    introduction:
      'The ThirtyMadison project is a service that provides a subscription to medical care in the United States. Today, the company brings together three brands on its platform that address three health issues. The first of the brands was launched at the beginning of 2018, the next two did not take long to wait and started in the beginning and middle of 2019. All brands are rapidly gaining popularity among users thanks to a well-thought-out interface and efficiently organized data processing process. Thanks to the coordinated work of several services, the platform makes the entire process of receiving medical care, from applying to receiving medications at home, invisible and convenient. The user is guaranteed to receive a personal approach to solving his problem, as well as constant support from highly qualified specialist doctors throughout the entire treatment.',
    url: 'https://keeps.com',
    role: 'Front-End developer',
    technologies: 'TypeScript, React, Apollo GraphQL, styled-components, styled-system, Cypress',
    image: keepsImg,
  },
  {
    id: 2,
    cardTitle: 'Tilly',
    cardDescription:
      'The platform matches families with like-minded therapists resulting in better care that helps children with autism, ADHD, anxiety and reach life-changing milestones faster',
    pageTitle: 'Life-changing care',
    tag: 'Healthcare',
    pageDescription:
      'Online platform matches families with like-minded therapists resulting in better care that helps children with autism, ADHD, anxiety and reach life-changing milestones faster',
    introduction:
      'Elemy is the nationwide provider of childhood mental healthcare and behavioral therapy in the US. Our platform matches families with like-minded therapists resulting in better care that helps children with conditions such as autism, ADHD, and anxiety & depression disorder learn new behaviors and reach life-changing milestones faster. Since launching in April 2020, Elemy has become one of the fastest-growing healthcare companies in the United States. The company has raised over $200M to date and is backed by some of the most prominent investors in healthcare and technology, including General Catalyst, Founders Fund, SoftBank, Goodwater, Bling Capital, and 8VC.',
    url: 'https://tillytherapy.com',
    role: 'Senior Front-End developer',
    technologies: 'TypeScript, React, GraphQL, styled-components',
    image: tillyImg,
  },
  {
    id: 3,
    cardTitle: 'CoverWallet',
    cardDescription:
      'CoverWallet identifies the insurance you need based on your specific business, get you a policy that fits your budget',
    pageTitle: 'Commercial Insurance',
    tag: 'Insurance',
    pageDescription:
      'CoverWallet identifies the insurance you need based on your specific business, get you a policy that fits your budget',
    introduction:
      'As a part of Aon, the global leaders in risk, retirement, and health solutions, CoverWallet works with small and medium-sized enterprises and startups. CoverWallet makes it easy for businesses to understand, buy and manage insurance, all online. The project started with a few people about 7 years ago and has been actively growing and developing all this time.',
    url: 'https://coverwallet.com',
    role: 'Senior Front-End developer',
    technologies: 'ES2015+, React, Redux, Moment, Lodash, Webpack, redux-thunk, redux-saga',
    image: coverwalletImg,
  },
  {
    id: 4,
    cardTitle: 'Popsa',
    cardDescription:
      'Design like a professional with automatic layouts. Create something beautifully unique in just 5 minutes.',
    pageTitle: 'Save the moment',
    tag: 'Lifestyle',
    pageDescription: 'Popsa is the easiest way to print your memories',
    introduction:
      "The easiest way to print your memories. Turn your favorite photos into beautiful photo books with Popsa, the world's fastest photo book app.",
    url: 'https://popsa.com',
    role: 'Senior Front-End developer',
    technologies: 'ES2015+, React, Redux, Moment, Lodash, Webpack, redux-thunk, redux-saga',
    image: popsaImg,
  },
]
