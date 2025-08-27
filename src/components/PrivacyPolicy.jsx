import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const sections = [
    { id: "overview", title: "Overview", icon: "ri-eye-line" },
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: "ri-database-line",
    },
    {
      id: "usage",
      title: "How We Use Your Information",
      icon: "ri-settings-line",
    },
    { id: "sharing", title: "Information Sharing", icon: "ri-share-line" },
    { id: "cookies", title: "Cookies & Tracking", icon: "ri-cookie-line" },
    { id: "security", title: "Data Security", icon: "ri-shield-check-line" },
    { id: "rights", title: "Your Rights", icon: "ri-user-settings-line" },
    { id: "children", title: "Children's Privacy", icon: "ri-parent-line" },
    { id: "changes", title: "Policy Changes", icon: "ri-refresh-line" },
    { id: "contact", title: "Contact Us", icon: "ri-mail-line" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
            >
              <i className="ri-arrow-left-line text-2xl"></i>
              <span className="text-lg font-medium">Back</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-white text-lg"></i>
              </div>
              <h1 className="text-2xl font-bold">Privacy Policy</h1>
            </div>

            <div className="text-sm text-gray-400">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h2 className="text-lg font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <i className="ri-list-check-line text-purple-400"></i>
                  Table of Contents
                </h2>

                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-purple-600 text-white shadow-lg"
                          : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                      }`}
                    >
                      <i className={`${section.icon} text-lg`}></i>
                      <span className="text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-12">
              {/* Overview Section */}
              <section
                id="overview"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <i className="ri-eye-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Overview</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Welcome to MovieHub. We respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website and
                    use our services.
                  </p>

                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <i className="ri-information-line text-blue-400 text-xl mt-0.5"></i>
                      <div>
                        <h3 className="font-semibold text-blue-300 mb-2">
                          Important Note
                        </h3>
                        <p className="text-sm text-blue-200">
                          By using our service, you agree to the collection and
                          use of information in accordance with this policy. We
                          will not use or share your information with anyone
                          except as described in this Privacy Policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section
                id="information-collection"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <i className="ri-database-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Information We Collect
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-green-300 mb-4 flex items-center gap-2">
                      <i className="ri-user-line"></i>
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-green-400"></i>
                        Name and email address
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-green-400"></i>
                        Profile information
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-green-400"></i>
                        Preferences and settings
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-green-400"></i>
                        Communication history
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                      <i className="ri-bar-chart-line"></i>
                      Usage Data
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-blue-400"></i>
                        Browsing activity
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-blue-400"></i>
                        Device information
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-blue-400"></i>
                        IP address and location
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-check-line text-blue-400"></i>
                        Performance metrics
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Usage */}
              <section
                id="usage"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                    <i className="ri-settings-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    How We Use Your Information
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-orange-600/20 border border-orange-500/30 rounded-xl p-4 text-center">
                      <i className="ri-rocket-line text-3xl text-orange-400 mb-3"></i>
                      <h3 className="font-semibold text-orange-300 mb-2">
                        Service Improvement
                      </h3>
                      <p className="text-sm text-gray-300">
                        Enhance user experience and platform features
                      </p>
                    </div>

                    <div className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 text-center">
                      <i className="ri-heart-line text-3xl text-purple-400 mb-3"></i>
                      <h3 className="font-semibold text-purple-300 mb-2">
                        Personalization
                      </h3>
                      <p className="text-sm text-gray-300">
                        Provide personalized recommendations and content
                      </p>
                    </div>

                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
                      <i className="ri-notification-line text-3xl text-blue-400 mb-3"></i>
                      <h3 className="font-semibold text-blue-300 mb-2">
                        Communication
                      </h3>
                      <p className="text-sm text-gray-300">
                        Send updates, notifications, and support messages
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section
                id="sharing"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <i className="ri-share-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Information Sharing
                  </h2>
                </div>

                <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <i className="ri-shield-check-line text-red-400 text-2xl mt-0.5"></i>
                    <div>
                      <h3 className="font-semibold text-red-300 mb-2">
                        We Do Not Sell Your Data
                      </h3>
                      <p className="text-red-200">
                        We do not sell, trade, or otherwise transfer your
                        personal information to third parties for marketing
                        purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    We may share information only in these cases:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-green-400 text-lg mt-0.5"></i>
                      <span>
                        <strong>Service Providers:</strong> With trusted
                        partners who help us operate our service
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-green-400 text-lg mt-0.5"></i>
                      <span>
                        <strong>Legal Requirements:</strong> When required by
                        law or to protect rights and safety
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-green-400 text-lg mt-0.5"></i>
                      <span>
                        <strong>Business Transfers:</strong> In case of merger,
                        acquisition, or sale of assets
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Cookies & Tracking */}
              <section
                id="cookies"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                    <i className="ri-cookie-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Cookies & Tracking Technologies
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance
                    your experience, analyze usage, and provide personalized
                    content.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-yellow-600/20 border border-yellow-500/30 rounded-xl p-4">
                      <h3 className="font-semibold text-yellow-300 mb-2 flex items-center gap-2">
                        <i className="ri-settings-3-line"></i>
                        Essential Cookies
                      </h3>
                      <p className="text-sm text-gray-300">
                        Required for basic site functionality and security
                      </p>
                    </div>

                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                      <h3 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                        <i className="ri-bar-chart-line"></i>
                        Analytics Cookies
                      </h3>
                      <p className="text-sm text-gray-300">
                        Help us understand how you use our service
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section
                id="security"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Data Security
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-300">
                      Security Measures
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center gap-2">
                        <i className="ri-lock-line text-green-400"></i>
                        SSL/TLS encryption for data transmission
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-database-2-line text-green-400"></i>
                        Secure data storage with encryption at rest
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-user-settings-line text-green-400"></i>
                        Access controls and authentication
                      </li>
                      <li className="flex items-center gap-2">
                        <i className="ri-eye-line text-green-400"></i>
                        Regular security audits and monitoring
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6">
                    <div className="text-center">
                      <i className="ri-shield-star-line text-4xl text-green-400 mb-3"></i>
                      <h3 className="font-semibold text-green-300 mb-2">
                        Industry Standards
                      </h3>
                      <p className="text-sm text-gray-300">
                        We follow industry best practices and comply with major
                        security frameworks to protect your data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section
                id="rights"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <i className="ri-user-settings-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Your Rights</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "ri-eye-line",
                      title: "Access",
                      desc: "Request access to your personal data",
                    },
                    {
                      icon: "ri-pencil-line",
                      title: "Rectification",
                      desc: "Correct inaccurate information",
                    },
                    {
                      icon: "ri-delete-bin-line",
                      title: "Deletion",
                      desc: "Request deletion of your data",
                    },
                    {
                      icon: "ri-download-line",
                      title: "Portability",
                      desc: "Export your data in a portable format",
                    },
                    {
                      icon: "ri-hand-heart-line",
                      title: "Consent",
                      desc: "Withdraw consent at any time",
                    },
                    {
                      icon: "ri-spam-line",
                      title: "Object",
                      desc: "Object to data processing",
                    },
                  ].map((right, index) => (
                    <div
                      key={index}
                      className="bg-purple-600/20 border border-purple-500/30 rounded-xl p-4 text-center"
                    >
                      <i
                        className={`${right.icon} text-2xl text-purple-400 mb-2`}
                      ></i>
                      <h3 className="font-semibold text-purple-300 mb-1">
                        {right.title}
                      </h3>
                      <p className="text-xs text-gray-300">{right.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Children's Privacy */}
              <section
                id="children"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                    <i className="ri-parent-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Children's Privacy
                  </h2>
                </div>

                <div className="bg-pink-600/20 border border-pink-500/30 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <i className="ri-shield-user-line text-pink-400 text-2xl mt-0.5"></i>
                    <div>
                      <h3 className="font-semibold text-pink-300 mb-2">
                        Protection for Minors
                      </h3>
                      <p className="text-pink-200 mb-3">
                        Our service is not intended for children under 13. We do
                        not knowingly collect personal information from children
                        under 13.
                      </p>
                      <p className="text-sm text-gray-300">
                        If you are a parent or guardian and believe your child
                        has provided us with personal information, please
                        contact us immediately so we can delete such
                        information.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Changes */}
              <section
                id="changes"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center">
                    <i className="ri-refresh-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Policy Changes
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last updated" date.
                  </p>

                  <div className="bg-cyan-600/20 border border-cyan-500/30 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <i className="ri-notification-3-line text-cyan-400 text-xl"></i>
                      <div>
                        <h3 className="font-semibold text-cyan-300 mb-1">
                          Stay Informed
                        </h3>
                        <p className="text-sm text-cyan-200">
                          We recommend reviewing this policy periodically for
                          any changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section
                id="contact"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <i className="ri-mail-line text-2xl text-white"></i>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Contact Us</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl p-6">
                      <h3 className="font-semibold text-blue-300 mb-4 flex items-center gap-2">
                        <i className="ri-customer-service-line"></i>
                        Get in Touch
                      </h3>
                      <div className="space-y-3 text-gray-300">
                        <div className="flex items-center gap-3">
                          <i className="ri-mail-line text-blue-400"></i>
                          <span>gouravpatel344@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <i className="ri-phone-line text-blue-400"></i>
                          <span>+91 62675-59226</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <i className="ri-map-pin-line text-blue-400 mt-0.5"></i>
                          <span>
                            Paliwal Multi
                            <br />
                            Indore City, Madhya Pradesh
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-200 mb-4">
                        Response Time
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">
                            General Inquiries:
                          </span>
                          <span className="text-white font-medium">
                            24-48 hours
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Data Requests:</span>
                          <span className="text-white font-medium">
                            7-14 days
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Urgent Issues:</span>
                          <span className="text-white font-medium">
                            Same day
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 MovieHub. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                Cookie Policy
              </button>
              <button className="text-gray-400 hover:text-purple-400 transition-colors">
                Support
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
