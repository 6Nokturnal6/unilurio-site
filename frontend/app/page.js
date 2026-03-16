export default function Home() {
  const faculties = [
    { name: "Engineering", link: "/faculties/engineering" },
    { name: "Medicine", link: "/faculties/medicine" },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="hero">
        <img src="/campus.jpg" alt="Campus" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Universidade Lúrio</h1>
          <p>Your gateway to education, research, and innovation</p>
        </div>
      </section>

      {/* Quick links */}
      <section className="quick-links">
        <h2>Explore</h2>
        <div className="cards">
          <a href="/admissions" className="card">Admissions</a>
          <a href="/research" className="card">Research</a>
          <a href="/students" className="card">Students</a>
          <a href="/news" className="card">News</a>
        </div>
      </section>

      {/* Faculties */}
      <section className="faculties">
        <h2>Our Faculties</h2>
        <div className="cards">
          {faculties.map((f) => (
            <a key={f.name} href={f.link} className="card">
              {f.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}