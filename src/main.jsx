import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { App } from './App'
import { persistor, store } from './redux/store'
import { app } from './firebase/firebaseConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  /* <React.StrictMode> */
    <Provider store={store} app = {app}>
      <PersistGate loading="loading" persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  /* </React.StrictMode>, */
)
