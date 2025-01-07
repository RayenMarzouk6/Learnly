
const HeroDoc = () => {
  return (

         <header className='w-full flex justify-center item-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>

          {/* <img src={logo} alt="sumz_logo" className='w-28 object-contain'/> */}

          {/* <button
            type='button'
            onClick={()=>window.open('https://rayenmarzouk.netlify.app/')}
            className='black_btn'
            >
              Rayen Mrzouk
          </button> */}
        </nav>


        <h1 className='head_text'>
          Summarize Articles with <br className='max-md:hidden'/>
          <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        {/* <h2 className='desc flex justify-end'>
          simplify your reading with summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
        </h2> */}
    </header>

  )
}

export default HeroDoc