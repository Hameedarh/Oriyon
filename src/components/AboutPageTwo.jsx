import React from 'react'
import { FaBullseye, FaEye, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutPageTwo() {
  return (
    <div>
        <div className="font-sans text-gray-800">
              {/* Section 1: Header + Intro */}
            <section className="px-4 py-10 max-w-6xl mx-auto">
                <h2 className="text-center text-xl font-semibold mb-1">About Oriyon International</h2>
                <h3 className="text-center text-lg font-medium mb-6">What is E.E.W.Y.L.A?</h3>
        
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-bold mb-1">About EEWYLA: Transforming Lives, One Herd at a Time</h4>
                        <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-3"></div>
                        <p className="mb-4">
                        The Economic Empowerment of Women and Youths in Livestock Agriculture (EEWYLA) is a groundbreaking initiative designed to create a real, lasting impact on the lives of women and youths across Nigeria. 
    launching in every state across Nigeria in collaboration with Rumer.NG, endorsed by the Federal Ministry of Livestock Development, Office of the Senior Special Assistant to the President on Special Needs and Equal Opportunities. EEWYLA aims to go beyond conventional training programs to deliver transformative empowerment.
                        </p>
                    </div>
                  <div className="space-y-8">
                    <div className="bg-teal-100 p-6 rounded-lg shadow-md">
                      <div className="flex items-center gap-2 font-semibold justify-center mb-4"><FaBullseye /> Our Mission</div>
                      <p className="mt-2 text-sm">At EEWYLA, we believe empowerment goes beyond skill acquisition. Our mission is to create successful entrepreneurs who are equipped not only with knowledge but with the tools, resources, and support they need to thrive in the livestock industry. This program is designed to produce resilient business owners who will drive economic growth, uplift their communities, and transform the livestock sector.</p>
                    </div>
                    <div className="bg-black text-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center gap-2 font-semibold justify-center mb-4"><FaEye /> Our Vision</div>
                      <img src="/path/to/your-image.jpg" alt="International Standards" className="w-full object-cover rounded" />
                    </div>
                  </div>
                </div>
            </section>
        
              {/* Section 3: International Standards */}
              <section className="py-10 max-w-6xl mx-auto px-4">
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                    <div>
                        <img src="/path/to/your-image.jpg" alt="International Standards" className="w-full h-64 object-cover rounded" />
                        <div>
                            <p className='text-justify mb-4 text-sm'>By the end of the program, participants leave not just trained but empowered, with everything needed to run a sustainable livestock business. EEWYLA stands out as a program that doesn’t just teach—it transforms.</p>
                        </div>
                    </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Why EEWYLA is Different</h3>
                    <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-3"></div>
                    <p className="my-2 text-sm">Unlike traditional programs that leave participants with just a certificate, EEWYLA delivers:</p>
                    <ul className="list-disc space-y-3 text-sm pl-4">           
                      <li>Free training and accredited certification to build knowledge and skills.</li>
                      <li>Starter goats and subsidized inputs to ensure immediate business readiness.</li>
                      <li>Comprehensive support from extension workers and guaranteed off-taker agreements to secure your products in the market.</li>
                      <li>A fully registered business entity, enabling participants to operate formally.</li>
                      <li>Ongoing support and mentorship throughout your entrepreneurial journey to help your business grow sustainably.</li>
                    </ul>
                    <Link to="/about">
                     <button className="flex items-center gap-2 bg-teal-100 text-black px-4 py-2 rounded my-4"><FaArrowLeft /> Previous</button> 
                    </Link>
                  </div>
                </div>
              </section>         
              <footer className="bg-gray-800 text-white py-6 text-center mt-12">
                <p>&copy; 2025 Oriyon International. All rights reserved.</p>
              </footer>
        </div>
    </div>
  )
}

export default AboutPageTwo