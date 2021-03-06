import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './CampaignOverviewSeagate.css'
import RenderCampaignOverviewSeagate from './RenderCampaignOverviewSeagate';


const CampaignOverviewSeagate = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
            
            
            <Link to="/dashboardSeagate">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Campaign Overview Seagate</h1>
            
            <div className="content">
               <RenderCampaignOverviewSeagate />
            </div>
        </div>
        </div>
    )

}

export default CampaignOverviewSeagate;