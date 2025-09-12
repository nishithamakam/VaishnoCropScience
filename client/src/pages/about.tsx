export default function About() {
  return (
    <div data-testid="about-page">
      <section className="section placeholder-section" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="placeholder-content">
            <i className="fas fa-users" data-testid="about-icon"></i>
            <h2 data-testid="about-title">About Us</h2>
            <p className="text-muted" data-testid="about-description">
              This section will contain information about Vaishno Crop Science's history, mission, vision, and team. Content to be provided later.
            </p>
            <div className="mt-4">
              <span className="badge bg-success" data-testid="about-badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
