export default function PhotoGallery() {
  const photos = [
    {
      url: "https://images.pexels.com/photos/415571/pexels-photo-415571.jpeg",
      alt: "Church exterior"
    },
    {
      url: "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg",
      alt: "Worship service"
    },
    {
      url: "https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg",
      alt: "Community event"
    },
    {
      url: "https://images.pexels.com/photos/159376/bible-read-god-book-159376.jpeg",
      alt: "Bible study"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Our Church Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}