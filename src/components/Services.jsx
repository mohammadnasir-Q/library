import React from 'react';

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card">
              <img src="https://via.placeholder.com/100" alt="Service 1" />
              <h5>Web Development</h5>
              <p>Build responsive and high-quality websites with modern tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;