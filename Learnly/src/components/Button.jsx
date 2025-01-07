import { FaBookReader } from "react-icons/fa"

const Button = ({text , custemStyle , id}) => {
  return (
    <a href={id}>
    <button className={custemStyle}>
      {text} <FaBookReader/> 
    </button>
    </a>
  )
}

export default Button