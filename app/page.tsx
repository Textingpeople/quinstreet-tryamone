import Link from 'next/link';
import { CheckCircle, Bell, ShieldAlert, Zap, Users, Lock } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
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
                <Link href="/" className="text-[#1F2937] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#6B7280] hover:text-[#F59A23] px-3 py-2 rounded-md text-sm font-medium">
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
            <h1 className="text-5xl font-extrabold text-[#1F2937] sm:text-6xl md:text-7xl">
              Transactional Messaging
              <span className="block text-[#F59A23]">That Delivers</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-[#6B7280]">
              Reach your customers at the right moment with reliable SMS for user verification, account notifications, and real-time alerts — all in one platform.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-[#F59A23] text-white text-lg font-semibold rounded-lg hover:bg-[#E67E15] transition-colors shadow-lg"
              >
                Get Started Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white text-[#2F4EB3] text-lg font-semibold rounded-lg hover:bg-[#F5F7FB] transition-colors border-2 border-[#2F4EB3]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Use Cases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937]">Three Pillars of Transactional Messaging</h2>
          <p className="mt-4 text-xl text-[#6B7280]">
            Everything your business needs to communicate with customers at critical moments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Use Case 1 - User Verification */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#F59A23]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              User Verification
            </h3>
            <p className="text-[#6B7280] text-center">
              Confirm customer identity instantly with SMS-based verification. Reduce fraud and build trust with a seamless, carrier-compliant flow.
            </p>
          </div>

          {/* Use Case 2 - Account Notifications */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
            <div className="flex justify-center mb-4">
              <Bell className="w-12 h-12 text-[#F59A23]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              Account Notifications
            </h3>
            <p className="text-[#6B7280] text-center">
              Keep customers informed with timely account updates — password changes, login activity, billing confirmations, and more.
            </p>
          </div>

          {/* Use Case 3 - User Alerts */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-[#E5E7EB] border-t-4 border-t-[#F59A23]">
            <div className="flex justify-center mb-4">
              <ShieldAlert className="w-12 h-12 text-[#F59A23]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1F2937] text-center mb-3">
              User Alerts
            </h3>
            <p className="text-[#6B7280] text-center">
              Deliver time-sensitive alerts directly to your customers' phones — order updates, appointment reminders, and critical system notices.
            </p>
          </div>
        </div>
      </section>

      {/* Why AmOne Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937]">Why Choose AmOne?</h2>
            <p className="mt-4 text-xl text-[#6B7280]">
              Built for businesses that need reliable, compliant transactional messaging
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Zap className="w-8 h-8 text-[#F59A23]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Lightning Fast Delivery</h3>
              <p className="text-[#6B7280]">
                Messages delivered in seconds, not minutes. Optimized routing ensures your transactional SMS reaches customers when it matters most.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Lock className="w-8 h-8 text-[#F59A23]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Carrier Compliant</h3>
              <p className="text-[#6B7280]">
                Fully compliant with 10DLC regulations and carrier requirements. We handle the compliance so you can focus on your business.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E5E7EB] shadow-sm">
                <Users className="w-8 h-8 text-[#F59A23]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">Multi-Brand Support</h3>
              <p className="text-[#6B7280]">
                Manage messaging for multiple brands from a single platform with customizable sender identities and white-label options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1F2937]">How It Works</h2>
          <p className="mt-4 text-xl text-[#6B7280]">
            Simple, powerful transactional messaging for every customer touchpoint
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Solutions List */}
          <div className="space-y-12">
            {/* Solution 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F59A23] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Identity Verification</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Send a verification request to confirm your users are who they say they are. Our carrier-compliant flow ensures high deliverability and a smooth customer experience.
                </p>
              </div>
            </div>

            {/* Solution 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F59A23] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Account Notifications</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Automatically notify customers of important account events — logins, password resets, billing updates, and document links for e-signatures — with higher open rates than email.
                </p>
              </div>
            </div>

            {/* Solution 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#F59A23] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1F2937] mb-3">Real-Time Alerts</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Re-engage customers who've dropped off with automated follow-up messages. Deliver time-sensitive alerts for orders, appointments, and critical updates that demand immediate attention.
                </p>
              </div>
            </div>
          </div>

          {/* Single Image */}
          <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
            <Image 
              src="/Phoneimage.png" 
              alt="AmOne Transactional Messaging" 
              width={350} 
              height={350}
              className="w-auto h-auto object-contain max-w-full"
            />
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
            Join businesses that trust AmOne for reliable transactional messaging — verification, notifications, and alerts all in one place.
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
