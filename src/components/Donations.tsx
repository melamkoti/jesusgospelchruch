import { Heart, Users, Home, Book, Coffee } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function Donations() {
  const causes = [
    {
      title: "Feed the Hungry",
      icon: Coffee,
      description: "Provide meals to those in need through our weekly food distribution program.",
      target: "$5,000",
      raised: "$3,200",
      qrCode: "https://example.com/donate/food"
    },
    {
      title: "Education Support",
      icon: Book,
      description: "Help underprivileged children with school supplies and tuition assistance.",
      target: "$10,000",
      raised: "$6,500",
      qrCode: "https://example.com/donate/education"
    },
    {
      title: "Shelter Program",
      icon: Home,
      description: "Support homeless families with temporary housing and rehabilitation.",
      target: "$15,000",
      raised: "$8,700",
      qrCode: "https://example.com/donate/shelter"
    },
    {
      title: "Community Outreach",
      icon: Users,
      description: "Fund various community programs including counseling and skill development.",
      target: "$7,000",
      raised: "$4,300",
      qrCode: "https://example.com/donate/community"
    }
  ];

  return (
    <div id="donations" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Support Our Causes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your generous donations help us make a difference in our community. Together, we can bring hope and support to those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <cause.icon className="h-12 w-12 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
              <p className="text-gray-600 mb-4">{cause.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Raised: {cause.raised}</span>
                  <span>Goal: {cause.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-700 h-2 rounded-full" 
                    style={{ width: `${(parseInt(cause.raised.slice(1)) / parseInt(cause.target.slice(1))) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <QRCodeSVG value={cause.qrCode} size={128} />
              </div>
              
              <button className="flex items-center justify-center w-full bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
                <Heart className="h-5 w-5 mr-2" />
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}