import React from 'react';

import ServiceBox from './service-section/service-box';

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our services
          </h2>
        </div>
        <div className="row">
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="IDEATION AND CONCEPT DEVELOPMENT" />}
            title="IDEATION AND CONCEPT DEVELOPMENT"
            description="At Sledge Entertainment Limited, we excel at turning creative visions into captivating concepts. 
            Our skilled team specializes in ideation, crafting the perfect foundation for your project. Let's bring your 
             to life – from imagination to extraordinary reality."
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
          <ServiceBox
            svg={<img src="/images/service-icon-2.svg" alt="Service 2" />}
            title="Service 2 Title"
            description="Service 2 Description"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
