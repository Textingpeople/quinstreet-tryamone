'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (!phoneParam) {
      setError('Invalid verification link. Phone number is missing.');
      return;
    }
    setPhone(phoneParam);
  }, [searchParams]);

  const handleConfirm = () => {
    setIsRedirecting(true);

    // Log the raw search string so we can debug exactly what the browser sees
    const rawSearch = window.location.search.substring(1);
    console.log('[DEBUG] rawSearch:', rawSearch.substring(0, 200));

    const destKeyIndex = rawSearch.indexOf('destination=');
    if (destKeyIndex === -1) {
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
      return;
    }

    const rawRedirectUrl = rawSearch.substring(destKeyIndex + 'destination='.length);
    console.log('[DEBUG] rawRedirectUrl (first 200):', rawRedirectUrl.substring(0, 200));

    if (!rawRedirectUrl) {
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
      return;
    }

    // Use the raw URL directly - do NOT decode it.
    // window.location.href handles encoded URLs correctly.
    // decodeURIComponent was causing double-decoding issues.
    console.log('[DEBUG] Setting window.location.href to rawRedirectUrl');
    window.location.href = rawRedirectUrl;
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8">
        {/* Logo/Brand */}
        <div className="flex justify-center mb-8">
          <Image src="/AmOne Logo.svg" alt="AmOne" width={150} height={50} className="h-12 w-auto" priority />
        </div>

        {/* Verification Content */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#F5F7FB] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#E5E7EB]">
            <CheckCircle className="w-12 h-12 text-[#F59A23]" />
          </div>
          
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
            Verify Your Number
          </h2>
          
          {/* Phone Input Field */}
          <div className="mb-8">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full bg-[#F5F7FB] rounded-lg p-6 text-3xl font-bold text-[#1F2937] tracking-wider text-center border-2 border-[#E5E7EB] focus:border-[#F59A23] focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            disabled={isRedirecting}
            className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
              isRedirecting
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-[#F59A23] hover:bg-[#E67E15] text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isRedirecting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-6 border-t border-[#E5E7EB]">
          <p className="text-xs text-[#6B7280]">
            Secured by AmOne
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F5F7FB] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F59A23] mx-auto"></div>
          <p className="mt-4 text-[#6B7280]">Loading...</p>
        </div>
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
