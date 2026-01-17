function Blog() {
  const posts = [
    {
      title: "The Legal Landscape of Cannabis Tourism in South Africa",
      excerpt: "Understanding the laws and regulations surrounding cannabis use and tourism in Cape Town.",
      date: "January 15, 2026",
      category: "Legal"
    },
    {
      title: "Best Sailing Spots in Cape Town for Cannabis Enthusiasts",
      excerpt: "Discover the most scenic and peaceful locations for a cannabis-friendly sailing experience.",
      date: "January 10, 2026",
      category: "Travel"
    },
    {
      title: "Safety First: Responsible Cannabis Consumption on the Water",
      excerpt: "Essential safety tips for combining cannabis use with water activities.",
      date: "January 5, 2026",
      category: "Safety"
    },
    {
      title: "Cape Town's Cannabis Culture: A Growing Movement",
      excerpt: "Exploring the vibrant and evolving cannabis community in the Mother City.",
      date: "December 28, 2025",
      category: "Culture"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green bg-clip-text text-transparent">
            High Tide Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stories, tips, and insights from the world of cannabis tourism
          </p>
        </div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-rasta-green text-white text-sm rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{post.title}</h2>
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
              <button className="btn-primary">Read More</button>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-rasta-red via-rasta-yellow to-rasta-green p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-white mb-6">
              Subscribe to our newsletter for the latest tours, tips, and cannabis tourism news.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 rounded"
              />
              <button className="bg-white text-rasta-green px-6 py-2 rounded font-bold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
