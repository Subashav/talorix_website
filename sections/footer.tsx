"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import talorixLogo from "../assets/talorix_logo.png";

type ModalType = "privacy" | "terms" | "cookies" | null;

export default function FooterSection() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const closeModal = () => setOpenModal(null);

  return (
    <footer className="bg-[#0F0F0F] border-t border-gray-900 py-16 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <Link href="/">
              <div className="cursor-pointer hover:opacity-80 transition-opacity mb-4">
                <Image
                  src={talorixLogo}
                  alt="Talorix Logo"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </Link>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              AI-powered hiring platform for startups and SMEs.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a href="https://x.com/talorix_jobs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-[#FF8C00] flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/talorix" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-[#FF8C00] flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com/talorix" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-[#FF8C00] flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/talorix.jobs/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-[#FF8C00] flex items-center justify-center transition-colors group">
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-semibold text-white mb-4">Navigation</div>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/" className="hover:text-[#FF8C00] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FF8C00] transition-colors">About</Link></li>
              <li><Link href="/features" className="hover:text-[#FF8C00] transition-colors">Features</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF8C00] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-white mb-4">Legal</div>
            <ul className="space-y-2 text-gray-500">
              <li>
                <button 
                  onClick={() => setOpenModal("privacy")} 
                  className="hover:text-[#FF8C00] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setOpenModal("terms")} 
                  className="hover:text-[#FF8C00] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setOpenModal("cookies")} 
                  className="hover:text-[#FF8C00] transition-colors text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 text-center">
          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} Talorix. All rights reserved.
          </div>
        </div>
      </div>

      {/* Modals */}
      {openModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1A1A1A] rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1A1A1A] border-b border-gray-800 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {openModal === "privacy" && "Privacy Policy"}
                {openModal === "terms" && "Terms of Service"}
                {openModal === "cookies" && "Cookie Settings"}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 text-gray-300">
              {openModal === "privacy" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Introduction</h3>
                    <p className="leading-relaxed">
                      At Talorix, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered hiring platform.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
                    <p className="leading-relaxed mb-3">We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personal identification information (Name, email address, phone number)</li>
                      <li>Professional information (Resume, work history, skills)</li>
                      <li>Account credentials and preferences</li>
                      <li>Communication data when you contact us</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
                    <p className="leading-relaxed mb-3">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide and maintain our hiring platform services</li>
                      <li>Match candidates with appropriate job opportunities</li>
                      <li>Improve and personalize your experience</li>
                      <li>Communicate with you about our services</li>
                      <li>Ensure platform security and prevent fraud</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
                    <p className="leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
                    <p className="leading-relaxed mb-3">You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to data processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                    <p className="leading-relaxed">
                      If you have questions about this Privacy Policy, please contact us at privacy@talorix.com
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 pt-4 border-t border-gray-800">
                    Last updated: March 2, 2026
                  </div>
                </div>
              )}

              {openModal === "terms" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Agreement to Terms</h3>
                    <p className="leading-relaxed">
                      By accessing and using Talorix, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Use License</h3>
                    <p className="leading-relaxed mb-3">
                      Permission is granted to temporarily access Talorix for personal, non-commercial use. This license does not include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Modifying or copying the materials</li>
                      <li>Using the materials for any commercial purpose</li>
                      <li>Attempting to reverse engineer any software</li>
                      <li>Removing any copyright or proprietary notations</li>
                      <li>Transferring the materials to another person</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">User Responsibilities</h3>
                    <p className="leading-relaxed mb-3">As a user, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Not engage in any fraudulent or malicious activities</li>
                      <li>Respect the intellectual property rights of others</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
                    <p className="leading-relaxed">
                      We strive to provide reliable service but do not guarantee that the platform will be available at all times. We may temporarily suspend access for maintenance or updates without prior notice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                    <p className="leading-relaxed">
                      Talorix shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Modifications</h3>
                    <p className="leading-relaxed">
                      We reserve the right to modify these terms at any time. We will notify users of any material changes, and continued use of the service constitutes acceptance of the updated terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
                    <p className="leading-relaxed">
                      These terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions.
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 pt-4 border-t border-gray-800">
                    Last updated: March 2, 2026
                  </div>
                </div>
              )}

              {openModal === "cookies" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h3>
                    <p className="leading-relaxed">
                      Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Types of Cookies We Use</h3>
                    
                    <div className="space-y-4 mt-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                        <p className="leading-relaxed">
                          These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">Performance Cookies</h4>
                        <p className="leading-relaxed">
                          These cookies collect information about how visitors use our website, helping us improve performance and user experience.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">Functional Cookies</h4>
                        <p className="leading-relaxed">
                          These cookies allow the website to remember choices you make and provide enhanced, personalized features.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                        <p className="leading-relaxed">
                          We use analytics cookies to understand how visitors interact with our website, helping us improve our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Managing Cookies</h3>
                    <p className="leading-relaxed mb-3">
                      You can control and manage cookies in various ways:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                      <li>Third-party tools: Use privacy tools to manage tracking cookies</li>
                      <li>Opt-out links: Some analytics providers offer direct opt-out options</li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      Please note that disabling certain cookies may affect the functionality of our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Third-Party Cookies</h3>
                    <p className="leading-relaxed">
                      We may use third-party services that set cookies on your device. These third parties have their own privacy policies, and we encourage you to review them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Updates to Cookie Policy</h3>
                    <p className="leading-relaxed">
                      We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                    <p className="leading-relaxed">
                      If you have questions about our use of cookies, please contact us at privacy@talorix.com
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 pt-4 border-t border-gray-800">
                    Last updated: March 2, 2026
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}


