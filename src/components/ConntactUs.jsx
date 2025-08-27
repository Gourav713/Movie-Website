import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: "ri-customer-service-2-fill",
      title: "24/7 Support",
      description: "Get instant help from our support team",
      contact: "support@moviezpoint.com",
      action: "Email Now",
    },
    {
      icon: "ri-phone-fill",
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
    },
    {
      icon: "ri-chat-3-fill",
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 24/7",
      action: "Start Chat",
    },
    {
      icon: "ri-map-pin-fill",
      title: "Visit Us",
      description: "Come to our headquarters",
      contact: "123 Entertainment St, LA",
      action: "Get Directions",
    },
  ];

  const faqItems = [
    {
      question: "How can I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
    },
    {
      question: "What devices are supported?",
      answer:
        "We support smartphones, tablets, computers, smart TVs, and streaming devices like Roku and Chromecast.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "Go to Account Settings > Subscription > Cancel Subscription. You'll retain access until your current billing period ends.",
    },
    {
      question: "Can I download content for offline viewing?",
      answer:
        "Yes, premium subscribers can download select movies and shows for offline viewing on mobile devices.",
    },
  ];

  const departments = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "billing", label: "Billing & Payments" },
    { value: "content", label: "Content Issues" },
    { value: "business", label: "Business Partnership" },
    { value: "feedback", label: "Feedback & Suggestions" },
  ];

  return (
    <div className="min-h-screen min-w-screen bg-[#1f1e24] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6556CD] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#8b7ae6] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl mb-8 shadow-2xl">
              <i className="ri-customer-service-fill text-3xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're here to help! Reach out to us through any of the channels
              below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-2xl p-6 border border-zinc-700/50 hover:border-[#6556CD]/50 transition-all duration-300 hover:transform hover:-translate-y-2 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300">
                    <i className={`${method.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {method.description}
                  </p>
                  <p className="text-[#6556CD] font-medium mb-4">
                    {method.contact}
                  </p>
                  <button className="w-full px-4 py-2 bg-[#6556CD]/20 border border-[#6556CD]/30 rounded-lg text-[#6556CD] font-medium hover:bg-[#6556CD] hover:text-white transition-all duration-300">
                    {method.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1f1e24] to-[#252431] rounded-2xl p-8 border border-zinc-700/50">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252431] border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252431] border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252431] border border-zinc-700 rounded-lg text-white focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20 transition-all duration-300"
                      >
                        <option value="">Select a category</option>
                        {departments.map((dept, index) => (
                          <option key={index} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#252431] border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20 transition-all duration-300"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-[#252431] border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20 transition-all duration-300 resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] text-white rounded-lg font-bold hover:shadow-lg hover:shadow-[#6556CD]/20 transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="ri-send-plane-fill mr-2"></i>
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          category: "",
                          message: "",
                        })
                      }
                      className="px-8 py-4 bg-[#252431] border border-zinc-700 text-gray-300 rounded-lg font-bold hover:border-[#6556CD] hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <i className="ri-refresh-line mr-2"></i>
                      Clear Form
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-check-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                  <div className="text-sm text-gray-400">
                    This form will reset automatically in a few seconds...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-2xl border border-zinc-700/50 overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#2a2835] transition-colors duration-300">
                      <h3 className="text-lg font-semibold text-white group-open:text-[#6556CD] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <i className="ri-arrow-down-s-line text-xl text-gray-400 group-open:rotate-180 transition-transform duration-300"></i>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours & Location */}
      <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Business Hours */}
            <div className="bg-gradient-to-br from-[#1f1e24] to-[#252431] rounded-2xl p-8 border border-zinc-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-time-fill text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/30">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-medium">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/30">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-medium">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/30">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-white font-medium">
                    12:00 PM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Holidays</span>
                  <span className="text-red-400 font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-[#6556CD]/10 rounded-lg border border-[#6556CD]/20">
                <div className="flex items-center">
                  <i className="ri-information-fill text-[#6556CD] mr-3"></i>
                  <p className="text-sm text-gray-300">
                    <strong className="text-[#6556CD]">24/7 Support:</strong>{" "}
                    Online chat and email support available round the clock
                  </p>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-gradient-to-br from-[#1f1e24] to-[#252431] rounded-2xl p-8 border border-zinc-700/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-xl flex items-center justify-center mr-4">
                  <i className="ri-map-pin-fill text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Headquarters
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    123 Entertainment Boulevard
                    <br />
                    Suite 456
                    <br />
                    Los Angeles, CA 90210
                    <br />
                    United States
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="flex-1 px-4 py-3 bg-[#6556CD] text-white rounded-lg font-medium hover:bg-[#7c6bd3] transition-colors duration-300 flex items-center justify-center">
                    <i className="ri-navigation-fill mr-2"></i>
                    Get Directions
                  </button>
                  <button className="flex-1 px-4 py-3 bg-[#252431] border border-zinc-700 text-gray-300 rounded-lg font-medium hover:border-[#6556CD] hover:text-white transition-all duration-300 flex items-center justify-center">
                    <i className="ri-map-2-fill mr-2"></i>
                    View on Map
                  </button>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center">
                  <i className="ri-parking-box-fill text-green-400 mr-3"></i>
                  <p className="text-sm text-gray-300">
                    <strong className="text-green-400">Free Parking:</strong>{" "}
                    Visitor parking available in our building garage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter */}
      <div className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Follow us on social media for the latest updates and entertainment
            news
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: "ri-twitter-fill", name: "Twitter", followers: "125K" },
              { icon: "ri-facebook-fill", name: "Facebook", followers: "89K" },
              {
                icon: "ri-instagram-fill",
                name: "Instagram",
                followers: "156K",
              },
              { icon: "ri-youtube-fill", name: "YouTube", followers: "234K" },
              { icon: "ri-linkedin-fill", name: "LinkedIn", followers: "45K" },
              { icon: "ri-discord-fill", name: "Discord", followers: "67K" },
            ].map((social, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl flex items-center justify-center mb-3 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300 cursor-pointer group-hover:transform group-hover:scale-110">
                  <i className={`${social.icon} text-2xl text-white`}></i>
                </div>
                <p className="text-white font-medium text-sm">{social.name}</p>
                <p className="text-gray-400 text-xs">
                  {social.followers} followers
                </p>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] rounded-2xl p-8 border border-zinc-700/50">
              <h3 className="text-xl font-bold text-white mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Get the latest movies, shows, and platform updates
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-[#1f1e24] border border-zinc-700 rounded-l-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] text-white rounded-r-lg font-medium hover:shadow-lg hover:shadow-[#6556CD]/20 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
