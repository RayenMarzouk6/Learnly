import Demo from "./Demo"
import '../../componentsStyle/Document.css' ;
import HeroDoc from "./HeroDoc";

const Document = () => {
  return (
    <main>
      <div className='main'>
        <div className="gradient" />
      </div>

      <div className='app'>
        <HeroDoc />
        <Demo />
      </div>
    </main>
  )
}

export default Document