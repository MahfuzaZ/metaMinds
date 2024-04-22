
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componenets/Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Context from './utils/Context';
import Users from './pages/Users/voice-chatbot'
import Trivia from './pages/Trivial';


function App() {
  return (
    <div className="App">
      <Context>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<Users />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='/trivia' element={<Trivia/>}/>
          </Routes>
        </Layout>
      </Context>
    </div>
  )
}

export default App;
