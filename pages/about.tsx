import Footer from "../components/Footer"
import Header from "../components/Header"

function about() {
  return (
<div>
      <Header />
      
     
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-10 lg:py">
       <h1>The Tech Walk is a Property of <span className='text-blue-400'>LeadcellB2B</span> Pvt. Ltd</h1>
       <h2>News, Tutorials, Articles and a lot more!</h2>
        </div>
   
      
        <Footer />
       </div>
       
      
  );
};

export default about
