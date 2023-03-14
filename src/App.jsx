import './App.css';
import { router } from './pages/index'
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store.js'

function App() {
  useEffect(() => {
    let url = `http://localhost:8080/api/auth/token`
    let token = localStorage.getItem('token')
    if (token) {
      let headers = { headers: { 'Authorization': `Bearer ${token}` } }
      axios.post(url, null, headers)
    }
  }, [])

  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
