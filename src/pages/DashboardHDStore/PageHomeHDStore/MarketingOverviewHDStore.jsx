import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './MarketingOverviewHDStore.css'
import RenderOverviewHDStore from './RenderOverviewHDStore';


const MarketingOverviewHDStore = () => {
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
            
            <h1>Marketing Overview HDStore</h1>
            
            <div className="content">
               <RenderOverviewHDStore />
            </div>
        </div>
        </div>
    )

}

export default MarketingOverviewHDStore;