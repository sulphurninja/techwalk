import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							The Tech<span className="text-amber-300">Walk</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" href="https://www.instagram.com/thetechwalk/" />
							
							<FaLinkedin className="text-2xl cursor-pointer hover:text-amber-600" href='https://www.linkedin.com/company/leadcellb2b/' />
							
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						
						
						
							<p className='font-bold'>
								Address:
								<p>
							Headquarters –105, Complex City, Dehuroad,
							 <p>Pune-412101. MH, INDIA </p>
							
						
<p>
Phone : (303) 800-6353
<p>
Cell : +91 9011911666
</p>

Email – contactus@leadcellb2b.com
</p>
</p>
</p>

						
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
						<a href="/about" className="text-gray-500 text-md pb-2 font-semibold hover:text-amber-600 cursor-pointer" >
							About
						</a>
						
						<li className="text-gray-500  text-md pb-2 font-semibold hover:text-amber-300 cursor-pointer">
							Work for us
						</li>
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<a href="https://www.leadcellb2b.com" className="text-gray-500 text-md pb-2 font-semibold hover:text-amber-600 cursor-pointer">

				
				<h1 className=" text-gray-800 font-semibold">
					© 2022 All rights reserved | LeadcellB2B
					
				</h1>
				</a>
			</div>
    </div>
  )
}

export default Footer
