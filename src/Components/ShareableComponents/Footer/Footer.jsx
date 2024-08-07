
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoYoutube, BiLogoInstagramAlt, BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs'
import { motion } from "framer-motion";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import FooterlogoImg from '../../../../public/Logo.png'
const Footer = () => {

	return (
		<>
			<div className="w-full  h-full  pb-5 bg-transparent text-gray-700 px-5 bg-green-200  ">
				<div
					className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
					<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<img src={FooterlogoImg} alt=" main logo" className=" " />
						<p className="my-3 text-[16px] text-black mt-5 mb-10">Get the academic support you need with our dedicated tutoring services. Follow us on our Social Media platforms and never miss a beat.
						</p>

						<div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-2">
							
							<SocialIcon
								icon={<BiLogoFacebookCircle size={30} />}
								hoverIconSrc="https://img.icons8.com/fluent/30/000000/facebook-new.png"
								alt="Facebook"
								link="https://facebook.com"
							/>
							<SocialIcon
								icon={<BiLogoTwitter size={30} />}
								hoverIconSrc="https://img.icons8.com/fluent/30/000000/twitter.png"
								alt="Twitter"
								link="https://twitter.com"
							/>
							<SocialIcon
								icon={<BiLogoInstagramAlt size={30} />}
								hoverIconSrc="https://img.icons8.com/fluent/30/000000/instagram-new.png"
								alt="Instagram"
								link="https://instagram.com"
							/>
							<SocialIcon
								icon={<BiLogoLinkedinSquare size={30} />}
								hoverIconSrc="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
								alt="LinkedIn"
								link="https://linkedin.com"
							/>

						</div>
					</div>
					<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<h2 className=" mb-[18px]  text-black text-[18px] font-bold select-none">Quick Links</h2>
							<nav className="list-none mb-5">
								<ul className="flex flex-col gap-1 text-black">
									<a className="hover:underline" href="">
										<li>Our Services</li>
									</a>
									<Link to='/help' className="hover:underline" href="">
										<li>Help</li>
									</Link>
									<Link to='/aboutus' className="hover:underline" href="">
										<li>About Us </li>
									</Link>
									<a className="hover:underline" href="">
										<li>FAQ</li>
									</a>
									<a className="hover:underline" href="">
										<li>Career</li>
									</a>

									<a className="hover:underline" href="">
										<li>Privacy Policy</li>
									</a>
									<a className="hover:underline" href="">
										<li>Terms of Use </li>
									</a>


								</ul>
							</nav>
						</div>

						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<Link to='/contact_us' className='font-bold text-lg '>Contact Us</Link>

							<nav className="list-none mt-3 mb-10">
								<ul className="flex flex-col gap-[10px] text-black">
									<a className="hover:underline" href="#">
										<li>(02) 9158 8497</li>
									</a>
									<a className="hover:underline" href="#">
										<li>info@krazyit.com</li>
									</a>
									<a className="hover:underline" href="#">
										<li>Suite no - 25, 4th Floor, Bhuiyan Mansion, 6 Motijheel C/A, Dhaka - 1000, Bangladesh
										</li>
									</a>
								</ul>
							</nav>
						</div>
						<div className="lg:w-2/6 md:w-1/2 w-full px-6">
							<h2 className="mb-[18px]  text-black text-[18px] font-bold select-none">Newsletter</h2>
							<nav className="list-none mb-10">

								<ul className="flex flex-col gap-[10px] text-black">

									<p>Subscribe to our newsletter to stay<br /> up to date on everything Tutor2u
									</p>



									<div >


										<form>
											<label className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
											<div className="relative">
												<div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none">

												</div>
												<input type="email" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border  rounded-lg bg-white " placeholder="Email..." required />
												<button type="submit" className=" absolute right-3.5 bottom-1.5 border-2 border-[#2c6777] rounded-full p-0.5">
													<BsSendFill size={15} color='#2c6777' />
												</button>
											</div>
										</form>


									</div>



								</ul>
							</nav>
						</div>

					</div>
				</div>

			</div>
			<div className="bg-green-400">
				<div className="container  py-4 px-5 flex justify-center flex-wrap flex-col sm:flex-row">
					<p className="text-white  text-sm text-center ">Copyright © 2023 Tutor2U ABN Number 20611064601</p>
				</div>
			</div>
		</>
	)
}

export default Footer