import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'

import './TimeAccessLogitech.css'

import RenderTimeAccessLogitech from './RenderTimeAccessLogitech';


const TimeAccessLogitech= () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">

               <div className="btn-box-logitech">
                     <Link to="/dashboardLogitech">
                     <GoReply className="btn-btn">Voltar</GoReply>
                     </Link>

                      <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
              </div>
            
            <h1>Time Access Logitech</h1>
            
            <div className="content">
               <RenderTimeAccessLogitech />
            </div>
        </div>
        </div>
    )

}

export default TimeAccessLogitech;