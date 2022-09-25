
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import StudentInformation from './components/StudentInformation';
import TeachersInformation from './components/TeachersInformation';
import Result from './Result';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/student__Information' element={<StudentInformation />} />
          <Route path='/Teacher__information' element={<TeachersInformation />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
