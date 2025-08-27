import React, { useState } from "react";

function TermsAndServices() {
  const [activeSection, setActiveSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const termsData = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: "ri-check-double-line",
      content: `By accessing and using Moviez Point ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

      These Terms of Service ("Terms") govern your use of our website located at moviezpoint.com (the "Service") operated by Moviez Point ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.`,
    },
    {
      id: "eligibility",
      title: "User Eligibility",
      icon: "ri-user-check-line",
      content: `To use Moviez Point, you must:
      
      • Be at least 18 years of age or have parental consent
      • Provide accurate and complete registration information
      • Maintain the security of your account credentials
      • Have the legal capacity to enter into these Terms
      • Comply with all applicable laws and regulations
      
      Parental consent is required for users under 18. Parents and guardians are responsible for monitoring their children's use of the Service.`,
    },
    {
      id: "account",
      title: "Account Registration & Security",
      icon: "ri-shield-user-line",
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for any activities that occur under your account.

      Account Security:
      • Use strong, unique passwords
      • Do not share your account credentials
      • Notify us immediately of any unauthorized access
      • Keep your contact information updated
      • Log out from shared devices
      
      We reserve the right to suspend or terminate accounts that violate these terms or show suspicious activity.`,
    },
    {
      id: "subscription",
      title: "Subscription & Billing",
      icon: "ri-bank-card-line",
      content: `Moviez Point offers various subscription plans with different features and pricing. By subscribing, you agree to pay all applicable fees and charges.

      Billing Terms:
      • Subscriptions are billed in advance on a recurring basis
      • Payment is due immediately upon subscription
      • Auto-renewal can be disabled in account settings
      • All fees are non-refundable except where required by law
      • Price changes will be communicated 30 days in advance
      
      Free trial periods may be offered at our discretion. Credit card information is required even for free trials.`,
    },
    {
      id: "content",
      title: "Content & Intellectual Property",
      icon: "ri-copyright-line",
      content: `All content on Moviez Point, including movies, TV shows, graphics, logos, and software, is protected by copyright and other intellectual property laws.

      Content Usage:
      • Content is licensed, not sold, to you
      • Personal, non-commercial use only
      • No downloading, copying, or distribution without permission
      • Content availability may vary by region
      • We reserve the right to modify or remove content
      
      User-Generated Content:
      • You retain rights to content you create
      • By posting, you grant us a license to use your content
      • You're responsible for ensuring you have rights to post content`,
    },
    {
      id: "usage",
      title: "Acceptable Use Policy",
      icon: "ri-shield-check-line",
      content: `You agree to use Moviez Point responsibly and in accordance with these terms.

      Prohibited Activities:
      • Sharing account credentials with others
      • Using automated systems to access the service
      • Attempting to bypass geographic restrictions
      • Reverse engineering or tampering with our systems
      • Uploading malicious software or code
      • Harassment or abuse of other users
      • Commercial use without authorization
      
      Violation of these terms may result in account suspension or termination without refund.`,
    },
    {
      id: "privacy",
      title: "Privacy & Data Protection",
      icon: "ri-lock-line",
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information.

      Data Practices:
      • We collect minimal necessary information
      • Your data is encrypted and securely stored
      • We don't sell personal information to third parties
      • You can request data deletion at any time
      • Cookies are used to enhance your experience
      
      By using our Service, you consent to our data practices as described in our Privacy Policy.`,
    },
    {
      id: "termination",
      title: "Account Termination",
      icon: "ri-close-circle-line",
      content: `Either party may terminate the subscription at any time.

      Termination by You:
      • Cancel anytime through account settings
      • Access continues until the end of current billing period
      • No refunds for unused portions
      
      Termination by Us:
      • We may suspend or terminate accounts for violations
      • We'll provide notice when possible
      • Refunds may be provided at our discretion
      
      Upon termination, your right to use the Service ceases immediately.`,
    },
    {
      id: "disclaimers",
      title: "Disclaimers & Limitations",
      icon: "ri-error-warning-line",
      content: `The Service is provided "as is" without warranties of any kind.

      Service Availability:
      • We strive for 99.9% uptime but don't guarantee it
      • Scheduled maintenance may cause temporary interruptions
      • Content availability may change without notice
      
      Limitation of Liability:
      • Our liability is limited to the amount you've paid us
      • We're not liable for indirect or consequential damages
      • Some jurisdictions don't allow these limitations
      
      You use the Service at your own risk.`,
    },
    {
      id: "changes",
      title: "Changes to Terms",
      icon: "ri-file-edit-line",
      content: `We reserve the right to modify these Terms at any time.

      Change Process:
      • We'll notify you of material changes via email or website notice
      • Changes take effect 30 days after notification
      • Continued use constitutes acceptance of new terms
      • You may terminate your account if you disagree with changes
      
      It's your responsibility to review these Terms periodically for updates.`,
    },
    {
      id: "governing",
      title: "Governing Law & Disputes",
      icon: "ri-scales-line",
      content: `These Terms are governed by the laws of the State of California, United States.

      Dispute Resolution:
      • We encourage informal resolution through customer support
      • Binding arbitration for disputes over $500
      • Small claims court option available
      • Class action waiver applies where legally permitted
      
      Any legal proceedings must be filed within one year of the dispute arising.`,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: "ri-customer-service-2-line",
      content: `If you have questions about these Terms, please contact us:

      Moviez Point Legal Department
      123 Entertainment Boulevard, Suite 456
      Los Angeles, CA 90210
      United States
      
      Email: legal@moviezpoint.com
      Phone: +1 (555) 123-4567
      Business Hours: Monday-Friday, 9 AM - 6 PM PST
      
      For general support inquiries, please use our regular support channels.`,
    },
  ];

  const filteredTerms = termsData.filter(
    (term) =>
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickLinks = [
    {
      title: "Account & Billing",
      id: "subscription",
      icon: "ri-bank-card-line",
    },
    { title: "Privacy & Security", id: "privacy", icon: "ri-lock-line" },
    { title: "Content Usage", id: "content", icon: "ri-copyright-line" },
    { title: "Contact Us", id: "contact", icon: "ri-customer-service-2-line" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-[#1f1e24] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#6556CD] to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#8b7ae6] to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-2xl mb-8 shadow-2xl">
              <i className="ri-file-text-line text-3xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Please read these Terms of Service carefully before using Moviez
              Point. By using our service, you agree to be bound by these terms.
            </p>
            <div className="text-sm text-gray-400 bg-[#252431] rounded-lg p-4 inline-block">
              <i className="ri-calendar-line mr-2"></i>
              Last updated: January 15, 2024 • Version 2.1
            </div>
          </div>

          {/* Search & Quick Links */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] rounded-2xl p-6 border border-zinc-700/50 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search terms and conditions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#1f1e24] border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:border-[#6556CD] focus:outline-none focus:ring-2 focus:ring-[#6556CD]/20"
                  />
                </div>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-3 bg-[#6556CD] text-white rounded-lg font-medium hover:bg-[#7c6bd3] transition-colors duration-300 flex items-center"
                >
                  <i className="ri-refresh-line mr-2"></i>
                  Clear
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-xl p-4 border border-zinc-700/50 hover:border-[#6556CD]/50 transition-all duration-300 hover:transform hover:-translate-y-1 text-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-[#6556CD]/20 transition-all duration-300">
                    <i className={`${link.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-white font-semibold text-sm">
                    {link.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-gradient-to-r from-[#252431] to-[#1f1e24] py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {termsData.map((term, index) => (
                <button
                  key={term.id}
                  onClick={() => scrollToSection(term.id)}
                  className="flex items-center p-3 bg-[#1f1e24] rounded-lg border border-zinc-700/50 hover:border-[#6556CD]/50 hover:bg-[#2a2835] transition-all duration-300 text-left group"
                >
                  <div className="w-8 h-8 bg-[#6556CD]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#6556CD]/30 transition-colors duration-300">
                    <i className={`${term.icon} text-[#6556CD] text-sm`}></i>
                  </div>
                  <div>
                    <span className="text-white font-medium text-sm">
                      {index + 1}. {term.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredTerms.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-[#6556CD]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-search-line text-[#6556CD] text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No results found
                </h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or browse all sections above.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-3 bg-[#6556CD] text-white rounded-lg font-medium hover:bg-[#7c6bd3] transition-colors duration-300"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredTerms.map((term, index) => (
                  <section key={term.id} id={term.id} className="scroll-mt-20">
                    <div className="bg-gradient-to-br from-[#252431] to-[#1f1e24] rounded-2xl border border-zinc-700/50 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] rounded-xl flex items-center justify-center mr-4">
                            <i
                              className={`${term.icon} text-white text-xl`}
                            ></i>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">
                              {index + 1}. {term.title}
                            </h2>
                          </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                            {term.content}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-700/50">
                          <div className="flex items-center text-sm text-gray-400">
                            <i className="ri-time-line mr-2"></i>
                            Section {index + 1} of {termsData.length}
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                if (index > 0) {
                                  scrollToSection(termsData[index - 1].id);
                                }
                              }}
                              disabled={index === 0}
                              className="px-4 py-2 bg-[#6556CD]/20 text-[#6556CD] rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6556CD]/30 transition-colors duration-300"
                            >
                              <i className="ri-arrow-up-line mr-1"></i>
                              Previous
                            </button>
                            <button
                              onClick={() => {
                                if (index < termsData.length - 1) {
                                  scrollToSection(termsData[index + 1].id);
                                }
                              }}
                              disabled={index === termsData.length - 1}
                              className="px-4 py-2 bg-[#6556CD]/20 text-[#6556CD] rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#6556CD]/30 transition-colors duration-300"
                            >
                              Next
                              <i className="ri-arrow-down-line ml-1"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary & Actions */}
      <div className="bg-gradient-to-r from-[#6556CD] to-[#8b7ae6] py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Agreement Summary
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            By using Moviez Point, you agree to these terms and conditions.
            We're committed to providing you with the best streaming experience
            while protecting your rights and privacy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold mb-2">Your Rights</h3>
              <p className="text-white/80 text-sm">
                Protected access to content with privacy and security guaranteed
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold mb-2">
                Your Responsibilities
              </h3>
              <p className="text-white/80 text-sm">
                Use the service responsibly and respect intellectual property
                rights
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-white text-xl"></i>
              </div>
              <h3 className="text-white font-bold mb-2">Our Commitment</h3>
              <p className="text-white/80 text-sm">
                Delivering quality content with excellent customer support
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-[#6556CD] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <i className="ri-question-line mr-2"></i>
              Have Questions?
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-8 py-4 bg-white/20 text-white border border-white/30 rounded-xl font-bold hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
            >
              <i className="ri-arrow-up-line mr-2"></i>
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-[#1a1920] py-8 border-t border-zinc-700/50">
        <div className="container mx-auto px-6 text-center">
          <div className="text-gray-400 text-sm space-y-2">
            <p>
              These Terms of Service are effective as of January 15, 2024 and
              were last updated on the same date.
            </p>
            <p>
              For previous versions of these terms or legal inquiries, contact:
              legal@moviezpoint.com
            </p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <span className="flex items-center">
                <i className="ri-shield-check-line text-green-400 mr-2"></i>
                Legally Compliant
              </span>
              <span className="flex items-center">
                <i className="ri-global-line text-blue-400 mr-2"></i>
                International Standards
              </span>
              <span className="flex items-center">
                <i className="ri-lock-line text-purple-400 mr-2"></i>
                Privacy Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndServices;
