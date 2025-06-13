import React from 'react';
import { FaBullseye, FaEye, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GiCow, GiFarmTractor } from 'react-icons/gi';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Section 1: Header + Intro */}
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-1">About Oriyon International</h2>
        <h3 className="text-center text-lg font-medium mb-6">who are we? what we stand for?</h3>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-1">Empowering Livestock Entrepreneurs, Transforming Communities</h4>
            <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-3"></div>
            <p className="mb-4">
              Oriyon International Limited is a pioneering organization dedicated to revolutionizing the livestock industry through sustainable production, innovative solutions, and inclusive economic empowerment. Our mission is to bridge the gap between traditional livestock farming and modern entrepreneurship by equipping individuals with the tools, knowledge, and resources needed to thrive in an ever-evolving agricultural landscape.
            </p>
            <div className='flex items-center justify-center'>
              <button className="mt-6 font-semibold bg-teal-100 text-black px-6 py-2 rounded hover:bg-teal-600 shadow-lg transition duration-300 ease-in-out">More About Us</button>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-teal-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 font-semibold justify-center mb-4"><FaBullseye /> Our Mission</div>
              <p className="mt-2 text-sm">We are committed to fostering sustainable growth, empowering underserved communities, and creating wealth through innovative livestock solution. By integrating advanced technologies and practical skills, we aim to develop a vibrant ecosystem where livestock entrepeneurs flourish.</p>
            </div>
            <div className="bg-black text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2 font-semibold justify-center mb-4"><FaEye /> Our Vision</div>
              <p className="mt-2 text-sm">To become a global leader in livestock production and empowerment by transforming lives, boosting economic growth, and setting a new standard for sustainability, inclusion, and global trade in agriculture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-center text-xl font-semibold mb-6">What We Do<br/>Oriyon International focuses on:</h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-100 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-red-500"><GiCow /></div>
                <h4 className="font-bold mt-2">Livestock Production:</h4>
                <p className="text-sm">Establishing breeding programs and implementing best practices for increased productivity</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-100 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-green-500"><GiFarmTractor /></div>
                <h4 className="font-bold mt-2">Processing and Value Addition:</h4>
                <p className="text-sm">Developing solutions for dairy, meat, hides, and biogas production to maximize resource utilization</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-100 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-blue-500"><FaEye /></div>
                <h4 className="font-bold mt-2">Global Trade Opportunities:</h4>
                <p className="text-sm">Ensuring every small holder farmer has access to global markets by producing and processing to international Standards</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-100 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-green-500"><GiFarmTractor /></div>
                <h4 className="font-bold mt-2">Integrated Ranch Development</h4>
                <p className="text-sm">Building a world-class, small ruminant ranch with integrated processing facilities...</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-100 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-blue-500"><FaEye /></div>
                <h4 className="font-bold mt-2">Economic Empowerment:</h4>
                <p className="text-sm">Providing resources, training, and market access for women, youth, and persons with disabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: International Standards */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-1 text-center">About Oriyon International</h3>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <img src="/path/to/your-image.jpg" alt="International Standards" className="w-full h-64 object-cover rounded" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Our Commitment to International Standards</h3>
            <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-3"></div>
            <p className="mb-4 text-sm">
              Oriyon International is dedicated to ensuring that all products produced by our network of traceable farmers and integrated ranch facilities meet the highest international standards. By adopting globally recognized best practices in production and processing, we enable smallholder farmers to compete in and access lucrative global markets. Our commitment ensures that every product from Oriyon’s network embodies quality, safety, and traceability, opening doors to international trade.
            </p>
            {/* <button className="flex items-center gap-2 bg-teal-100 text-white px-4 py-2 rounded">Next <FaArrowRight /></button> */}
          </div>
        </div>
      </section>

      {/* Section 4: Our Impact */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-1 text-center">About Oriyon International</h3>
        <h3 className="text-xl font-semibold mb-2 text-center">Our Impact</h3>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img src="/path/to/your-image.jpg" alt="Our Impact" className="w-full h-64 object-cover rounded" />
          <div>
            <h3 className="text-xl font-semibold mb-1">Oriyon International works tiredlessly to:</h3>
            <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-5"></div>
            <ul className="list-disc space-y-3 text-sm pl-4">           
              <li>Empower women and youth in agriculture through initiatives like EEWYLA (Economic Empowerment of Women and Youths in Livestock Agriculture).</li>
              <li>Promote sustainability and zero-waste practices that align with global environmental goals.</li>
              <li>Establish a traceable producer network, creating a platform for local farmers to trade internationally while ensuring fair value for their products.</li>
              <li>Build infrastructure that supports the entire value chain—from production to processing to distribution.</li>
            </ul>
            <div className="flex items-center gap-2 mt-6">
              {/* <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded"><FaArrowLeft /> Previous</button> */}
              {/* <button className="flex items-center gap-2 bg-teal-100 text-white px-4 py-2 rounded">Next <FaArrowRight /></button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Our Commitment */}
      <section className="py-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src="/path/to/your-image.jpg" alt="Our Commitment" className="w-full h-64 object-cover rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-1">Our Commitment</h3>
          <div className="w-1/2 h-0.5 rounded border-solid bg-[#ffd700] mb-3"></div>
          <p className="text-sm mb-4">
            At Oriyon International, we believe in inclusive growth, global opportunities, and lasting change through partnerships with organizations like Rumer.NG, government agencies, and international bodies, we ensure that our programs are impactful, transformative, and accessible to all.
          </p>
          <p className="text-sm mb-4">
            Join us in redefining livestock entrepreneurship and creating a brighter, more sustainable future for smallholder farmers and their communities. Together, we’re not just producing livestock—we’re building livelihoods and opening pathways to the world.
          </p>
          {/* <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded"><FaArrowLeft /> Previous</button> */}
          <Link to="/about-2">
          <button className="flex items-center gap-2 bg-teal-100 text-black px-4 py-2 rounded">Next <FaArrowRight /></button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
