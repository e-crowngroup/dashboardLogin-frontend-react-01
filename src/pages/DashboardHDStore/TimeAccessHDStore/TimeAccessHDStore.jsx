import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './TimeAccessHDStore.css'
import RenderTimeAccessHDStore from './RenderTimeAccessHDStore';


const TimeAccessHDStore= () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardHDStore">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Time Access HDStore</h1>
            
            <div className="content">
               <RenderTimeAccessHDStore />
            </div>
        </div>
        </div>
    )

}

export default TimeAccessHDStore;