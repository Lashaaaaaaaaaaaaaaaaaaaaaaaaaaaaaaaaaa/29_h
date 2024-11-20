import Router  from './router/Router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { routes } from './router/routes';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <>
    
      {/* <Navbar routes={routes} isVertical={true}/> */}

      <AuthProvider>
        <Router />
      </AuthProvider>

    </>
  );
}

export default App;
