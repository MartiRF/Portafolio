import './App.css'
import ProyectoCard from './components/ProyectoCard'

function App() {

  return (
    <div className="container flex flex-col">
      <h1 className='content-center text-5xl font-mono font-bold'>Portafolio</h1>
      <p className='text-start'><strong>Jose Martin Reyes Franco</strong></p>
      <p className='text-justify'>Aqui voy a poner mis proyecto que ire haciendo como desarrolador, para llevar un historial.</p>
      {/* //Proyectos */}
      <div className=''>
        <ProyectoCard title='Rick and Morty Memorama'deploy='https://memorama-rick-and-morty.netlify.app/' github='https://github.com/MartiRF/React-RickAndMorty-Memorama' />
        <ProyectoCard title='Pomodoro' deploy='https://martirf.github.io/pomodoro/' github='https://github.com/MartiRF/pomodoro'/>
      </div>
    </div>
  )
}

export default App
