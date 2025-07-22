import React from "react";
import BlurText from "../components/BlurText";
import Particles from '../components/Particles';
import { Link, useNavigate } from 'react-router-dom';
import WorldMap from '../components/WorldMap';
import blogData from "../data/blogs";
import DarkVeil from '/src/components/Darkveil';
import "../index.css";
import { Phone } from 'lucide-react'; 

const Home = () => {
  const navigate = useNavigate();

  const topics = [
  {
    id: 5,
    title: "🧒 Nutrition",
    description: "Nourish Little Bodies, Grow Bright Futures.",
    link: "/nutrition",
  },
  {
    id: 2,
    title: "🛡️ Cyber Scam Warning",
    description: "Stay informed about current cyber threats targeting children.",
    link: "/cybersecurity",
  },
  {
    id: 3,
    title: "📰 News & Updates",
    description: "Latest news including POCSO updates and child safety reforms.",
    link: "/blogs-news",
  },
  {
    id: 4,
    title: "📞 Emergency Contacts",
    description: "Find urgent child helpline numbers like 1098, 112, etc.",
    link: "/emergency",
  },
  {
    id: 1,
    title: "⚖️ Legal Resources",
    description: "Learn about POCSO, JJ Act, and other child protection laws.",
    link: "/legal-resources",
  },
  {
    id: 6,
    title: "📚 Child Safety Education",
    description: "Guides for physical safety, abuse prevention, and awareness.",
    link: "/child-safety",
  },
];

  return (
    
    <div className="bg-blue-50 text-gray-800]">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-10 px-12 text-center min-h-[700px] flex items-end justify-center"
        style={{
          backgroundImage: "url('./src/images/Children.png')", // Image
        }}>
        
        {/* Content above background */}
        <div className="relative z-10 text-">
          <BlurText
            text="Ensuring Every Child’s Safety, Care & Bright Future"
            delay={300}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => console.log('Hero animation done')}
            className="text-7xl md:text-7xl font-bold text-white pl-10 mb-4 text-center"
          />

          <BlurText
            text="Learn how to protect and nurture children physically, emotionally, and digitally with the right laws and safety resources."
            delay={300}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => console.log('Hero animation done')}
            className="text-2xl md:text-2xl font-medium text-white pl-10 max-w-12xl mx-auto"
          />
        </div>
      </section>

      {/* Quick Access Cards */}
    <section className="relative w-full h-auto py-5 px-6 overflow-hidden bg-gray-200">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#093FB4', '#FFFCFB', '#FFD8D8', '#ED3500']}
          particleCount={2000}
          particleSpread={40}
          speed={0.3}
          particleBaseSize={500}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Cards */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Explore Safety Resources
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-13 pl-13 pr-13">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-blue-50 border rounded-4xl shadow-md p-6 hover:shadow-2xl transition backdrop-blur-sm bg-opacity-80">
              <h3 className="text-lg font-bold text-blue-900 mb-2">{topic.title}</h3>
              <p className="text-sm text-blue-800 mb-4">{topic.description}</p>
              <Link
                to={topic.link}
                className="inline-block text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Interactive Infographics */}
      <section className="py-10 px-6">
        <WorldMap />
      </section>

      {/* What's New */}
  <section className="relative py-2 px-4 bg-transparent overflow-hidden ">
  <div className="absolute inset-0 z-0 w-full h-full">
    <DarkVeil />
  </div>
  <div className="relative z-10 max-w-[90%] mx-auto">
  <h2 className="text-2xl font-bold text-white text-center py-2">What’s New</h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-15">
      {blogData.slice(0, 4).map((blog) => (
    <div
      key={blog.id}
      onClick={() => navigate(`/blogs-news/${blog.slug}`)} 
      className="bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition-all"
    >
      <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-blue-800 font-semibold">{blog.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.excerpt}</p>
      </div>
    </div>
  ))}
  </div>

  <div className="mt-6 text-center">
    <Link
      to="/blogs-news"
      className="inline-block text-sm font-medium text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md transition"
    >
      View All Blogs
    </Link>
  </div>
  </div>
</section>


      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white text-center py-6 mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} Child Care Initiative. All Rights Reserved.</p>
      </footer> */}
      <footer className="bg-blue-900 text-white py-8">
  <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-6 text-sm">
    
    {/* About */}
    <div>
      <h3 className="font-semibold mb-2 text-lg">About Us</h3>
      <p className="text-gray-300">
        We are dedicated to ensuring every child's safety and awareness through laws, education, and digital tools.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/legal-resources" className="hover:underline">Legal Resources</a></li>
        <li><a href="/blogs-news" className="hover:underline">Blogs & News</a></li>
        <li><a href="/emergency" className="hover:underline">Emergency Contacts</a></li>
        <li><a href="/child-safety" className="hover:underline">Safety Education</a></li>
      </ul>
    </div>

    {/* Contact & Social */}
    <div>
      <h3 className="font-semibold mb-2 text-lg">Contact</h3>
      <p>Email: <a href="mailto:help@childcare.org" className="underline">help@childcare.org</a></p>
      <p>Phone: 1098 (Childline)</p>
      <div className="mt-3 flex space-x-4">
        <a href="#" className="hover:text-blue-300">Facebook</a>
        <a href="#" className="hover:text-blue-300">Twitter</a>
        <a href="#" className="hover:text-blue-300">YouTube</a>
      </div>
    </div>
  </div>

  <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} Child Care Initiative. All Rights Reserved.
  </div>
</footer>
      
      {/* Emergency Floating Button */}
<button
  onClick={() => navigate('/emergency')}
  className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all"
  title="Emergency Contacts"
>
  <Phone className="w-6 h-6" />
</button>

    </div>
  );
  
};

export default Home;
