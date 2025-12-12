interface HeroProps {
  onConnect: () => void;
  isConnected: boolean;
  isLoading?: boolean;
}

export default function Hero({ onConnect, isConnected, isLoading = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-teal-400 via-teal-500 to-teal-600">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q 50 80, 100 100 T 200 100" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
              <path d="M0 120 Q 50 100, 100 120 T 200 120" fill="none" stroke="white" strokeWidth="2" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sunny-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium mb-6 border border-white/30">
              <span className="inline-block w-2 h-2 bg-sunny-400 rounded-full mr-2 animate-pulse"></span>
              Community Powered
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Deslink
            </h1>

            <p className="text-lg text-teal-100 mb-8 max-w-xl">
              Affordable, reliable internet for underserved communities through decentralized mesh technology with affordable Scroll payments
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={onConnect}
                disabled={isLoading}
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? 'Connecting...' : isConnected ? 'View Dashboard' : 'Connect Now'}
              </button>
              <button className="bg-coral-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Ghibli-style Desert Spirit with WiFi Antenna */}
                <g className="animate-bounce-slow">
                  {/* Body - round and fluffy like a soot sprite */}
                  <ellipse cx="100" cy="200" rx="45" ry="50" fill="#5A4A3A" opacity="0.95"/>
                  <ellipse cx="100" cy="200" rx="35" ry="40" fill="#6B5B4B" opacity="0.9"/>

                  {/* Cute antenna on head */}
                  <line x1="100" y1="150" x2="100" y2="130" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="100" cy="125" r="6" fill="#14b8a6">
                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                  </circle>

                  {/* Big sparkly eyes - very Ghibli style */}
                  <ellipse cx="88" cy="195" rx="8" ry="12" fill="#1f2937"/>
                  <ellipse cx="112" cy="195" rx="8" ry="12" fill="#1f2937"/>
                  <circle cx="90" cy="192" r="3" fill="#ffffff"/>
                  <circle cx="114" cy="192" r="3" fill="#ffffff"/>

                  {/* Little smile */}
                  <path d="M 92 210 Q 100 215 108 210" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

                  {/* Tiny arms holding a signal */}
                  <ellipse cx="65" cy="205" rx="12" ry="8" fill="#5A4A3A" opacity="0.9"/>
                  <ellipse cx="135" cy="205" rx="12" ry="8" fill="#5A4A3A" opacity="0.9"/>
                </g>

                {/* Floating Spirit Creature - inspired by Kodama */}
                <g className="animate-float">
                  <ellipse cx="280" cy="160" rx="35" ry="40" fill="#F8E5CE" opacity="0.95"/>

                  {/* Cute little antenna ears */}
                  <ellipse cx="265" cy="135" rx="8" ry="15" fill="#F8E5CE" opacity="0.9" transform="rotate(-20 265 135)"/>
                  <ellipse cx="295" cy="135" rx="8" ry="15" fill="#F8E5CE" opacity="0.9" transform="rotate(20 295 135)"/>
                  <circle cx="265" cy="125" r="4" fill="#fb7185"/>
                  <circle cx="295" cy="125" r="4" fill="#fb7185"/>

                  {/* Simple dot eyes */}
                  <circle cx="272" cy="158" r="4" fill="#1f2937"/>
                  <circle cx="288" cy="158" r="4" fill="#1f2937"/>
                  <circle cx="273" cy="157" r="1.5" fill="#ffffff"/>
                  <circle cx="289" cy="157" r="1.5" fill="#ffffff"/>

                  {/* O-shaped mouth - very Ghibli */}
                  <ellipse cx="280" cy="170" rx="4" ry="6" fill="#1f2937" opacity="0.8"/>

                  {/* WiFi signal badge on chest */}
                  <path d="M 270 180 Q 280 175 290 180 L 285 190 Q 280 188 275 190 Z" fill="#14b8a6" opacity="0.8"/>
                  <path d="M 275 182 Q 280 180 285 182" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
                </g>

                {/* Friendly Cactus Character */}
                <g>
                  <ellipse cx="200" cy="310" rx="30" ry="45" fill="#4D9F7B" opacity="0.95"/>

                  {/* Arms */}
                  <ellipse cx="170" cy="295" rx="15" ry="10" fill="#4D9F7B" opacity="0.9" transform="rotate(-30 170 295)"/>
                  <ellipse cx="230" cy="295" rx="15" ry="10" fill="#4D9F7B" opacity="0.9" transform="rotate(30 230 295)"/>

                  {/* Flower on top */}
                  <circle cx="200" cy="260" r="8" fill="#fb7185"/>
                  <circle cx="195" cy="255" r="5" fill="#fde047"/>
                  <circle cx="205" cy="255" r="5" fill="#fde047"/>
                  <circle cx="200" cy="250" r="5" fill="#fde047"/>

                  {/* Happy eyes */}
                  <path d="M 190 295 Q 188 298 186 295" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M 214 295 Q 212 298 210 295" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

                  {/* Big smile */}
                  <path d="M 188 310 Q 200 320 212 310" stroke="#1f2937" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

                  {/* Spines */}
                  <line x1="185" y1="285" x2="180" y2="280" stroke="#2D5F4B" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="180" y1="300" x2="175" y2="300" stroke="#2D5F4B" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="215" y1="285" x2="220" y2="280" stroke="#2D5F4B" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="220" y1="300" x2="225" y2="300" stroke="#2D5F4B" strokeWidth="2" strokeLinecap="round"/>
                </g>

                {/* Magical WiFi Particles - like Ghibli sparkles */}
                <circle cx="150" cy="100" r="3" fill="#fde047" opacity="0.8">
                  <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="320" cy="220" r="3" fill="#fb7185" opacity="0.8">
                  <animate attributeName="cy" values="220;210;220" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="250" cy="80" r="2" fill="#14b8a6" opacity="0.8">
                  <animate attributeName="cy" values="80;70;80" dur="3.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="60" cy="280" r="2" fill="#fde047" opacity="0.8">
                  <animate attributeName="cx" values="60;70;60" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="340" cy="300" r="2" fill="#fb7185" opacity="0.7">
                  <animate attributeName="cx" values="340;330;340" dur="3s" repeatCount="indefinite"/>
                </circle>

                {/* Signal waves - soft and organic */}
                <path d="M 100 125 Q 80 115 70 105" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite"/>
                </path>
                <path d="M 100 125 Q 120 115 130 105" stroke="#14b8a6" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round">
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-2xl border border-white/30 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="bg-sunny-400 rounded-full p-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-white">
            <div className="text-sm font-medium">NEAT!</div>
            <div className="text-xs text-teal-100">New Sale</div>
          </div>
        </div>
      </div>
    </section>
  );
}
