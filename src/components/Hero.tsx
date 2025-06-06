import { QRCodeSVG } from 'qrcode.react';
import Sister from "../assets/sister.jpg"
export default function Hero() {
  const pastors = [
    {
      name: "Rev. Peram Sundharao",
      role: "Senior Pastor",
      image: "https://images.pexels.com/photos/5273717/pexels-photo-5273717.jpeg"
    },
    {
      name: "Rev. Peram Mery",
      role: "Associate Pastor",
      image: Sister,
    }
  ];

  const paymentMethods = [
    {
      name: "Church Offering",
      qrCode: "https://example.com/church-offering",
      description: "For regular tithes and offerings"
    },
    {
      name: "Building Fund",
      qrCode: "https://example.com/building-fund",
      description: "Support our church building projects"
    }
  ];

  return (
    <div id="home" className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/208371/pexels-photo-208371.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center text-center py-20">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Welcome to Jesus Gospel Church
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8">
              Join us in worship, fellowship, and spiritual growth
            </p>
            <a
              href="#branches"
              className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-colors"
            >
              Find Your Nearest Branch
            </a>
          </div>
        </div>

        <div className="bg-white/95 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Our Pastors */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Our Pastors</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {pastors.map((pastor, index) => (
                    <div key={index} className="text-center">
                      <div className="aspect-square overflow-hidden rounded-full mb-4">
                        <img
                          src={pastor.image}
                          alt={pastor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900">{pastor.name}</h3>
                      <p className="text-gray-600">{pastor.role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Support Our Ministry</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-2">{method.name}</h3>
                      <div className="flex justify-center mb-2">
                        <QRCodeSVG value={method.qrCode} size={128} />
                      </div>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}