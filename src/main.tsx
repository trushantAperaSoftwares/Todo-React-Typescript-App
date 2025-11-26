
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodosProvider } from './Store/Todos.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  // </StrictMode>,
)
