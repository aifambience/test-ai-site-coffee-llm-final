export default function Home() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', color: '#3b2314', backgroundColor: '#fdf6ee', minHeight: '100vh', margin: 0 }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', backgroundColor: '#3b2314', color: '#fdf6ee' }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '2px' }}>☕ BrewHaven</div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '1rem' }}>
          <a href="#menu" style={{ color: '#fdf6ee', textDecoration: 'none' }}>Menu</a>
          <a href="#about" style={{ color: '#fdf6ee', textDecoration: 'none' }}>About</a>
          <a href="#contact" style={{ color: '#fdf6ee', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '100px 20px', background: 'linear-gradient(135deg, #3b2314 0%, #7b4a2d 100%)', color: '#fdf6ee' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '3px' }}>Wake Up & Smell the Coffee</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.8', opacity: 0.9 }}>
          Handcrafted brews made with love, served fresh every morning. Your neighborhood coffee sanctuary.
        </p>
        <a href="#menu" style={{ backgroundColor: '#e8a87c', color: '#3b2314', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', display: 'inline-block' }}>
          Explore Our Menu
        </a>
      </section>

      {/* Features */}
      <section style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', padding: '80px 40px', backgroundColor: '#fdf6ee' }}>
        {[
          { icon: '🌱', title: 'Ethically Sourced', desc: 'We partner with sustainable farms around the world.' },
          { icon: '✋', title: 'Handcrafted', desc: 'Every cup is brewed with care and precision by our baristas.' },
          { icon: '🏡', title: 'Cozy Atmosphere', desc: 'A warm, welcoming space to relax, work, or catch up.' },
        ].map((f) => (
          <div key={f.title} style={{ textAlign: 'center', maxWidth: '260px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{f.icon}</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{f.title}</h3>
            <p style={{ color: '#7b4a2d', lineHeight: '1.7' }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Menu */}
      <section id="menu" style={{ padding: '80px 40px', backgroundColor: '#f4e8d8', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '50px' }}>Our Popular Picks</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          {[
            { name: 'Espresso', price: '$3.50', desc: 'Rich, bold shot of pure coffee.' },
            { name: 'Caramel Latte', price: '$5.00', desc: 'Smooth latte with sweet caramel swirl.' },
            { name: 'Cold Brew', price: '$4.50', desc: '12-hour steeped, silky cold brew.' },
            { name: 'Cappuccino', price: '$4.00', desc: 'Frothy milk over a double espresso.' },
          ].map((item) => (
            <div key={item.name} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '30px 24px', width: '200px', boxShadow: '0 4px 15px rgba(59,35,20,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>☕</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.name}</h3>
              <p style={{ color: '#7b4a2d', fontSize: '0.9rem', marginBottom: '12px' }}>{item.desc}</p>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#3b2314' }}>{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: '80px 60px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Story</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#5a3520' }}>
          BrewHaven was founded in 2010 by two coffee-obsessed friends who believed everyone deserved a perfect cup. From a tiny cart to a beloved neighborhood staple, we have grown through our passion for quality and community. Every bean is selected with intention, every drink is made with heart.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{ backgroundColor: '#3b2314', color: '#fdf6ee', padding: '60px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Visit Us</h2>
        <p style={{ fontSize: '1rem', marginBottom: '8px', opacity: 0.85 }}>123 Roast Avenue, Portland, OR 97201</p>
        <p style={{ fontSize: '1rem', marginBottom: '8px', opacity: 0.85 }}>Mon – Fri: 7am – 7pm &nbsp;|&nbsp; Sat – Sun: 8am – 6pm</p>
        <p style={{ fontSize: '1rem', opacity: 0.85 }}>📞 (503) 555-0198 &nbsp;|&nbsp; ✉️ hello@brewhaven.com</p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#2a1a0e', color: '#a07050', fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} BrewHaven Coffee. All rights reserved.
      </footer>
    </main>
  );
}