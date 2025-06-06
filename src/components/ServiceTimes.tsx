import { Clock } from 'lucide-react';

export default function ServiceTimes() {
  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Service Times</h2>
          <p className="text-gray-600">Join us for worship and fellowship</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Sunday Service</h3>
            <p className="text-gray-600 text-center">10:00 AM - 12:00 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Bible Study</h3>
            <p className="text-gray-600 text-center">Wednesday 6:30 PM - 8:00 PM</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Youth Service</h3>
            <p className="text-gray-600 text-center">Friday 7:00 PM - 8:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}