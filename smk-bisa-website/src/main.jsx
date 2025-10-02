import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SimpleApp from './SimpleApp.jsx'

// Use SimpleApp if you want to see all content without animations
// Change App to SimpleApp below if content is not showing
const AppToUse = App;

// Mark document as JS-enabled early to ensure CSS reveal works
document.documentElement.classList.add('js-enabled')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppToUse />
  </StrictMode>,
)
