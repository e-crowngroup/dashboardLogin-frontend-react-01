import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './MarketingOverviewNvidia.css'
import RenderOverviewNvidia from './RenderOverviewNvidia';


const MarketingOverviewNvidia = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardNvidia">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Marketing Overview Nvidia</h1>
            
            <div className="content">
               <RenderOverviewNvidia />
            </div>
        </div>
        </div>
    )

}

export default MarketingOverviewNvidia;