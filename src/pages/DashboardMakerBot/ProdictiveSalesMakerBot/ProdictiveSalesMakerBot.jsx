import React, {useContext} from 'react'
import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import { Link }from 'react-router-dom'




import './ProdictiveSalesMakerBot.css'
import RenderProdictiveSalesMakerBot from './RenderProdictiveSalesMakerBot';


const ProdictiveSalesMakerBot = () => {
    const { setToken } = useContext(StoreContext);
    
 
    return (
        <div className="container-full">
        
        <div className="box-container-over">
            <div className="btn-box">
          
            
            <Link to="/dashboardMakerBot">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>

            <AiOutlineCloseSquare  className="btn-btn" onClick={() => setToken(null)} />
            </div>
            
            <h1>Prodictive Sales MakerBot</h1>
            
            <div className="content">
               <RenderProdictiveSalesMakerBot />
            </div>
        </div>
        </div>
    )

}

export default ProdictiveSalesMakerBot;