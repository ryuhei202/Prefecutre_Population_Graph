import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Page404 } from './containers/Pages/Page404';
import { TopPage } from './containers/Pages/TopPage';

function App() {

return (
  <>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<TopPage />} />
       <Route path='*' element={<Page404 />} />
     </Routes>
    </BrowserRouter>
  </>
)
}

export default App;
