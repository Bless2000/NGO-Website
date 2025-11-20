import React, { useEffect, useState } from 'react';
import wisdomYao from './assets/Wisdom Yao Exe.jpg';
import ebenWesti from './assets/Eben Westi.jpg';
import agnesTsikata from './assets/Chairperson, CEO Agnes Tsikata.jpg';
import rosemaryGyasi from './assets/Rosemary Gyasi, Secretary.jpg';
import jasperDunya from './assets/asper Dunya, environmental, officer..jpg';
import dennisAmoako from './assets/Dennis Amoako.jpg';
import aloryitoHunor from './assets/Aloryito Hunor..jpg';
import nyaledzigborLumor from './assets/Nyaledzigbor Lumor:planer , reforestation worker..jpg';
import akplorwotorDzita from './assets/Akplorwotor Dzita Agbledome.jpg';
import firewood from './assets/Firewood.jpg';
import heroImg from './assets/HeroImg.jpg';
import mangroveFarmers from './assets/icture of mangrove farmers.jpg';
import mangrovesBeingPlanted from './assets/Mangroves being planted.jpg';
import pictreOfWorkers from './assets/PictreofWorkers.jpg';
import skillsTraining from './assets/SkillsTrainingForFishFarming.jpg';
import tunuWorkers from './assets/TunuWorkers.jpg';
import videoOfMangrove1 from './assets/videos/Video OfMangrove1.mp4';
import plantingMangroveSeeds from './assets/videos/PlantingMangroveSeeds.mp4';
import fishesDeadOnTheSurface from './assets/videos/FishesDeadOnTheSurface.mp4';
import mangrovesBeingCutDown from './assets/videos/Mangroves being cut down.mp4';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerOffset = 150; // Adjust this value if your fixed header height changes
          const elementPosition = target.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setMenuOpen(false); // Close menu on link click
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* ============================================
         HEADER & NAVIGATION
         ============================================ */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <nav className="nav">
            <a href="#home" className="nav__logo">D-SART</a>
            <ul className={`nav__links ${menuOpen ? 'mobile-active' : ''}`}>
                <li><a href="#home" className="nav__link">Home</a></li>
                <li><a href="#about" className="nav__link">About</a></li>
                <li><a href="#project" className="nav__link">Our Project</a></li>
                <li><a href="#gallery" className="nav__link">Gallery</a></li>
                <li><a href="#partnership" className="nav__link">Partner</a></li>
                <li><a href="#team" className="nav__link">Team</a></li>
                <li><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
            <a href="#partnership" className="btn btn-primary">Donate Now</a>
            <button className="mobile-menu-btn" onClick={toggleMenu}>{menuOpen ? '✕' : '☰'}</button>
        </nav>
    </header>

      {/* Contact Banner */}
      <div className="contact-banner">
        📞 Contact us: 0574860230 | Saving Coasts, Saving Lives
      </div>

      {/* ----------------------------------Hero Section---------------------------------------------*/}
    <section className="hero" id="home">
        {/* Animated Background */}
        <div className="hero__background"></div>
        
        {/* Gradient Overlay */}
        <div className="hero__overlay"></div>
        
        {/* Floating Shapes */}
        <div className="hero__shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
        </div>
        
        {/* Hero Content */}
        <div className="hero__content">
            <div className="hero__badge">🌿 160+ Years of Conservation Legacy</div>
            <h1 className="hero__title">
                Restoring <span className="hero__title-highlight">Hope</span>,<br />
                One Mangrove at a Time
            </h1>
            <p className="hero__subtitle">
                Join D-SART in our mission to restore vital coastal ecosystems, empower communities, and build a sustainable future for West Africa through science-based mangrove conservation.
            </p>
            <div className="hero__buttons">
                <a href="#partnership" className="btn btn-primary">Become a Partner</a>
                <a href="#project" className="btn btn-secondary">Explore Our Impact</a>
            </div>
        </div>
        
       
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        </div>
    </section>

      {/* ============================================
         MISSION SECTION
         ============================================ */}
      <section className="mission" id="about">
        <div className="container">
            <div className="section-header">
                <p className="section-subtitle">Our Mission</p>
                <h2 className="section-title">Planting, Protecting, and Preserving Mangroves</h2>
                <p className="section-description">
                    D-SART Wildlife Aquatic Conservation is a non-profit organization dedicated to the preservation of mangrove ecosystems and the protection of aquatic life in Ghana's coastal communities. Through comprehensive conservation efforts, we restore vital coastal habitats that provide environmental and socio-economic benefits for generations to come.
                </p>
            </div>

            {/* Mission Focus Areas */}
            <div className="mission-grid">
                <div className="mission-card">
                    <div className="mission-icon">🌱</div>
                    <h3>Mangrove Reforestation</h3>
                    <p>Undertaking extensive mangrove reforestation by planting native species and restoring degraded areas to enhance ecosystem resilience against climate change.</p>
                </div>

                <div className="mission-card">
                    <div className="mission-icon">🐟</div>
                    <h3>Biodiversity Conservation</h3>
                    <p>Implementing marine protected areas and sustainable fishing regulations to preserve diverse aquatic life and prevent overexploitation of vital species.</p>
                </div>

                <div className="mission-card">
                    <div className="mission-icon">👥</div>
                    <h3>Community Engagement</h3>
                    <p>Actively involving local communities through education, training, alternative livelihoods, and empowering residents to monitor and protect coastal ecosystems.</p>
                </div>

                <div className="mission-card">
                    <div className="mission-icon">🔬</div>
                    <h3>Scientific Research</h3>
                    <p>Conducting ecological research to understand mangrove dynamics, carbon sequestration, and climate change impacts to inform sustainable conservation practices.</p>
                </div>
            </div>

            {/* Crisis Alert Box */}
            <div className="crisis-alert">
                <h3><span>⚠️</span> Urgent Crisis in Coastal Communities</h3>
                <p>
                    Climatic conditions and livelihoods in Ghana's coastal areas are deteriorating rapidly. Fresh water sources that once sustained communities have turned saline, making it impossible for tilapia—the main economic resource—to breed. This environmental disaster threatens the survival of thousands of families who depend on these ecosystems.
                </p>
                <div className="affected-areas">
                    <span className="area-tag">Srogbe</span>
                    <span className="area-tag">Whuti</span>
                    <span className="area-tag">Atorkor</span>
                    <span className="area-tag">Dzita</span>
                    <span className="area-tag">Anloga</span>
                </div>
            </div>
        </div>
    </section>

      {/* ============================================
         HERITAGE SECTION
         ============================================ */}
      <section className="heritage">
        <div className="container">
          <div className="heritage-grid">
            <div className="heritage-text">
              <p className="section-subtitle">Our Legacy</p>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>A Living Legacy Since 1721</h2>
              <h3>Brief Biography of the Inherited Mangrove</h3>

              <p>The inherited mangrove dates back to 1860, when the forefathers of the present custodians first settled along the coastal wetlands and began nurturing the mangrove ecosystem. Passed down through generations, this mangrove heritage has remained under the care of the same local family and community, who have preserved it as both a natural shield and a source of livelihood.</p>

              <p>Our legacy also extends to 1721, originating from the southern part of the Volta Region, encompassing areas such as Agbatsivi, Agortoe, Salo Akpashiafe, Agbledomi, Akplorwotokor, Dzita, Anyanui, Tunu, Bomego, Gamenu, and Vededeanu.</p>

              <p>Over the decades, the true owners have continued planting, protecting, and restoring the mangrove to sustain fish habitats, prevent erosion, and support biodiversity. Despite modern challenges, their commitment to conservation has never wavered. Today, the descendants proudly uphold the legacy, integrating traditional knowledge with modern practices to ensure that the mangrove thrives for future generations.</p>

              <div className="heritage-highlight">
                <p>This living heritage stands as a symbol of resilience, stewardship, and environmental continuity — a testament to over 200 years of community-driven conservation.</p>
              </div>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">1721</div>
                <div className="timeline-content">
                  <h4>Ancient Roots</h4>
                  <p>Legacy established in the southern Volta Region, encompassing various communities.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1860</div>
                <div className="timeline-content">
                  <h4>The Beginning</h4>
                  <p>Forefathers settle along coastal wetlands and begin nurturing the mangrove ecosystem</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">1721-2025</div>
                <div className="timeline-content">
                  <h4>Generational Stewardship</h4>
                  <p>Multiple generations continue planting, protecting, and restoring the mangroves</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">Today</div>
                <div className="timeline-content">
                  <h4>Modern Conservation</h4>
                  <p>Descendants integrate traditional knowledge with modern practices for sustainable future</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">200+ Years</div>
                <div className="timeline-content">
                  <h4>Living Heritage</h4>
                  <p>A testament to community-driven conservation and environmental continuity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         STATS SECTION
         ============================================ */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">7,500+</div>
              <div className="stat-label">Hectares to Restore</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">300</div>
              <div className="stat-label">Families to Resettle</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1,200</div>
              <div className="stat-label">Sustainable Jobs Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">UN SDGs Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         PROJECT SECTION
         ============================================ */}
      <section className="project" id="project">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">What We Do</p>
            <h2 className="section-title">Our Transformative Project</h2>
            <p className="section-description">
              This initiative is designed to restore degraded ecosystems, support displaced communities, and create lasting environmental and economic impact.
            </p>
          </div>

          <div className="project-grid">
            <div className="project-card">
              <div className="project-icon">🌿</div>
              <h3>Ecosystem Restoration</h3>
              <ul>
                <li>Restore degraded coastal ecosystems</li>
                <li>Revive marine biodiversity</li>
                <li>Protect coastlines from erosion</li>
                <li>Create carbon sinks for climate mitigation</li>
              </ul>
            </div>

            <div className="project-card">
              <div className="project-icon">🏘️</div>
              <h3>Community Support</h3>
              <ul>
                <li>Resettle 300 displaced families</li>
                <li>Provide housing and water access</li>
                <li>Offer livelihood support programs</li>
                <li>Education and training initiatives</li>
              </ul>
            </div>

            <div className="project-card">
              <div className="project-icon">💼</div>
              <h3>Sustainable Employment</h3>
              <ul>
                <li>Create 1,200 green jobs</li>
                <li>Develop ecotourism opportunities</li>
                <li>Support local enterprises</li>
                <li>Build long-term economic resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         BENEFITS SECTION
         ============================================ */}
      <section className="benefits">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Impact</p>
            <h2 className="section-title">Why Mangrove Restoration Matters</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌊</div>
              <h3>Coastal Protection</h3>
              <p>Reduce coastal erosion and protect communities from storm surges and rising sea levels</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Climate Action</h3>
              <p>Absorb carbon dioxide and reduce greenhouse gas emissions significantly</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🐠</div>
              <h3>Biodiversity Haven</h3>
              <p>Provide critical habitat for coastal flora, fauna, and marine species</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">👨‍👩‍👧‍👦</div>
              <h3>Community Resilience</h3>
              <p>Support local communities with sustainable livelihoods and economic opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         GALLERY SECTION
         ============================================ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Our Work in Action</h2>
            <p className="gallery-intro">
              From restoration to community empowerment — witness the transformation happening along our coastlines
            </p>
          </div>

          <div className="gallery-grid">
            {/* 1. Opening Video - Thriving Mangrove Forest */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={videoOfMangrove1} type="video/mp4" />
                </video>
              </div>
              <div className="video-caption">
                <div className="video-caption-title">
                  <span>▶</span>
                  <div>
                    <h3>Thriving Mangrove Ecosystem</h3>
                    <p>Experience the beauty and biodiversity of a healthy mangrove forest</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Nursery Preparation */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img src={mangrovesBeingPlanted} alt="Nursery preparation" className="gallery-image" />
              </div>
              <div className="gallery-overlay">
                <h3>Nursery Preparation</h3>
                <p>Tunu workers carefully filling nutrient-rich black soil into nursery polythene bags, creating the foundation for new mangrove life</p>
              </div>
            </div>

            {/* 3. Active Planting Site */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={plantingMangroveSeeds} type="video/mp4" />
                </video>
              </div>
              <div className="gallery-overlay">
                <h3>Mangrove Planting at Tunu Site</h3>
                <p>Our restoration team at work planting mangrove propagules along the coastal wetlands</p>
              </div>
            </div>

            {/* 4. Community Workers */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img src={tunuWorkers} alt="Tunu workers" className="gallery-image" />
              </div>
              <div className="gallery-overlay">
                <h3>Dedicated Tunu Workers</h3>
                <p>Meet the hardworking community members who are the backbone of our restoration efforts</p>
              </div>
            </div>

            {/* 5. Skills Training */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img src={skillsTraining} alt="Skills training" className="gallery-image" />
              </div>
              <div className="gallery-overlay">
                <h3>Sustainable Livelihood Training</h3>
                <p>Skills training program for sustainable fish farming, empowering communities with alternative income sources</p>
              </div>
            </div>

            {/* New Image - Mangroves Cut for Firewood */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <img src={firewood} alt="Mangroves cut for firewood" className="gallery-image" />
              </div>
              <div className="gallery-overlay">
                <h3>Mangroves Cut for Firewood</h3>
                <p>Mangroves being cut down for firewood, highlighting unsustainable practices.</p>
              </div>
            </div>

            {/* New Video - Devastating Effects */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={fishesDeadOnTheSurface} type="video/mp4" />
                </video>
              </div>
              <div className="video-caption">
                <div className="video-caption-title">
                  <span>▶</span>
                  <div>
                    <h3>The Devastating Impact of Mangrove Loss</h3>
                    <p>Witness the tragic sight of fish dead on the water's surface, a direct result of mangrove destruction.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Closing Video - The Challenge We Face */}
            <div className="gallery-item">
              <div className="gallery-image-container">
                <video controls style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={mangrovesBeingCutDown} type="video/mp4" />
                </video>
              </div>
              <div className="video-caption">
                <div className="video-caption-title">
                  <span>▶</span>
                  <div>
                    <h3>The Challenge: Mangrove Loss</h3>
                    <p>Understanding the urgent need for restoration — witness the impact of deforestation and why our work matters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="gallery-cta">
            <h3>Be Part of the Solution</h3>
            <p>Every image tells a story of hope, resilience, and transformation. Join us in restoring our coastlines and empowering communities.</p>
            <div className="cta-buttons">
              <a href="#partnership" className="btn btn-primary">Partner With Us</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         PARTNERSHIP SECTION
         ============================================ */}
      <section className="partnership" id="partnership">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Join Us</p>
            <h2 className="section-title">Partner With Us</h2>
          </div>

          {/* Partnership Benefits */}
          <div className="partnership-content">
            <p>We are seeking forward-thinking partners to join us in this transformative mission. By sponsoring our project, your organization will:</p>

            <div className="partnership-benefits">
              <li>Demonstrate sustainability leadership and strengthen corporate reputation</li>
              <li>Be featured as a key partner in biodiversity restoration across media, events, and reports</li>
              <li>Align with national and global goals on climate resilience and community empowerment</li>
              <li>Leave a visible legacy of hope, change, and environmental impact</li>
            </div>
          </div>

          {/* Sponsorship Packages */}
          <div className="sponsor-packages">
            <h3>Sponsorship Packages</h3>

            <div className="package">
              <h4>Platinum Sponsor - $50,000+</h4>
              <ul>
                <li>Naming rights on flagship program (e.g., "Mangrove Nursery powered by [Company Name]")</li>
                <li>Prominent logo placement on all campaigns, reports, and community events</li>
                <li>Feature in press releases, newsletters, and social media shout-outs</li>
                <li>Complimentary ESG/biodiversity consulting session with our experts</li>
                <li>Exclusive site visits and progress reports</li>
              </ul>
            </div>

            <div className="package">
              <h4>Gold Sponsor - $25,000 - $49,999</h4>
              <ul>
                <li>Logo placement on major campaign materials</li>
                <li>Recognition in annual reports and newsletters</li>
                <li>Social media features and acknowledgment</li>
                <li>Quarterly impact updates</li>
              </ul>
            </div>

            <div className="package">
              <h4>Silver Sponsor - $10,000 - $24,999</h4>
              <ul>
                <li>Logo on project website and materials</li>
                <li>Social media recognition</li>
                <li>Bi-annual project updates</li>
              </ul>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <a href="#contact" className="btn btn-primary">Get Partnership Information</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         TEAM SECTION
         ============================================ */}
      <section className="team" id="team">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our People</p>
            <h2 className="section-title">Meet Our Leadership Team</h2>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <img src={agnesTsikata} alt="Agnes Tsikata" />
              </div>
              <div className="team-info">
                <h3>Agnes Tsikata</h3>
                <p className="team-role">Chairperson & CEO</p>
                <p className="team-contact">📞 0574860230</p>
                <p className="team-description">Leading our mission with passion and strategic vision for coastal conservation</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={rosemaryGyasi} alt="Rosemary Gyasi" />
              </div>
              <div className="team-info">
                <h3>Rosemary Gyasi</h3>
                <p className="team-role">Secretary</p>
                <p className="team-description">Providing essential administrative support and coordination for the team.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={wisdomYao} alt="Mr. Wisdom Yao Exe" />
              </div>
              <div className="team-info">
                <h3>Mr. Wisdom Yao Exe</h3> 
                <p className="team-role">Director, Project Resource Consultant</p>
                <p className="team-contact">📞 0245964448</p>
                <p className="team-description">Provides expert consultancy on project resources and directorial oversight.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={jasperDunya} alt="Jasper Dunya" />
              </div>
              <div className="team-info">
                <h3>Jasper Dunya</h3>
                <p className="team-role">Environmental Officer</p>
                <p className="team-description">Ensuring scientific excellence in our restoration work</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={dennisAmoako} alt="Dennis Amoako" />
              </div>
              <div className="team-info">
                <h3>Dennis Amoako</h3>
                <p className="team-role">Management Committee member/Finance</p>
                <p className="team-contact">📞 0209279897</p>
                <p className="team-description">Manages the financial aspects and contributes to strategic management decisions.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={aloryitoHunor} alt="Aloryito Hunor" />
              </div>
              <div className="team-info">
                <h3>Aloryito Hunor</h3>
                <p className="team-role">Project Director</p>
                <p className="team-description">Overseeing restoration activities and community engagement</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={nyaledzigborLumor} alt="Nyaledzigbor Lumor" />
              </div>
              <div className="team-info">
                <h3>Nyaledzigbor Lumor</h3>
                <p className="team-role">Restoration Worker</p>
                <p className="team-description">Actively involved in the field, leading reforestation and restoration efforts.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={akplorwotorDzita} alt="Akplorwotor Dzita Agbledome" />
              </div>
              <div className="team-info">
                <h3>Akplorwotor Dzita Agbledome</h3>
                <p className="team-role">Community site engineer/ media</p>
                <p className="team-description">Responsible for site engineering and media relations within the community.</p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src={ebenWesti} alt="Eben Westi" />
              </div>
              <div className="team-info">
                <h3>Eben Westi</h3>
                <p className="team-role">Project Manager</p>
                <p className="team-description">Manages the day-to-day operations of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         FOOTER
         ============================================ */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>D-SART Wildlife Aquatic Conservation</h3>
            <p>Dedicated to wildlife conservation, re-afforestation, and aquatic life restoration.</p>
            <p style={{ marginTop: '1.5rem' }}>📞 0574860230</p>
            <p>✉️ info @dsart-conservation.org</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#project" className="footer-link">Our Project</a></li>
              <li><a href="#partnership" className="footer-link">Become a Partner</a></li>
              <li><a href="#team" className="footer-link">Our Team</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Get Involved</h3>
            <ul>
              <li><a href="#partnership" className="footer-link">Make a Donation</a></li>
              <li><a href="#partnership" className="footer-link">Volunteer</a></li>
              <li><a href="#partnership" className="footer-link">Corporate Partnership</a></li>
              <li><a href="#" className="footer-link">News & Updates</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>UN SDGs Alignment</h3>
            <p>Our work directly supports:</p>
            <ul style={{ marginTop: '1rem' }}>
              <li>SDG 13: Climate Action</li>
              <li>SDG 14: Life Below Water</li>
              <li>SDG 15: Life on Land</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 D-SART Wildlife Aquatic Conservation. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem' }}>Saving Coasts, Saving Lives</p>
        </div>
      </footer>
    </>
  );
};

export default App;