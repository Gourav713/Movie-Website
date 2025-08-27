import React from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

function About() {
  const navigate = useNavigate();
  const features = [
    {
      icon: "ri-movie-2-fill",
      title: "Vast Movie Library",
      description:
        "Access over 50,000+ movies from classic films to the latest blockbusters across all genres.",
    },
    {
      icon: "ri-tv-fill",
      title: "Premium TV Shows",
      description:
        "Stream 15,000+ TV series including exclusive content, documentaries, and original productions.",
    },
    {
      icon: "ri-hd-fill",
      title: "High Quality Streaming",
      description:
        "Enjoy content in HD, Full HD, and 4K resolution with crystal clear audio quality.",
    },
    {
      icon: "ri-device-fill",
      title: "Multi-Device Support",
      description:
        "Watch anywhere, anytime on your smartphone, tablet, laptop, or smart TV.",
    },
    {
      icon: "ri-user-heart-fill",
      title: "Personalized Experience",
      description:
        "Get recommendations based on your viewing history and personal preferences.",
    },
    {
      icon: "ri-shield-check-fill",
      title: "Safe & Secure",
      description:
        "Your data is protected with industry-standard encryption and privacy measures.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Movies", icon: "ri-movie-fill" },
    { number: "15K+", label: "TV Shows", icon: "ri-tv-2-fill" },
    { number: "500K+", label: "Episodes", icon: "ri-play-circle-fill" },
    { number: "1M+", label: "Happy Users", icon: "ri-user-smile-fill" },
  ];

  const teamMembers = [
    {
      name: "Gourav Raj verma",
      role: "Frontend Developer",
      image: profileImg,
      description:
        "A passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. Currently building projects and sharpening DSA in Java.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1f1e24] text-white overflow-x-hidden">
      {/* Back Button */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-black/30 hover:bg-black/50 rounded-lg backdrop-blur-sm text-white font-medium transition-all duration-200 mb-4"
        >
          <i className="ri-arrow-left-line text-xl"></i>
          Back
        </button>
      </div>
      {/* Hero Section */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#6556CD] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-[#8b7ae6] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-to-tr from-[#6556CD] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl mb-8 shadow-2xl">
              <i className="ri-movie-2-fill text-3xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              About Moviez Point
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your ultimate destination for premium entertainment. We're
              revolutionizing how you discover, watch, and experience movies and
              TV shows from around the world.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-2xl p-6 border border-zinc-700/50 hover:border-[#6556CD]/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300">
                    <i className={`${stat.icon} text-white text-xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              At Moviez Point, we believe that great entertainment should be
              accessible to everyone. We're committed to providing a seamless,
              high-quality streaming experience that connects people with the
              stories they love, from anywhere in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-[#6556CD]/20 border border-[#6556CD]/30 rounded-full text-[#6556CD] font-medium">
                Global Content
              </span>
              <span className="px-6 py-3 bg-[#6556CD]/20 border border-[#6556CD]/30 rounded-full text-[#6556CD] font-medium">
                Premium Quality
              </span>
              <span className="px-6 py-3 bg-[#6556CD]/20 border border-[#6556CD]/30 rounded-full text-[#6556CD] font-medium">
                User Experience
              </span>
              <span className="px-6 py-3 bg-[#6556CD]/20 border border-[#6556CD]/30 rounded-full text-[#6556CD] font-medium">
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Why Choose Moviez Point?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for millions of
              entertainment enthusiasts worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-2xl p-8 border border-zinc-700/50 hover:border-[#6556CD]/50 transition-all duration-300 hover:transform hover:-translate-y-2 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300">
                    <i className={`${feature.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Meet Our Developer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individual behind Moviez Point, working tirelessly
              to bring you the best entertainment experience.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://linkedin.com/in/gouravraj-verma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-sm text-center group no-underline"
              title="View LinkedIn Profile"
            >
              <div className="bg-gradient-to-br from-[#1f1e24] to-[#252431] rounded-2xl p-8 border border-zinc-700/50 hover:border-[#6556CD]/50 transition-all duration-300 hover:transform hover:-translate-y-2 mx-auto cursor-pointer">
                <div className="w-32 h-32 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300 overflow-hidden">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-cover rounded-full border-2 border-[#6556CD] shadow"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-[#6556CD] font-medium mb-4">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-300 text-base leading-relaxed">
                  {teamMembers[0].description}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Values</h2>
              <p className="text-xl text-gray-300">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-heart-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  User First
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every decision we make is centered around delivering the best
                  possible experience for our users.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-rocket-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Innovation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We constantly push boundaries to bring you cutting-edge
                  features and technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-shield-check-fill text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Trust</h3>
                <p className="text-gray-300 leading-relaxed">
                  We maintain the highest standards of security and privacy to
                  earn and keep your trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of users who have made Moviez Point their go-to
            entertainment destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#6556CD] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
              <i className="ri-play-fill mr-2"></i>
              Start Watching Now
            </button>
            <button className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center">
              <i className="ri-question-line mr-2"></i>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-[#1a1920] py-12 border-t border-zinc-700/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white font-bold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center justify-center md:justify-start">
                  <i className="ri-mail-fill mr-2 text-[#6556CD]"></i>
                  gouravpatel344@gmail.com
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <i className="ri-phone-fill mr-2 text-[#6556CD]"></i>
                  +91 62695-73188
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-300">
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Help Center</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="w-10 h-10 bg-[#6556CD] rounded-lg flex items-center justify-center hover:bg-[#7c6bd3] transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white"></i>
                </div>
                <div className="w-10 h-10 bg-[#6556CD] rounded-lg flex items-center justify-center hover:bg-[#7c6bd3] transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </div>
                <a
                  href="https://www.instagram.com/gxurav7_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#6556CD] rounded-lg flex items-center justify-center hover:bg-[#7c6bd3] transition-colors cursor-pointer"
                  title="Instagram"
                >
                  <i className="ri-instagram-fill text-white"></i>
                </a>
                <a
                  href="https://linkedin.com/in/gouravraj-verma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#6556CD] rounded-lg flex items-center justify-center hover:bg-[#7c6bd3] transition-colors cursor-pointer"
                  title="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-700/50 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Moviez Point. All rights reserved. Made with ❤️ for
              entertainment lovers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
