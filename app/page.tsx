const quickLinks = [
  {
    label: "Register for summer parks",
    href: "https://www.yorkcity.org/summer-parks-program-registration-2026/",
  },
  {
    label: "Youth programs and activities",
    href: "https://www.yorkcity.org/visitor/programs-activities/",
  },
  {
    label: "Parks & Recreation Bureau",
    href: "https://www.yorkcity.org/city-services/departments/public-works/recreation-parks-bureau/",
  },
  {
    label: "Heritage Rail Trail",
    href: "https://yorkcountypa.gov/1004/York-County-Heritage-Rail-Trail-Park",
  },
];

const featuredCards = [
  {
    eyebrow: "Youth programs",
    title: "Summer Parks Program",
    body: "York City's 2026 Summer Parks Program runs June 15 through July 23, Monday through Thursday, 9 AM to 4 PM, for ages 6-13. The Voni Grimes esports camp serves ages 13-15.",
    detail: "Locations include Allen Park, Yorktown Park, Farquhar Park, Memorial Park Complex, and Voni Grimes Gym.",
    cta: "Program details",
    href: "https://www.yorkcity.org/visitor/programs-activities/",
  },
  {
    eyebrow: "Outdoors",
    title: "Parks, trails, and lake days",
    body: "Spend the day at Kiwanis Lake, Farquhar Park, Penn Park, Memorial Park, or the Heritage Rail Trail, a 27-mile county park that continues through York City.",
    detail: "Remember: city parks are closed from 10 PM to 6 AM unless a permit or authorization applies.",
    cta: "Explore the trail",
    href: "https://yorkcountypa.gov/1004/York-County-Heritage-Rail-Trail-Park",
  },
  {
    eyebrow: "Downtown",
    title: "Arts, food, and Sundays in the City",
    body: "Downtown York's shops, restaurants, galleries, public spaces, and cultural destinations make summer weekends easy to plan.",
    detail: "Look for seasonal programs like Sundays in the City, summer concerts, Juneteenth, and Yorkfest.",
    cta: "Visit Downtown York",
    href: "https://downtownyorkpa.com/",
  },
];

const serviceCards = [
  {
    title: "Beat the heat",
    items: [
      "Check on neighbors, older adults, and pets during heat advisories.",
      "Use shaded parks and indoor community destinations during peak afternoon heat.",
      "Carry water when walking, biking, or attending outdoor events.",
    ],
  },
  {
    title: "Move around York",
    items: [
      "Walk or bike the Heritage Rail Trail and downtown corridors.",
      "Watch for active railroad tracks along portions of the Rail Trail.",
      "Review city street closures and parking restrictions before large events.",
    ],
  },
  {
    title: "Keep parks welcoming",
    items: [
      "Dispose of trash in park containers and leave picnic areas clean.",
      "Alcohol is not permitted in York City parks.",
      "Reserve parks or request permits through York City Parks & Recreation.",
    ],
  },
];

const eventHighlights = [
  "Summer Concert Series",
  "Juneteenth Celebration",
  "Free Tennis for Kids",
  "Memorial Park Batting Cages",
  "Yorkfest Arts Festival",
  "Sundays in the City",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="York Summer Guide home">
            <span className="brand-mark">Y</span>
            <span>York Summer Guide</span>
          </a>
          <div className="nav-links">
            <a href="#programs">Programs</a>
            <a href="#events">Events</a>
            <a href="#resources">Resources</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">York City, Pennsylvania</p>
            <h1>Make the most of summer in the White Rose City.</h1>
            <p className="lede">
              A one-stop seasonal guide for city youth programs, parks, trails,
              downtown events, public services, and practical tips for hot days
              in York.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#programs">
                Plan your summer
              </a>
              <a
                className="button secondary"
                href="https://www.yorkcity.org/"
              >
                Official city website
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Summer Parks Program summary">
            <p className="panel-label">Featured city program</p>
            <h2>Summer Parks Program 2026</h2>
            <dl>
              <div>
                <dt>When</dt>
                <dd>June 15 - July 23</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>Mon-Thu, 9 AM - 4 PM</dd>
              </div>
              <div>
                <dt>Ages</dt>
                <dd>6-13; esports 13-15</dd>
              </div>
              <div>
                <dt>Cost</dt>
                <dd>$100 city / $150 non-city</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="quick-strip" aria-label="Quick links">
        {quickLinks.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
            <span aria-hidden="true">-&gt;</span>
          </a>
        ))}
      </section>

      <section className="section" id="programs">
        <div className="section-heading">
          <p className="kicker">Start here</p>
          <h2>Programs, places, and summer plans</h2>
          <p>
            Modeled after a civic summer hub, this guide groups York's most
            useful seasonal information into simple paths for families,
            residents, and visitors.
          </p>
        </div>

        <div className="card-grid">
          {featuredCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <p className="eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className="detail">{card.detail}</p>
              <a href={card.href}>{card.cta}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="event-band" id="events">
        <div>
          <p className="kicker">On your calendar</p>
          <h2>Seasonal highlights around York</h2>
          <p>
            Check official event pages before heading out, because times,
            locations, and weather plans can change.
          </p>
        </div>
        <ul>
          {eventHighlights.map((event) => (
            <li key={event}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="section resources" id="resources">
        <div className="section-heading">
          <p className="kicker">Resident resources</p>
          <h2>Helpful reminders for safe, easy summer days</h2>
        </div>

        <div className="service-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact">
        <div>
          <p className="kicker">Need city help?</p>
          <h2>York City Recreation & Parks Bureau</h2>
          <p>
            Office: 101 South George Street, York, PA 17401. Main city phone:
            (717) 849-2221. Recreation office: (717) 854-1587.
          </p>
        </div>
        <a className="button primary" href="https://www.yorkcity.org/contact/">
          Contact the city
        </a>
      </section>

      <footer>
        <p>
          Built as a York, PA summer information concept using public sources
          from York City, York County, and Downtown York.
        </p>
        <div>
          <a href="https://www.yorkcity.org/">YorkCity.org</a>
          <a href="https://yorkcountypa.gov/">York County PA</a>
          <a href="https://downtownyorkpa.com/">Downtown York</a>
        </div>
      </footer>
    </main>
  );
}
