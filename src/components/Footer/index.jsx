import { FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const links = [
    { url: "https://github.com/almogshoob", icon: <FaGithub /> },
    { url: "https://instagram.com/almogshoob", icon: <FaInstagram /> },
  ];

  return (
    <footer className="footer">
      {links.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
          {link.icon}
        </a>
      ))}
    </footer>
  );
};
