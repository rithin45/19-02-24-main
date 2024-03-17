import './Topbar.css'
import './Home.css'
import { Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Ulog');
  };
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <p>PLOTKART</p>
        </div>
        <div className='topright'>
        <Button variant="contained" onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </div>
  )
}
export default Topbar