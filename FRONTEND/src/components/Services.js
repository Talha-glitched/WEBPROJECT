import React from 'react';

const Services = () => {
  const services = [
    'Exhibition Stands',
    'Showroom & Office Branding',
    'Signages Indoor & Outdoor',
    'Retail Branding & Displays',
    'Corporate Events Branding',
    'Large Format Printing',
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
