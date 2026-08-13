import { useState } from 'react';
import './Header.css';

export default function Header() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="header">
      {logoFailed ? (
        <span className="header__logo-fallback">Art Family</span>
      ) : (
        <img
          className="header__logo"
          src="/Art_Family/Logo_White.png"
          alt="Art Family"
          onError={() => setLogoFailed(true)}
        />
      )}
    </header>
  );
}