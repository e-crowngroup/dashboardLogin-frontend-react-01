import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import StoreContext from 'components/Store/Context';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GoReply } from 'react-icons/go'

import './DashboardTopper.css';





const PagesDashboard = () => {
  const { setToken } = useContext (StoreContext);
  return (
    <div className="pages-dashboard">

      <div className="container-dash">
      <div className="btn-home">
      <Link to="/">
            <GoReply className="btn-btn">Voltar</GoReply>
            </Link>
      
      <AiOutlineCloseSquare className="btn-exit" onClick={() => setToken(null)} />
      </div>
  

        <div className="content-dash">
          <div className="title">
            <h2>Business Plataform | Topper</h2>
          </div>

          <div className="box-container">
            <div className="box-content marketing">

                <Link className="text-link" >
                <h3>Marketing Overview</h3>
                </Link>
              
            </div>

            <div className="box-content">
              <Link className="text-link" to="/timeAccessTopper">
              <h3>Time Access</h3>
              </Link>
                
            
           </div>
           <div className="box-content">
               <Link className="text-link" to="/campaignOverviewTopper">
                 <h3>Campaign Overview </h3>
               </Link>
           </div>

            <div className="box-content">
                <Link className="text-link" to="/demographyTopper">
                  <h3>Demography</h3>
                  </Link>
           </div>
            
          </div>


          <div className="box-container">
            <div className="box-content">
            <Link className="text-link" to="/salesOverviewTopper">
            <h3>Sales Overview</h3>
            </Link>

            </div>
            <div className="box-content">
            <Link className="text-link" to="/timeSalesTopper">
            <h3>Time Sales</h3>
            </Link>
           </div>

           <div className="box-content">
         
           <h3>Product Selling</h3>
        
           </div>

            <div className="box-content">
            <Link className="text-link" to="/prodictiveSalesTopper">
            <h3>Prodictive Sales</h3>
            </Link>
           </div>
            
          </div>

          <div className="box-container">
            <div  className="box-content">
          
            <h3>Stock Overview</h3>
           
            </div>

            <div className="box-content">
          
            <h3>Aging Control</h3>
           
           </div>

           <div className="box-content">
           
           <h3>Stock X Sales</h3>
           
           </div>

            <div className="box-content">
            
            <h3>Prodictive Stock</h3>
           
           </div>
            
          </div>

          

        </div>
        <div className="box-container">
        
            <div className="box-content">
           
            <h3>Price Shopping</h3>
            
           </div>
            
          </div>
        <br />
      </div>
    
     
    </div>
  );
};

export default PagesDashboard;
