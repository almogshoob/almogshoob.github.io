export const Card = ({ title, subtitle, favicon, url }) => {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <a
      className="project-card"
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMove}
    >
      <img className="favicon" src={favicon} alt="" />

      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </a>
  );
};
