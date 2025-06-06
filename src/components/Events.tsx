import { Calendar } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: "Easter Sunday Service",
      date: "March 31, 2025",
      time: "10:00 AM",
      description: "Join us for a special Easter celebration service."
    },
    {
      title: "Community Outreach",
      date: "June 15, 2025",
      time: "9:00 AM",
      description: "Serving our local community through various activities."
    },
    {
      title: "Youth Conference",
      date: "July 20, 2025",
      time: "2:00 PM",
      description: "Annual youth conference with worship and workshops."
    }
  ];

  return (
    <div id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">Join us for these special occasions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-purple-700 mr-2" />
                <span className="text-purple-700 font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.time}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}