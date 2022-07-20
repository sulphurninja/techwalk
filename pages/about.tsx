import Footer from "../components/Footer"
import Header from "../components/Header"

function about() {
  return (
<div>
      <Header />
      
     
      <div className="flex justify-between items-center bg-slate-100 border-y border-black py-10 lg:py">
       <h1>The Tech Walk is a Property of <span className='text-blue-400'>LeadcellB2B</span> Pvt. Ltd</h1>
       <h2>News, Tutorials, Articles and a lot more!</h2>
         <article>
  The TechWalk is a B2B Lead generation company. Our extensive lead generation techniques utilize data, B2B email marketing, cold calling and tele-marketing automation to drive high ROI for marketing and technology clients. As a full-service B2B demand generation agency, we offer end to end B2B Lead Generation services- Whitepaper Dissemination, Content Syndication and Account Based Marketing solutions and much more. Also, we offer wider coverage to your content across millions of Technology readers who you could generate, nurture, and convert leads to revenue. Our sole purpose is to support you and stick to our commitments, to not just satisfy, but exceed your opportunity. We believe in fun and professional working environment as well as enabling us to provide on-going development opportunities for our talented team. With our team of experts, we ensure that no matter where you may be, you are provided with the best of services that help you move towards successful business growth
  </article>
        </div>
 
      
        <Footer />
       </div>
       
      
  );
};

export default about
