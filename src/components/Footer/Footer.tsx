import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Art Family © {new Date().getFullYear()}</p>
      <p className="footer__note">Свяжитесь с нами: w-graf@mail.ru</p>
    </footer>
  );
}