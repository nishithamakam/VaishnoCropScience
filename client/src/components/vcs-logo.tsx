import logoImage from "@assets/Screenshot_2025-09-12-23-52-51-16_1c337646f29875672b5a61192b9010f9_1757701912402.jpg";

export default function VCSLogo({ size = 40 }: { size?: number }) {
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
