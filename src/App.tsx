import './App.css'
import ProyectoCard from './components/ProyectoCard'

function App() {

  return (
    <div className="container flex flex-col">
      <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
        <h1 className='text-3xl font-bold sm:text-4xl'>Portafolio</h1>
        <p className='text-3xl font-bold sm:text-4xl'><strong>Jose Martin Reyes Franco</strong></p>
        <p className='mt-4'>Aqui voy a poner mis proyecto que ire haciendo como desarrolador, para llevar un historial.</p>
      </div>
      {/* //Proyectos */}
      <div className='mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
        <ProyectoCard title='Rick and Morty Memorama'deploy='https://memorama-rick-and-morty.netlify.app/' github='https://github.com/MartiRF/React-RickAndMorty-Memorama' />
        <ProyectoCard title='Pomodoro' deploy='https://pomodoro-martidev.netlify.app' github='https://github.com/MartiRF/pomodoro'/>
        <ProyectoCard title='Vacunacion CSS' deploy='https://martirf.github.io/vacunacionCSS_MisionFrontEnd/' github='https://github.com/MartiRF/vacunacionCSS_MisionFrontEnd' />
      </div>
    </div>
  )
}

export default App
