import s from './title.module.css'

function Title({text}) {
  return (
    <p className={s.title}>{text}</p>
  )
}

export default Title