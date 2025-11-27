
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvider } from './Store/Todos.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>

    <BrowserRouter>
      <Toaster position="top-center" />
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  // </StrictMode>,
)
