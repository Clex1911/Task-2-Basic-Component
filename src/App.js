// const App = () => {
//   return (
//     <div className="App">
//       <h3>helo</h3>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from './Pages/Products';
import Users from './Pages/Users';
import Homepage from './Pages/Homepage'
import DetailPage from './Pages/DetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Products' element={<Products />} />
        <Route path='/DetailPage' element={<DetailPage />} />
        <Route path='/Users' element={<Users/> } />
      </Routes>
    </Router>
  );
}

export default App;
