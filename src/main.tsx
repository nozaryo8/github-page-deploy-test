import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Introduce } from './pages/Introduce.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Introduce />
	</React.StrictMode>,
)
