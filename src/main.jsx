import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import './index.css'

import { store } from './CoponetswithRedyx/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
 <StrictMode >
<Provider store={store}>
  <App />
</Provider>
 </StrictMode>   
)

