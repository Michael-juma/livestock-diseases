export default function Video() {
    return (
      <div className="p-6 bg bg-info-100 min-h-screen">
         <h2 className="text-xl font-semibold mb-2 text-center text-success">
          Watch the Video: Understanding Livestock Diseases
        </h2>
        <p className="mb-6 container bg bg-">
            This video provides an introduction to livestock diseases, how they
            impact animal health, and the importance of early detection and
            management. Learn more about common diseases, their symptoms, and
            effective treatments that can help farmers protect their livestock.
          </p>
      <div className="d-flex justify-content-center align-items-center vh-200">
        <div className="card shadow" style={{ width: '50rem' }}>
          <div className="card-body text-center">
            <h5 className="card-title mb-3 text-primary">Watch This</h5>
            <iframe
             width="100%"
              height="315"
               src="https://www.youtube.com/embed/JwNQiscpTyg?autoplay=1" 
              title="YouTube video player"
              frameboder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            
            </iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
  