const githubUrl = "https://github.com/PrigodGames/PrigodGames";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-scrim" />
        <header className="site-header page-shell">
          <a className="brand" href="#top" aria-label="Prigod Games home">
            <span className="brand-mark" aria-hidden="true">
              <span />
            </span>
            <span className="brand-name">Prigod <i>Games</i></span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#game">The game</a>
            <a href="#studio">Studio</a>
            <a href="#journey">Journey</a>
          </nav>
          <a className="header-cta" href={githubUrl} target="_blank" rel="noreferrer">
            Follow development <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-content page-shell">
          <div className="eyebrow light"><span /> Independent game studio</div>
          <h1>Worlds worth<br /><em>fighting for.</em></h1>
          <p>
            Prigod Games creates multiplayer adventures where every role matters,
            every run tells a new story, and the danger has a mind of its own.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#game">Enter the dungeon <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#studio">Meet the studio <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="hero-meta page-shell" aria-label="Project summary">
          <div><small>Current project</small><strong>Project Overlord</strong></div>
          <div><small>Genre</small><strong>Asymmetric action</strong></div>
          <div><small>Status</small><strong><span className="status-dot" /> In development</strong></div>
        </div>
      </section>

      <section className="project-section" id="game">
        <div className="page-shell">
          <div className="section-heading project-heading">
            <div>
              <div className="eyebrow"><span /> Our debut game</div>
              <p className="project-kicker">Working title</p>
              <h2>Project<br /><em>Overlord</em></h2>
            </div>
            <div className="project-intro">
              <p className="lede">Five heroes enter the dungeon. One player becomes the nightmare waiting within.</p>
              <p>Build a party, break ancient seals, and survive a shifting labyrinth—or command its monsters, traps, and hunger as the Overlord.</p>
              <div className="tag-row" aria-label="Game features">
                <span>Up to 6 players</span><span>Online multiplayer</span><span>PC</span>
              </div>
            </div>
          </div>

          <figure className="project-frame">
            <img src="/project-lair.jpg" alt="A player facing a ritual chamber inside the Project Overlord dungeon" />
            <figcaption>
              <span>Pre-alpha in-game scene</span>
              <span>01 — The lair</span>
            </figcaption>
          </figure>

          <div className="roles-grid">
            <article className="role-card hero-role">
              <img src="/crest-heroes.png" alt="" aria-hidden="true" />
              <div className="role-number">01</div>
              <div className="role-copy">
                <p className="role-label">Choose your side</p>
                <h3>Stand together<br />as <em>Heroes</em></h3>
                <p>Combine distinct classes, solve the dungeon’s rituals, and protect the souls that keep your enemy from growing stronger.</p>
              </div>
            </article>
            <article className="role-card overlord-role">
              <img src="/crest-overlord.png" alt="" aria-hidden="true" />
              <div className="role-number">02</div>
              <div className="role-copy">
                <p className="role-label">Rule the dark</p>
                <h3>Become the<br /><em>Overlord</em></h3>
                <p>Hunt the party on your terms. Devour souls, awaken your lair, and turn every room into a decision the heroes will regret.</p>
              </div>
            </article>
          </div>

          <div className="feature-strip">
            <div><b>01</b><span><strong>Asymmetric by design</strong>Two sides. Different powers. One shared story.</span></div>
            <div><b>02</b><span><strong>A dungeon that shifts</strong>Routes, threats, and tactics change every hunt.</span></div>
            <div><b>03</b><span><strong>Built for memorable nights</strong>Fast reads, hard choices, loud victories.</span></div>
          </div>
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="page-shell studio-grid">
          <div className="studio-statement">
            <div className="eyebrow"><span /> Prigod Games</div>
            <h2>We build the games<br />we can’t stop<br /><em>thinking about.</em></h2>
          </div>
          <div className="studio-copy">
            <p className="dropcap">We are an independent game studio driven by a simple idea: multiplayer is at its best when players create the story together.</p>
            <p>That means strong roles, readable worlds, and systems that keep producing the kind of moments you talk about after the session ends.</p>
            <a className="dark-link" href={githubUrl} target="_blank" rel="noreferrer">See what we’re building <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="page-shell principles">
          <article><span>01</span><h3>Player stories first</h3><p>Mechanics should create memories, not just numbers.</p></article>
          <article><span>02</span><h3>Depth you can read</h3><p>Rich choices with clear feedback and purposeful detail.</p></article>
          <article><span>03</span><h3>Small team, sharp vision</h3><p>Focused worlds made with care, curiosity, and conviction.</p></article>
        </div>
      </section>

      <section className="journey-section" id="journey">
        <div className="journey-bg" />
        <div className="page-shell journey-content">
          <div className="eyebrow light"><span /> Development journey</div>
          <h2>The first gate<br />is <em>opening.</em></h2>
          <p>Project Overlord is actively taking shape. Follow the repository for new systems, experiments, and milestones from inside the dungeon.</p>
          <a className="button button-outline" href={githubUrl} target="_blank" rel="noreferrer">Follow on GitHub <span aria-hidden="true">↗</span></a>

          <div className="milestones" aria-label="Development milestones">
            <div className="milestone complete"><span>01</span><div><strong>Core hunt</strong><small>Playable foundation</small></div></div>
            <div className="milestone current"><span>02</span><div><strong>Dungeon rising</strong><small>Systems &amp; polish</small></div></div>
            <div className="milestone"><span>03</span><div><strong>First outsiders</strong><small>Playtesting</small></div></div>
            <div className="milestone"><span>04</span><div><strong>Into the world</strong><small>Release</small></div></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-top">
          <a className="brand footer-brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-name">Prigod <i>Games</i></span>
          </a>
          <p>Independent worlds.<br />Unforgettable consequences.</p>
          <div className="footer-links">
            <a href="#game">The game</a><a href="#studio">Studio</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="page-shell footer-bottom">
          <span>© {new Date().getFullYear()} Prigod Games</span>
          <span>Forged in Europe</span>
        </div>
      </footer>
    </main>
  );
}
