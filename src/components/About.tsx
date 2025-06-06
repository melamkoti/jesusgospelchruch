export default function About() {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">About Our Church</h2>
            <p className="text-gray-600 mb-4">
              Jesus Gospel Church is a welcoming community of believers dedicated to spreading the love
              and message of Jesus Christ. Founded in 2004, we have been serving our community for
              over three decades.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to create a loving environment where people can experience God's presence,
              grow in their faith, and find their purpose in Christ.
            </p>
            <p className="text-gray-600">
              We believe in the power of worship, prayer, and fellowship to transform lives and build
              a strong community of believers.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
              alt="Church community"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}