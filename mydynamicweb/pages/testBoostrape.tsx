import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function testBoostrape() {
  return (
    <div className={styles.container}>
        <h1>Next.js</h1>
        <div className="p-3">
            <button type='button' className='btn btn-primary'>Primary</button>
            <button type='button' className='btn btn-Secondary'>Secondary</button>
            <button type='button' className='btn btn-success'>success</button>
            <button type='button' className='btn btn-danger'>danger</button>
            <button type='button' className='btn btn-warning'>warning</button>
            <button type='button' className='btn btn-info'>info</button>
            <button type='button' className='btn btn-light'>light</button>
            <button type='button' className='btn btn-dark'>dark</button>
            <button type='button' className='btn btn-link'>link</button>
        </div>
        <ul className='list-group'>
            <li className='list-group-item'> 1</li>
            <li className='list-group-item'> 2</li>
            <li className='list-group-item'> 3</li>
        </ul>
        

    </div>
  )
}
