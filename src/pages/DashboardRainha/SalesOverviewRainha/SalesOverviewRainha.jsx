import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './SalesOverviewRainha.css'
import RenderSalesOverviewRainha from './RenderSalesOverviewRainha';


const SalesOverviewRainha = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardRainha">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Sales Overview Rainha</h1>
            
            <div className="content">
               <RenderSalesOverviewRainha />
            </div>
        </div>
        </div>
    )

}

export default SalesOverviewRainha;