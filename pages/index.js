import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <label>Name</label>
        <input name='name'/>
      <label>Phone</label>
        <input name='phone'/>
      <label>Message</label>
        <input name='msg'/>

      <button name='save'>Enregistrer</button>
    </div>
  )
}
