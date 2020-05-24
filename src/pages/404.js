import React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import "../styles/notfound.scss";

const NotFound = () => {
    return (
       <Layout>
           <div className="not-found">
               <div className="not-found-main-content">
                    <h3>Sorry, we can't find the page you are looking for.</h3>
               </div>
                <Footer/>
           </div>
       </Layout>
    );
}

export default NotFound;