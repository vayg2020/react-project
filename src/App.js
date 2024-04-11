import './App.css';
import About from './pages/About';
import Footer from './pages/Footer';
import Missing from './pages/Missing';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom';
import Header from './pages/Header';
import Nav from './Nav';
import EditPost from './pages/EditPost';
import { DataProvider } from './context/DataContext';

function App() {
  
  
  return (
    <div className="App">
    <DataProvider>
     <Header title="VAYG Social Network"/>
      <Nav/ >
      <Routes>
     <Route path='/' element={<Home />}/> 
    <Route path='*' element={<Missing/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/post'>
        <Route index element={<NewPost />}/>
        <Route path=":id" element={<PostPage/>}/>
       </Route>
    <Route path="/edit/:id" element={<EditPost />}/>
  </Routes>
  <Footer/>
  </DataProvider>
    </div>
  );
}

export default App;
