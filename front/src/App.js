import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Student from './Student';
import CreateStudent from './CreateStudent';
import Update from './Updatestudent';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student />}/>
        <Route path='/create' element={<CreateStudent/>}/>
        <Route path='/Update/:id' element={<Update />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
