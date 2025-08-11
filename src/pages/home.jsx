import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-500 drop-shadow-lg">
          Social Vibe
        </h1>
        <p className="mt-3 text-gray-300 text-lg">
          Share your thoughts, connect with friends, and vibe in style 🚀
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4 grid gap-6">
        {/* Post Box */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-lg hover:shadow-purple-800/40 transition-all">
          <textarea
            placeholder="What's on your mind?"
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none resize-none"
            rows="3"
          ></textarea>
          <div className="mt-3 flex justify-end">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:scale-105 transition-all shadow-lg">
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        {[1, 2, 3].map((post) => (
          <div
            key={post}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-fuchsia-800/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={`https://i.pravatar.cc/150?img=${post}`}
                alt="User"
                className="w-12 h-12 rounded-full border border-white/30"
              />
              <div>
                <h3 className="font-semibold text-lg">User {post}</h3>
                <span className="text-sm text-gray-400">2 hrs ago</span>
              </div>
            </div>
            <p className="text-gray-200">
              This is a sample post content. Add your real posts here from backend API.
            </p>
            <div className="flex gap-6 mt-4 text-gray-400">
              <button className="hover:text-fuchsia-400 transition">❤️ Like</button>
              <button className="hover:text-fuchsia-400 transition">💬 Comment</button>
              <button className="hover:text-fuchsia-400 transition">↗ Share</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
