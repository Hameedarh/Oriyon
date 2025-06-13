import React from 'react';
import { FaBullseye, FaEye, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { GiCow, GiFarmTractor } from 'react-icons/gi';
import { MdOutlineEmojiPeople } from 'react-icons/md';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Section 1: Header + Intro */}
      <section className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-1">About Oriyon International</h2>
        <h3 className="text-center text-lg font-medium mb-6">who are we? what we stand for?</h3>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Empowering Livestock Entrepreneurs, Transforming Communities</h4>
            <p className="mb-4">
              Oriyon International Limited is a pioneering organization dedicated to revolutionizing the livestock industry through sustainable production, innovative solutions, and inclusive economic empowerment. Our mission is to bridge the gap between traditional livestock farming and modern entrepreneurship by equipping individuals with the tools, knowledge, and resources needed to thrive in an ever-evolving agricultural landscape.
            </p>
            <button className="mt-6 font-semibold bg-teal-500 text-black px-6 py-2 rounded hover:bg-teal-600 shadow-lg transition duration-300 ease-in-out">More About Us</button>
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
              <div className="text-center p-4 bg-teal-500 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-red-500"><GiCow /></div>
                <h4 className="font-bold mt-2">Livestock Production:</h4>
                <p className="text-sm">Establishing breeding programs and implementing best practices for increased productivity</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-500 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-green-500"><GiFarmTractor /></div>
                <h4 className="font-bold mt-2">Processing and Value Addition:</h4>
                <p className="text-sm">Developing solutions for dairy, meat, hides, and biogas production to maximize resource utilization</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-500 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-blue-500"><FaEye /></div>
                <h4 className="font-bold mt-2">Global Trade Opportunities:</h4>
                <p className="text-sm">Ensuring every small holder farmer has access to global markets by producing and processing to international Standards</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-500 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-green-500"><GiFarmTractor /></div>
                <h4 className="font-bold mt-2">Integrated Ranch Development</h4>
                <p className="text-sm">Building a world-class, small ruminant ranch with integrated processing facilities...</p>
              </div>
            </div>
            <div className='w-3/12'>
              <img src="/path/to/your-image.jpg" alt="Integrated Ranch Development" className="w-full h-48 object-cover" />
              <div className="text-center p-4 bg-teal-500 rounded shadow flex flex-col items-center mb-2 justify-center">
                <div className="text-3xl text-blue-500"><FaEye /></div>
                <h4 className="font-bold mt-2">Economic Empowerment:</h4>
                <p className="text-sm">Providing resources, training, and market access for women, youth, and persons with disabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: International Standards */}
      <section className="py-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src="/path/to/your-image.jpg" alt="International Standards" className="w-full h-64 object-cover rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Commitment to International Standards</h3>
          <p className="mb-4 text-sm">
            Oriyon International ensures that all products from its traceable farmers and ranches meet the highest international standards...
          </p>
          <button className="flex items-center gap-2 bg-teal-400 text-white px-4 py-2 rounded">Next <FaArrowRight /></button>
        </div>
      </section>

      {/* Section 4: Our Impact */}
      <section className="py-10 max-w-6xl mx-auto px-4">
        <h3 className="text-xl font-semibold text-center mb-6">Our Impact</h3>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <img src="/path/to/your-image.jpg" alt="Our Impact" className="w-full h-64 object-cover rounded" />
          <ul className="list-disc space-y-3 text-sm pl-4">
            <li>Empower women and youth in agriculture through EEWYLA...</li>
            <li>Promote sustainability and zero-waste practices...</li>
            <li>Establish a traceable producer network...</li>
            <li>Build infrastructure from production to processing...</li>
          </ul>
        </div>
        <div className="flex justify-between mt-8">
          <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded"><FaArrowLeft /> Previous</button>
          <button className="flex items-center gap-2 bg-teal-400 text-white px-4 py-2 rounded">Next <FaArrowRight /></button>
        </div>
      </section>

      {/* Section 5: Our Commitment */}
      <section className="py-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src="/path/to/your-image.jpg" alt="Our Commitment" className="w-full h-64 object-cover rounded" />
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
          <p className="text-sm mb-4">
            Oriyon International believes in inclusive growth, global opportunities, and long-term impact through partnerships...
          </p>
          <button className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded"><FaArrowLeft /> Previous</button>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p>&copy; 2025 Oriyon International. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
