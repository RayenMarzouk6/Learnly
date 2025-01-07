
import About from './components/About' ;
import Hero from './components/Hero' ;
import LearnSection from './components/LearnSection' ;
import NavBar from './components/Navbar';
import Youtube from './components/Youtube/Youtube';
import './index.css'
import Course from './components/Courses/Course';
import { Route, Routes } from 'react-router';
import Document from './components/Document/Document';

import CourseDetail from './components/Courses/components/Course_Detail';
const App = () => {
  return (
    // <Router>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        {/* <BrowserRouter> */}
          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <About />
                <LearnSection />
              </>
            } />

            <Route path='/youtube' element={<Youtube />} />
            <Route path='/document' element={<Document />} />
            <Route path='/course' element={<Course />} />
            <Route path="/coursedetails/:id" element={<CourseDetail />} />

          </Routes>
        {/* </BrowserRouter> */}
        
        
      </main>
    // </Router>
  )
}

export default App 