// pages/404.js
import Link from 'next/link';
import  '../styles/404.module.css';

export default function Custom404() {
  return (
   <div
     className="sigma_subheader dark-overlay dark-overlay-2"
     style={{
       backgroundImage:
         "url(https://vaidikanushthanam.in/static/img/subheader.jpg)"
     }}
   >
     <div className="container">
       <div className="sigma_subheader-inner">
         <div className="sigma_subheader-text">
           <h1>Page Not Found</h1>
         </div>
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
             <li className="breadcrumb-item">
               <a className="btn-link" href="/">
                 Home
               </a>
             </li>
             <li className="breadcrumb-item active" aria-current="page">
               Page Not Found
             </li>
           </ol>
         </nav>
       </div>
     </div>
   {/* partial */}
   {/* About Start */}
   <section className="section">
     <div className="container">
       <div className="row">
         <div className="col-md-6">
           <img
             src="https://vaidikanushthanam.in/assets/pages/33da17f4298ad8a8e19127d477a44527.jpg"
             style={{
               height: "100%",
               borderRadius: "1.7rem",
               paddingBottom: 10
             }}
             alt="ॐ गं गणपतयेः नमः "
             title="ॐ गं गणपतयेः नमः "
           />
         </div>
        
       </div>
      
             </div>
             </section>
             </div>

  );
}
