import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './CampaignOverviewLacie.css'
import RenderCampaignOverviewLacie from './RenderCampaignOverviewLacie';


const CampaignOverviewLacie = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
            
            
            <Link to="/dashboardLacie">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Campaign Overview Lacie</h1>
            
            <div className="content">
               <RenderCampaignOverviewLacie />
            </div>
        </div>
        </div>
    )

}

export default CampaignOverviewLacie;