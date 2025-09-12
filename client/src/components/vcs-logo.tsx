export default function VCSLogo({ size = 40 }: { size?: number }) {
  return (
    <div 
      className="vcs-logo"
      style={{ width: size, height: size }}
      data-testid="vcs-logo"
    >
      {/* The CSS handles the VCS text overlay */}
    </div>
  );
}
