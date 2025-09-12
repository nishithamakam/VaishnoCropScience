export default function Resources() {
  return (
    <div data-testid="resources-page">
      <section className="section placeholder-section" style={{ marginTop: '80px' }}>
        <div className="container">
          <div className="placeholder-content">
            <i className="fas fa-book-open" data-testid="resources-icon"></i>
            <h2 data-testid="resources-title">Resources</h2>
            <p className="text-muted" data-testid="resources-description">
              This section will contain educational resources, research papers, farming guides, and technical documentation. Content to be provided later.
            </p>
            <div className="mt-4">
              <span className="badge bg-success" data-testid="resources-badge">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
