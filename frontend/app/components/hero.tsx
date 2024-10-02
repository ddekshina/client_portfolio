export default function Hero() {
  
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://www.keralatourism.org/images/festival_wiki/large/thelliyoor_padayani_23.JPG)",
      }}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn bg-red-900 border-red-900 text-yellow-200">Get Started</button>
        </div>
      </div>
    </div>
  );
}



