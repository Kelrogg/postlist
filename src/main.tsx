import './index.scss'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { AllInOneProvider } from './app/providers'

createRoot(document.getElementById('root')!).render(
    <AllInOneProvider>
        <App />
    </AllInOneProvider>

)