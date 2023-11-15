
import '../App.css';
import { FiSearch,FiMenu } from 'react-icons/fi';
import { BiSolidBell } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import LineChart  from './LineChart';
import BarFirst from './Bar'
import BarSec  from './BarSec';
import Table from './Table'


function Hero(props) {

function handleBar(){
  props.setbarStatus(true)
}
  return (
   
    <div className="hero">
       <header>
        <div className='bar'>
          <FiMenu className='bar-icon'onClick={handleBar}/>
        </div>
        <div className='content'>
            <div className='search-box'>
              <FiSearch className='s-icon'/>
                <input type='text'className='search'/>
              
            </div>

            <BiSolidBell/>
            <div className='profile'>
                
            </div>
            <BiSolidDownArrow/>
        </div>
       </header>

       <div className='row-one'>
       
          <LineChart />
       
          <BarFirst />

       </div>

       <div className='row-two'>
       <BarSec />
       
       <Table />
    </div>
   </div>
  );
}

export default Hero;
