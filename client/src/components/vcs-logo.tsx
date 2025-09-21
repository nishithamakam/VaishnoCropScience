import logoImage from "@assets/logo.jpg";

export default function VCSLogo({ size = 75 }: { size?: number }) {
  return (
    <img 
      src={logoImage}
      alt="VCS Logo"
      className="vcs-logo-image"
      style={{ width: size, height: size, objectFit: 'contain' }}
      data-testid="vcs-logo"
    />
  );
}
