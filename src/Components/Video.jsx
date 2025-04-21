export default function Video() {
    return (
      <div className="p-6 bg bg-info-100 min-h-screen">
         <h2 className="text-xl font-semibold mb-2 text-center text-success">
          Watch the Video: Understanding Livestock Diseases
        </h2>
        <p className="mb-6 container bg bg-info">
            This video provides an introduction to livestock diseases, how they
            impact animal health, and the importance of early detection and
            management. Learn more about common diseases, their symptoms, and
            effective treatments that can help farmers protect their livestock.
          </p>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow" style={{ width: '30rem' }}>
          <div className="card-body text-center">
            <h5 className="card-title mb-3">My Video</h5>
            <video width="100%" controls>
              <source src="https://www.youtube.com/embed/JwNQiscpTyg?autoplay=1" type="" />
              Your browser  not support the video tag.
            </video>
            </div>
          </div>
        </div>
      </div>
    );
  }
  