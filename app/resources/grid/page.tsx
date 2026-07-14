const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-950 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that works best for you
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 - Basic */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-2">Basic</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold">$19</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-300">
              <li className="flex items-center gap-3">✅ 1 User</li>
              <li className="flex items-center gap-3">✅ 10 Projects</li>
              <li className="flex items-center gap-3">✅ Basic Support</li>
              <li className="flex items-center gap-3">✅ 5GB Storage</li>
            </ul>

            <button className="w-full py-4 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Plan 2 - Pro (Popular) */}
          <div className="bg-gradient-to-b from-violet-600 to-indigo-600 rounded-3xl p-8 relative scale-105 shadow-2xl shadow-violet-500/30">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-bold px-6 py-1 rounded-full">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-semibold mb-2">Pro</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-6xl font-bold">$49</span>
              <span className="text-violet-200">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-white">
              <li className="flex items-center gap-3">✅ Unlimited Users</li>
              <li className="flex items-center gap-3">✅ Unlimited Projects</li>
              <li className="flex items-center gap-3">✅ Priority Support</li>
              <li className="flex items-center gap-3">✅ 100GB Storage</li>
              <li className="flex items-center gap-3">✅ Advanced Analytics</li>
            </ul>

            <button className="w-full py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
              Upgrade to Pro
            </button>
          </div>

          {/* Plan 3 - Enterprise */}
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-gray-400">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-300">
              <li className="flex items-center gap-3">✅ Everything in Pro</li>
              <li className="flex items-center gap-3">
                ✅ Custom Integrations
              </li>
              <li className="flex items-center gap-3">✅ Dedicated Manager</li>
              <li className="flex items-center gap-3">✅ Unlimited Storage</li>
              <li className="flex items-center gap-3">✅ SSO & Security</li>
            </ul>

            <button className="w-full py-4 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
