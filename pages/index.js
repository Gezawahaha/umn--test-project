import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Loading from '../components/Loading'
import PelangarList from '../components/PelangarList'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [input, setInput] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const [pelanggar, setpelanggar] = useState([])

  const findDuplicate = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) !== index ? setpelanggar(e => [...e, {'noKtp': item}]) : '')
  }

  // const removeDuplicate = (sourceArr, pelangerArr) => {
  //   const removeMap = new Map(pelangerArr.map(entry => [entry.noKtp]));
  //   return sourceArr.filter(entry => {
  //       const match = removeMap.get(entry.noKtp);
  //       return !match || match !== entry.noKtp;
  //   });
  // }
  
  const temukanPelanggar = async (datas)=>{
    setpelanggar([])
    if(!input){
      
    }else{
      
      setisLoading(true)
      const datainput = await datas.replace(/[\s"]/g, '').split(',')
      const duplicateInput = await findDuplicate(datainput)
      setTimeout(() => {
        setisLoading(false)
      }, 3000);
    }

    
    // const newData = await removeDuplicate(datainput, duplicateInput)
    // const dataktp =  await fetch('https://wahaha-global-api.vercel.app/api/umn-test-api')
    // .then(response => response.json())
    // .then(res => res.data)
    
    return pelanggar
  }

  const handleChangeInput = (event) => {
    return setInput(event.target.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to duplicate data Checker
        </h1>

        <p className={styles.description}>
        Input No KTP, Jika lebih dari satu gunakan koma &quot; , &quot;
        </p>

        <div className={styles.grid}>

          {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Form Masukan Data</label>
          <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea> */}

          <textarea rows="9" cols="35" placeholder="e.g: 1234567, 98765321" onChange={e => handleChangeInput(e)}></textarea>
          <button type="submit" className={styles.btnSubmit} onClick={()=> temukanPelanggar(input)}>
            <span>Temukan KTP Pelanggar &rarr;</span>
          </button>
          <div className="flex flex-col justify-center items-center">

            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Data pelanggar</h2>
            {
              isLoading ? <Loading/> : <>{
                pelanggar.length === 0 ? <p>tidak ada data pelanggar</p> : <PelangarList data={pelanggar} />
              }</>
            }

          </div>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://gezamahardika.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by{' '}
          <span className={styles.logo}>
            <Image src="/Logo-gm-black.svg" alt="Vercel Logo" width={120} height={28} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
