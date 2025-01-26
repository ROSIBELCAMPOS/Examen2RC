import logo from '../assets/img/logoLamb.jpg';
import car from '../assets/img/car1.jpg';


function Cabecera() {
  
  return (
    <div className='contenedor' >
      
      <header className="Header" > 
        <img className="car1" src={car}/>
        
        <nav className='navbar'>
          
          <a className="a" >Inicio</a>
          <a className="a" >Productos</a>
          <a className="a" >Contacto</a>
          
        </nav>
        
      </header>
      <img className="img" src={logo}/>
    </div>
    
    
      
    
  )
}

export default Cabecera
