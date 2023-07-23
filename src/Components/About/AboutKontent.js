import '../About/AboutKontent.css';
import aboutImages from '../../assets/images/About.png';

const AboutKontent = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImages} alt="About" />
      </div>
      <div className="about-text">
        <h1>Tentang Website</h1>
        <p>
          Website ini dicipatkan untuk melihat berbagai feedback yang diberikan oleh user, namun untuk mengontrolnya hanya admin yang dapat login.
        </p>
      </div>
    </div>
  );
};

export default AboutKontent;
