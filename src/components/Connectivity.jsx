import React, { useEffect, useRef } from 'react'

const Connectivity = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, []);


  return (
    <>
    <section ref={sectionRef} className="connectivity-section">
      <div className="connectivity-content">
        <h2 className="connectivity-subtitle">Ports and Connectivity</h2>
        <h1 className="connectivity-title">Make powerful connections.</h1>
        <div className="connectivity-text">
          <p>MacBook Pro packs an array of ports for connecting high-speed peripherals, driving high-resolution displays, or directly offloading SDXC cards.
            <span className='text-white'> Models with the M5 chip feature Thunderbolt 4. Models with M4 Pro or M4 Max feature Thunderbolt 5,</span> which offers transfer speeds of up to 120Gb/s.51</p>
          <p>MacBook Pro also supports both Wi-Fi 6E52 and Bluetooth 5.3 to connect to the internet and your wireless devices.</p>
        </div>
      </div>
      <div className="macbooks-wrapper">
        <img
          src="/port2.jpg"
          alt="Left MacBook"
          className="macbook macbook-left"
        />
        <img
          src="/port1.jpg"
          alt="Right MacBook"
          className="macbook macbook-right"
        />
      </div>
      
    </section>
    <section class="ports-section">
  <div class="ports-grid">
    <div class="ports-col">
      <span class="gradient-line"></span>

      <p class="ports-list">
        <strong>Thunderbolt¹¹</strong><br />
        HDMI<br />
        SDXC<br />
        Headphone jack<br />
        MagSafe
      </p>
    </div>

    <div class="ports-col">
      <span class="gradient-line"></span>

      <p class="ports-description">
        <strong>Drive external displays.</strong>
        Connect up to two high-resolution external displays with M5 and M4 Pro,
        or up to four high-resolution displays with M4 Max.
      </p>
    </div>
  </div>
</section>


    </>

  )
}

export default Connectivity