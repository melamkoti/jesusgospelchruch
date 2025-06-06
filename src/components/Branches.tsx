import { MapPin, Clock } from 'lucide-react';
import Chruch1 from "../assets/chruch.jpg"
export default function Branches() {
  const branches = [
    {
      name: "Jesus Gospel Chruch Main ",
      address: "Sc Colony near MPPW School, Machavaram",
      services: [
        { day: "Sunday", time: "10:00 AM - 12:00 PM" },
        { day: "Wednesday", time: "6:30 PM - 8:00 PM" }
      ],
      image:Chruch1,
    },
    {
      name: "Jesus Gospel Chruch Sub",
      address: "Sc Colony Regulagadda Road, Vemavaram",
      services: [
        { day: "Sunday", time: "9:30 AM - 11:30 AM" },
        { day: "Tuesday", time: "7:00 PM - 8:30 PM" }
      ],
      image:Chruch1,
    },
    {
      name: "Jesus Gospel Chruch Sub",
      address: "Sc Colony Road, Kothhapalem",
      services: [
        { day: "Sunday", time: "11:00 AM - 1:00 PM" },
        { day: "Thursday", time: "6:30 PM - 8:00 PM" }
      ],
      image:Chruch1,
    },
    {
      name: "Jesus Gospel Chruch Sub",
      address: "Railway Station Lane, Piduguralla",
      services: [
        { day: "Sunday", time: "10:30 AM - 12:30 PM" },
        { day: "Friday", time: "7:00 PM - 8:30 PM" }
      ],
      image:Chruch1,
    },
    {
      name: "Jesus Gospel Chruch Sub",
      address: "Sc Colony, Pinnelli",
      services: [
        { day: "Sunday", time: "9:00 AM - 11:00 AM" },
        { day: "Wednesday", time: "7:00 PM - 8:30 PM" }
      ],
      image:Chruch1,
    }
  ];

  return (
    <div id="branches" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Our Church Branches
        </h2>
        <div className="grid gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {branch.name}
                  </h3>
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-purple-700 mt-1 mr-2" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="space-y-2">
                    {branch.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <Clock className="h-5 w-5 text-purple-700 mr-2" />
                        <p className="text-gray-600">
                          <span className="font-semibold">{service.day}:</span> {service.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}