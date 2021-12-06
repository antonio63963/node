import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h2>Some footer</h2>
      <ul>
        <li>link 1</li>
        <li>link 1</li>
        <li>link 1</li>
        <li>link 1</li>
      </ul>
    </footer>
  )
}