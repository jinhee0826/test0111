import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Home.module.css'


const About = () => {
const [text, setText] = useState();
const onChange = (e) => {
  setText(e.target.value);
};

  return ( 
      <div className={styles.main}>
        <div className={styles.aboutdiv}>
        <h1> About 페이지 입니다 </h1>
        <p>아래 input에 값을 넣으면 값이 바뀝니다</p>
        <p>:{text}</p>
        <input onChange={onChange}
        type="text"></input>
        <Link href='/'>Main 페이지로 이동</Link>
        </div>
      </div>


  );
}

export default About;