export default function About() {
  return (
    <div className="container">
      <h1>About Us</h1>

      <div className="card about-card">

        <div className="about-section">
          <p>
            Welcome to E-Commerce Store, your trusted destination for
            quality products at affordable prices. Our platform is designed
            to provide a seamless and secure shopping experience with a
            modern, user-friendly interface.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>

          <p>
            To make online shopping simple, reliable, and accessible for
            everyone by offering quality products, secure transactions,
            and excellent customer service.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>

          <p>
            To become a leading e-commerce platform that connects customers
            with the products they love while delivering convenience,
            value, and satisfaction.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>

          <ul className="about-list">
            <li>Wide range of quality products</li>
            <li>Secure online shopping experience</li>
            <li>Fast and reliable delivery</li>
            <li>Easy returns and refunds</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Achievements</h2>

          <div className="features about-stats">
            <div className="feature-card">
              <h3>10,000+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="feature-card">
              <h3>500+</h3>
              <p>Products Available</p>
            </div>

            <div className="feature-card">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Commitment</h2>

          <p>
            We continuously strive to improve our services and provide
            customers with the best shopping experience. Thank you for
            choosing E-Commerce Store as your preferred online shopping
            destination.
          </p>
        </div>

      </div>
    </div>
  );
}