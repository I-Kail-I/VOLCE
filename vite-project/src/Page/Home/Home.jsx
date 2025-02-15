import NavBar from "../../Component/NavBar/NavBar";

export default function Home({ onLogout }) {
  return (
    <div className="landing-page flex-grow-1">
      <NavBar />

      {/* Welcome Section */}
      <section className="hero-section bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Jerk Mate</h1>
          <p className="lead">Your journey to success starts here.</p>
          <a href="#features" className="btn btn-light btn-lg">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Features</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 shadow-sm">
                <h3>🚀 Fast & Reliable</h3>
                <p>
                  Our platform is built for speed and reliability, ensuring
                  you never miss a beat.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 shadow-sm">
                <h3>💡 Easy to Use</h3>
                <p>
                  Designed with simplicity in mind, so you can focus on what
                  matters most.
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card p-4 shadow-sm">
                <h3>🔒 Secure</h3>
                <p>
                  Your data is safe with us. We use the latest security
                  protocols to protect you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section bg-dark text-white text-center p-5 mt-auto">
        <div className="container">
          <p className="mb-0">
            &copy; 2025 Jerk Matez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
