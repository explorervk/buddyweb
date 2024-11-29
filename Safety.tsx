import { Shield, UserCheck, AlertCircle } from 'lucide-react';

export function Safety() {
  return (
    <section id="safety" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've implemented multiple layers of protection to ensure a safe environment
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl">
            <Shield className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Moderation</h3>
            <p className="text-gray-600">Our team actively monitors calls to prevent any inappropriate behavior</p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <UserCheck className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Community</h3>
            <p className="text-gray-600">All users go through a verification process before joining</p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <AlertCircle className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Report & Block</h3>
            <p className="text-gray-600">Instant blocking and reporting features to handle any concerns</p>
          </div>
        </div>
      </div>
    </section>
  );
}