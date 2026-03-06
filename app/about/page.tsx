import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap, CheckCircle, Bell, ShieldAlert } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/AmOne Logo.svg" alt="AmOne" width={120} height={40} className="h-10 w-auto" priority />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#6B7280] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#1F2937] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#6B7280] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#F59A23] text-white hover:bg-[#E67E15] px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#1F2937] mb-6">
              About AmOne
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We're building the future of transactional messaging — helping businesses communicate with customers at the moments that matter most through reliable, carrier-compliant SMS.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1F2937] mb-6">Our Mission</h2>
            <p className="text-lg text-[#6B7280] mb-4">
              AmOne was built to solve a critical challenge: businesses need a reliable, compliant way to send transactional SMS messages that actually reach their customers.
            </p>
            <p className="text-lg text-[#6B7280] mb-4">
              Whether it's verifying a user's identity, sending an account notification, or delivering a time-sensitive alert, we provide the infrastructure to make every message count.
            </p>
            <p className="text-lg text-[#6B7280]">
              Our goal is to make transactional messaging seamless, secure, and accessible for businesses of all sizes — so you can focus on your customers, not your infrastructure.
            </p>
          </div>
          <div className="bg-[#F5F7FB] rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-[#F59A23]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Focused on Deliverability</h3>
                  <p className="text-[#6B7280]">
                    Built from the ground up to maximize message delivery rates with carrier-compliant infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#F59A23]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Security First</h3>
                  <p className="text-[#6B7280]">
                    Your customers' data is protected with enterprise-grade security measures and strict privacy controls.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#F59A23]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Lightning Fast</h3>
                  <p className="text-[#6B7280]">
                    Transactional messages delivered in seconds with optimized routing and sub-2-second page loads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Support Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">What We Support</h2>
            <p className="text-xl text-[#6B7280]">
              Three core transactional messaging use cases, built for reliability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-[#F59A23]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">User Verification</h3>
              <p className="text-[#6B7280] text-center">
                Confirm customer identity with SMS-based verification flows. Reduce fraud, improve security, and build customer trust with every interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
              <div className="flex justify-center mb-4">
                <Bell className="w-12 h-12 text-[#F59A23]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">Account Notifications</h3>
              <p className="text-[#6B7280] text-center">
                Keep customers informed with timely account updates — logins, password resets, billing confirmations, document links, and more.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
              <div className="flex justify-center mb-4">
                <ShieldAlert className="w-12 h-12 text-[#F59A23]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">User Alerts</h3>
              <p className="text-[#6B7280] text-center">
                Deliver time-sensitive alerts directly to customers' phones — order updates, appointment reminders, and critical system notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Why Businesses Choose Us</h2>
          <p className="text-xl text-[#6B7280]">
            Trusted by companies that value compliance, reliability, and results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#F5F7FB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB]">
              <Shield className="w-8 h-8 text-[#F59A23]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">10DLC Compliant</h3>
            <p className="text-[#6B7280]">
              Fully registered and compliant with carrier 10DLC requirements for maximum deliverability.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#F5F7FB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB]">
              <Users className="w-8 h-8 text-[#F59A23]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Multi-Brand Support</h3>
            <p className="text-[#6B7280]">
              Support multiple brands with customizable sender identities and white-label options.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#F5F7FB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB]">
              <Zap className="w-8 h-8 text-[#F59A23]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">High Performance</h3>
            <p className="text-[#6B7280]">
              Global infrastructure ensures fast delivery and high uptime for mission-critical messages.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#F5F7FB] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB]">
              <Target className="w-8 h-8 text-[#F59A23]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Easy Integration</h3>
            <p className="text-[#6B7280]">
              Simple URL-based integration with comprehensive documentation to get you up and running fast.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F2937] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join businesses that trust AmOne for reliable transactional messaging — verification, notifications, and alerts.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#F59A23] text-white text-lg font-semibold rounded-lg hover:bg-[#E67E15] transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] border-t border-gray-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AmOne</h3>
              <p className="text-gray-400">
                Transactional SMS messaging for businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@tryamone.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Address</h4>
              <p className="text-gray-400">
                1776 Broadway, Floor 23<br />
                New York, New York 10019<br />
                United States of America
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AmOne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
