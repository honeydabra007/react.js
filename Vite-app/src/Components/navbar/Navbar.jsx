
import '../navbar/navbar.css'
import img1 from '../../images/logo.svg'

const Navbar = () => {
  return (
    <div className='box'>
    <div className='box1'>
   <img src={img1} alt=''/>
    </div>
    <div className='box2'>
    <p>ABOUT</p>
    <p>SERVICES</p>
    <p>PORTFOLIO</p>
    <p>PRICING</p>
    <p>ARTICELS</p>
   
    
    <button>FREE MOCKUP</button>
    </div>
   

      
    </div>
  )
}

export default Navbar
