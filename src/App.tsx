
import { useState } from 'react'
import './App.css'

const leadership = [
  { id: 1, name: 'Adam B. Sarr', position: 'Chairperson' },
  { id: 2, name: 'Paul Bass', position: 'President' },
  { id: 3, name: 'Isatou Touray', position: 'Vice President' },
  { id: 4, name: 'B Sarjo. Sarr', position: 'Secretary' },
  { id: 5, name: 'Amadou S. Jallow', position: 'Assistant Secretary' },
  { id: 6, name: 'Muhammed Faye', position: 'Auditor' },
  { id: 7, name: 'Maimuna Sowe', position: 'Assistant Auditor' },
  { id: 8, name: 'Ebou Joof', position: 'Treasurer' },
  { id: 9, name: 'Ellen Mendy', position: 'Assistant Treasurer' },
  { id: 10, name: 'Ebrima Faye', position: 'Public Relations Officer' },
  { id: 11, name: 'Rohey Bass', position: 'Assistant Public Relations Officer' },
  { id: 12, name: 'Musa Bah', position: 'Human Resource Officer' },
  { id: 13, name: 'Ebrima Kah', position: 'Assistant Human Resource Officer' },
  { id: 14, name: 'Ebrima M. Sarr', position: 'Youth Mobilizer' },
  { id: 15, name: 'Haddy Sowe', position: 'Assistant Youth Mobilizer' },
  { id: 16, name: 'Adama Jallow', position: 'Organiser' },
  { id: 17, name: 'Amie Sarr', position: 'Assistant Organiser' },
  { id: 18, name: 'Mariama Jallow', position: 'Sports Committee Member' },
  { id: 19, name: 'Aminata Sarr', position: 'Sports Committee Member' },
  { id: 20, name: 'Louie Bass', position: 'Sports Committee Member' },
  { id: 21, name: 'Ebrima Hydara', position: 'Sports Committee Member' },
  { id: 22, name: 'Abdoulie Sarr', position: 'Sports Committee Member' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVIGATION BAR */}
      <header className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo">
          <img
             src={`${import.meta.env.BASE_URL}images/aysa-logo.png`}
  alt="AYSA Official Logo"
  className="logo-image"
          />

          <div>
            <h2>Amdallai Youth</h2>
            <p>&amp; Sports Association</p>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav id="main-navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#leadership" onClick={() => setMenuOpen(false)}>Leadership</a>
          <a href="#governance" onClick={() => setMenuOpen(false)}>Governance</a>
          <a href="#constitution" onClick={() => setMenuOpen(false)}>Constitution</a>
          <a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a>
          <a href="#activities" onClick={() => setMenuOpen(false)}>Activities &amp; Events</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Our Programs</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <main>
        {/* HOME / HERO SECTION */}
<section className="hero" id="home">
  <div className="hero-overlay">
    <div className="hero-content">

      <p className="hero-tag">
        AMDALLAI YOUTH &amp; SPORTS ASSOCIATION
      </p>

      <h1>
        Empowering Youth.
        <span> Building Our Community.</span>
      </h1>

      <p className="hero-description">
        Together, we empower young people, promote sports,
        encourage education and create opportunities for
        the sustainable development of Amdallai.
      </p>

      <div className="hero-buttons">
        <a href="#about" className="hero-button">
          Discover Our Association
        </a>

        <a href="#programs" className="hero-button secondary-button">
          Explore Our Programs
        </a>
      </div>

    </div>
  </div>
</section>
        {/* ABOUT US SECTION */}
<section className="about" id="about">
  <div className="section-heading">
    <span>GET TO KNOW US</span>
    <h2>About Our Association</h2>
  </div>

  <div className="about-intro">
    <p>
      Amdallai Youth &amp; Sports Association (AYSA) is a
      community-based association located in Amdallai Village,
      Lower Nuimi District, North Bank Region, The Gambia.
    </p>

    <p>
      We bring people together to promote youth development,
      unity, education, sports, cultural activities and
      sustainable community development.
    </p>
  </div>

  <div className="about-values">

    {/* HISTORY */}
    <article className="about-card">
      <div className="about-card-icon" aria-hidden="true">H</div>
      <h3>Our History</h3>
      <p>
        AYSA was established through the collective commitment
        of community members who recognised the importance of
        working together to improve relationships and contribute
        to the development of the association and the wider village.
      </p>
    </article>

    {/* VISION */}
    <article className="about-card">
      <div className="about-card-icon" aria-hidden="true">V</div>
      <h3>Our Vision</h3>
      <p>
        To build a united, empowered and self-reliant community
        where young people have opportunities to develop their
        talents and contribute meaningfully to society.
      </p>
    </article>

    {/* MISSION */}
    <article className="about-card">
      <div className="about-card-icon" aria-hidden="true">M</div>
      <h3>Our Mission</h3>
      <p>
        To promote youth empowerment, education, sports,
        leadership, entrepreneurship and community participation
        through inclusive and sustainable initiatives.
      </p>
    </article>

  </div>

  {/* OBJECTIVES */}
  <div className="objectives">
    <div className="objectives-heading">
      <span>OUR PURPOSE</span>
      <h3>Our Main Objectives</h3>
      <p>
        We are committed to achieving the following objectives
        for the benefit of our community.
      </p>
    </div>

    <ul>
      <li>
        <span>✓</span>
        Promote unity, peace and cooperation within the community.
      </li>

      <li>
        <span>✓</span>
        Support education, digital literacy and skills development.
      </li>

      <li>
        <span>✓</span>
        Encourage sports, recreation and talent development.
      </li>

      <li>
        <span>✓</span>
        Promote entrepreneurship and youth employment.
      </li>

      <li>
        <span>✓</span>
        Support environmental protection and community sanitation.
      </li>

      <li>
        <span>✓</span>
        Encourage women's participation and social inclusion.
      </li>

      <li>
        <span>✓</span>
        Promote sustainable agriculture and community development.
      </li>
    </ul>
  </div>
</section>

        {/* LEADERSHIP SECTION */}
        <section className="leadership" id="leadership">
          <div className="section-heading">
            <span>OUR LEADERSHIP</span>
            <h2>Meet the Executive Committee</h2>
          </div>

          <p className="leadership-intro">
            Meet the members entrusted with supporting the administration
            and activities of Amdallai Youth &amp; Sports Association.
          </p>

          <div className="leadership-grid">
            {leadership.map((member) => (
              <article className="leader-card" key={member.id}>
                <div className="leader-avatar">
                  {member.name
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join('')
                    .toUpperCase()}
                </div>

                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </article>
            ))}
          </div>
        </section>
{/* GOVERNANCE SECTION */}
<section className="governance" id="governance">
  <div className="section-heading">
    <span>HOW WE ARE ORGANISED</span>
    <h2>Executive Committee &amp; Governance</h2>
  </div>

  <p className="governance-intro">
    AYSA is governed by its General Membership, which elects
    an Executive Committee responsible for the administration,
    management and implementation of the association's activities.
  </p>

  <div className="governance-grid">

    <article className="governance-card">
      <h3>General Membership</h3>
      <p>
        The highest governing body of AYSA. Members participate
        in general meetings, elect executive officers, exercise
        their voting rights and contribute to important decisions
        concerning the association.
      </p>
    </article>

    <article className="governance-card">
      <h3>Executive Committee</h3>
      <p>
        Responsible for the day-to-day administration,
        coordination of programmes, implementation of
        decisions and promotion of accountability within AYSA.
      </p>
    </article>

    <article className="governance-card">
      <h3>President &amp; Vice President</h3>
      <p>
        Provide leadership, supervise executive activities,
        represent AYSA and help implement decisions.
        The Vice President acts in the President's absence.
      </p>
    </article>

    <article className="governance-card">
      <h3>Secretary &amp; Assistant Secretary</h3>
      <p>
        Maintain official records, prepare meeting agendas,
        record minutes, document decisions and handle
        the association's correspondence.
      </p>
    </article>

    <article className="governance-card">
      <h3>Treasury &amp; Audit</h3>
      <p>
        The Treasurer manages financial records and funds,
        prepares financial reports and supports proper
        financial management. The Auditor examines
        the association's financial records and accounts.
      </p>
    </article>

    <article className="governance-card">
      <h3>Other Executive Officers</h3>
      <p>
        Support public relations, human resources, youth
        mobilisation, organisation, sports activities
        and the coordination of community initiatives.
      </p>
    </article>

    <article className="governance-card">
      <h3>Advisers</h3>
      <p>
        Provide guidance on the association's development,
        planning, resource mobilisation, risk management
        and important organisational decisions.
      </p>
    </article>

  </div>
</section>
{/* CONSTITUTION SECTION */}
<section className="constitution" id="constitution">
  <div className="section-heading">
    <span>OUR GOVERNING DOCUMENT</span>
    <h2>AYSA Constitution</h2>
  </div>

  <div className="constitution-content">
    <div className="constitution-icon" aria-hidden="true">Document</div>

    <h3>Our Constitution, Our Foundation</h3>

    <p>
      The Constitution of Amdallai Youth &amp; Sports Association
      establishes the principles, rules and guidelines that govern
      the association, its membership, leadership and activities.
    </p>

    <p>
      It promotes transparency, accountability, democratic
      participation and responsible leadership while providing
      a framework for the association's operations and development.
    </p>

    <div className="constitution-notice">
      <span>Official document coming soon</span>

      <p>
        The Constitution will be published here following
        review and approval of the public version by the
        AYSA Executive Committee.
      </p>
    </div>
  </div>
</section>
{/* MEMBERSHIP SECTION */}
<section className="membership" id="membership">
  <div className="section-heading">
    <span>BECOME PART OF OUR COMMUNITY</span>
    <h2>Membership</h2>
  </div>

  <p className="membership-intro">
    AYSA welcomes individuals who share our vision and are
    committed to supporting youth development, sports and
    community progress in Amdallai.
  </p>

  <div className="membership-content">

    <article className="membership-card">
      <h3>Who Can Become a Member?</h3>
      <p>
        Membership is open to individuals who accept and
        support the aims, objectives and principles of AYSA
        and are willing to abide by the Association's
        Constitution, rules and regulations.
      </p>
    </article>

    <article className="membership-card">
      <h3>Membership Requirements</h3>
      <p>
        Prospective members must accept the Association's
        Constitution and pay the prescribed membership
        registration fee before being officially registered.
      </p>
    </article>

    <article className="membership-card">
      <h3>Members' Rights</h3>
      <p>
        Registered and active members who fulfil the
        membership requirements may participate in
        association activities, exercise voting rights
        and contest for eligible positions, subject to
        the provisions of the Constitution.
      </p>
    </article>

  </div>

  <div className="membership-notice">
    <h3>Interested in Joining AYSA?</h3>

    <p>
      Contact the Association's Executive Committee for
      information about membership registration and the
      applicable membership fee.
    </p>

    <span>
      Membership enquiries: Contact details coming soon.
    </span>
  </div>
</section>
{/* ACTIVITIES & EVENTS SECTION */}
<section className="activities" id="activities">
  <div className="section-heading">
    <span>WHAT WE DO</span>
    <h2>Activities &amp; Events</h2>
  </div>

  <p className="activities-intro">
    AYSA brings young people and community members together
    through initiatives focused on youth development,
    sports participation and community engagement.
  </p>

  <div className="activities-grid">

    {/* YOUTH DEVELOPMENT */}
    <article className="activity-card">
      <div className="activity-image">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
          alt="Young people participating in a group activity"
          loading="lazy"
        />
      </div>

      <div className="activity-content">
        <span className="activity-category">
          YOUTH EMPOWERMENT
        </span>

        <h3>Youth Development</h3>

        <p>
          Initiatives that encourage young people to develop
          their skills, leadership abilities, knowledge
          and confidence.
        </p>
      </div>
    </article>

    {/* SPORTS AND RECREATION */}
    <article className="activity-card">
      <div className="activity-image">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018"
          alt="Football players participating in a match"
          loading="lazy"
        />
      </div>

      <div className="activity-content">
        <span className="activity-category">
          SPORTS &amp; FITNESS
        </span>

        <h3>Sports &amp; Recreation</h3>

        <p>
          Sporting and recreational initiatives that promote
          teamwork, unity, discipline, physical fitness
          and healthy living.
        </p>
      </div>
    </article>

    {/* COMMUNITY ENGAGEMENT */}
    <article className="activity-card">
      <div className="activity-image">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
          alt="People coming together for a community activity"
          loading="lazy"
        />
      </div>

      <div className="activity-content">
        <span className="activity-category">
          COMMUNITY PARTICIPATION
        </span>

        <h3>Community Engagement</h3>

        <p>
          Community initiatives that encourage participation,
          cooperation, volunteerism and sustainable
          development in Amdallai.
        </p>
      </div>
    </article>

  </div>
</section>
{/* OUR PROGRAMS SECTION */}
<section className="programs" id="programs">
  <div className="section-heading">
    <span>OUR COMMITMENT</span>
    <h2>Our Areas of Focus</h2>
  </div>

  <p className="programs-intro">
    AYSA is committed to creating opportunities for young
    people and supporting the sustainable development of
    our community through four key areas of focus.
  </p>

  <div className="programs-grid">

    {/* YOUTH EMPOWERMENT */}
    <article className="program-card">
      <div className="program-icon" aria-hidden="true">01</div>

      <h3>Youth Empowerment</h3>

      <p>
        Encouraging young people to develop leadership skills,
        confidence, creativity and responsibility while
        preparing them to become active contributors to society.
      </p>
    </article>

    {/* SPORTS AND RECREATION */}
    <article className="program-card">
      <div className="program-icon" aria-hidden="true">02</div>

      <h3>Sports &amp; Recreation</h3>

      <p>
        Promoting teamwork, physical fitness, discipline
        and unity through sporting activities, competitions
        and recreational programmes.
      </p>
    </article>

    {/* EDUCATION AND SKILLS DEVELOPMENT */}
    <article className="program-card">
      <div className="program-icon" aria-hidden="true">03</div>

      <h3>Education &amp; Skills Development</h3>

      <p>
        Supporting learning, knowledge sharing, digital
        literacy and educational opportunities that help
        young people build practical skills for the future.
      </p>
    </article>

    {/* COMMUNITY DEVELOPMENT */}
    <article className="program-card">
      <div className="program-icon" aria-hidden="true">04</div>

      <h3>Community Development</h3>

      <p>
        Supporting initiatives that promote community
        participation, social welfare, environmental
        responsibility and sustainable development in Amdallai.
      </p>
    </article>

  </div>
</section>


        {/* CONTACT US SECTION */}
<section className="contact" id="contact">
  <div className="section-heading">
    <span>GET IN TOUCH</span>
    <h2>Contact Our Association</h2>
  </div>

  <p className="contact-intro">
    We welcome questions, suggestions, partnerships and
    opportunities to work together for the development
    of our community.
  </p>

  <div className="contact-grid">

    {/* LOCATION */}
    <article className="contact-card">
      <div className="contact-icon" aria-hidden="true">Location</div>
      <h3>Our Location</h3>
      <p>Amdallai Village, Lower Nuimi</p>
      <p>North Bank Region, The Gambia</p>
    </article>

    {/* EMAIL */}
    <article className="contact-card">
      <div className="contact-icon" aria-hidden="true">Email</div>
      <h3>Email Address</h3>
      <p>Official email coming soon.</p>
    </article>

    {/* TELEPHONE */}
    <article className="contact-card">
      <div className="contact-icon" aria-hidden="true">Phone</div>
      <h3>Telephone</h3>
      <p>Official contact number coming soon.</p>
    </article>

    {/* GENERAL ENQUIRIES */}
    <article className="contact-card">
      <div className="contact-icon" aria-hidden="true">Enquiries</div>
      <h3>General Enquiries</h3>
      <p>
        For membership, partnerships and other enquiries,
        please contact the AYSA Executive Committee.
      </p>
    </article>

  </div>
</section>
      </main>

      {/* WEBSITE FOOTER */}
      {/* FOOTER SECTION */}
<footer className="footer">
  <div className="footer-content">

    {/* ASSOCIATION INFORMATION */}
    <div className="footer-about">
      <div className="footer-logo">
        <img
          src="/images/aysa-logo.png"
          alt="AYSA Official Logo"
        />

        <h2>Amdallai Youth &amp; Sports Association</h2>
      </div>

      <p>
        Working together to empower young people,
        promote sports and support the sustainable
        development of our community.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div className="footer-links">
      <h3>Quick Links</h3>

      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#leadership">Leadership</a>
      <a href="#governance">Governance</a>
      <a href="#constitution">Constitution</a>
      <a href="#membership">Membership</a>
      <a href="#activities">Activities &amp; Events</a>
      <a href="#programs">Our Programs</a>
      <a href="#contact">Contact Us</a>
    </div>

    {/* LOCATION */}
    <div className="footer-location">
      <h3>Our Location</h3>

      <p>
        Amdallai Village,<br />
        Lower Nuimi District,<br />
        North Bank Region,<br />
        The Gambia.
      </p>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Amdallai Youth &amp; Sports
      Association (AYSA). All rights reserved.
    </p>

    <p>Working together for a better community.</p>
  </div>
</footer>
    </>
  )
}

export default App
