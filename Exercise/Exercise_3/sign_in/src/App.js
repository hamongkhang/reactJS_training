import './App.css';
import SignInCpn from './SignInCpn/SignInCpn';
import SignUpCpn from './SignUpCpn/SignUpCpn';
import SignInHeaderButton from './Components/SignInHeaderButton/SignInHeaderButton';
import SignUpHeaderButton from './Components/SignUpHeaderButton/SignUpHeaderButton';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <div className='app'>
        <SignInHeaderButton />
        <SignUpHeaderButton />
        <Routes>
          <Route path='/SignIn' element={<SignInCpn />} />
          <Route path='/SignUp' element={<SignUpCpn />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;