
import '../App.css';
import logo from '../Imgaes/logo.png'
import { AiOutlineClose } from "react-icons/ai";
import {BiSolidDashboard,BiSolidWallet,BiDollar,BiSolidFile,BiSolidUser,BiSolidContact} from 'react-icons/bi'


function Sidebar(props) {
 
  function handleClose(){
    props.setbarStatus(false)
  }
 
  return (
    <div className={`sidebar ${props.barStatus ? "block" : " "}`}>
     <div className='title'>
       <img src={logo} alt='logo'/>
        {props.barStatus && <AiOutlineClose onClick={handleClose} className='close'/>}
     </div>
     <div className='menu'>
      <li><BiSolidDashboard/> <span>Dashboard</span></li>
      <li><BiSolidWallet/> <span>Accounts</span></li>
      <li><BiDollar/> <span>Payrolls</span></li>
      <li><BiSolidFile/> <span>Reports</span></li>
      <li><BiSolidUser/> <span>Advisor</span></li>
      <li><BiSolidContact/> <span>Contacts</span></li>
     </div>
    </div>
  ); 
}

export default Sidebar;
