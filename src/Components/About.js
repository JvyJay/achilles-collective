// Components
import Card from './Card';
import { Fade, Slide } from 'react-awesome-reveal';

// IMAGES
import pugilism_photo from '../img/pugilism2.png';


const data = [
  {
    id: 1,
    title: 'Partner Drills',
    desc:
      'Back and forth Dutch, Thai, Boxing & countering drills with switching partners after each round.',
  },
  {
    id: 2,
    title: 'Solo Resources',
    desc:
      'Various online resources, courses, YT channels and books for further education.',
  },
  {
    id: 3,
    title: 'Sparring',
    desc:
      'Open Sparring for all experience levels. Possible Competitions in the future.',
  },
];

const About = () => {
  return (
    <div>
      <main>
        {/* IMAGE INTERMISSION */}
        <Fade>
          <div className='image-intermission'
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <img alt='Old School Pugilism' src={pugilism_photo}
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
            }}></img>
            <div className='text-block'>
              <h1>Our Mission..</h1>
              <p>
              This platform unites martial artists across disciplines, fostering a community focused on knowledge exchange and training, including pad-work and partner drills. All are welcome, from dedicated fighters to those curious about martial arts, as long as they're willing to work and train with the community.
              </p>
            </div>
          </div>
        </Fade>
        {/* CARD SECTION */}
        <Slide left>
          <section className='card-section'>
            <h2>What You Can Expect</h2>
            <div className='card-container'>
              {data.map((item) => {
                return (
                  <section key={item.id}>
                    <Card title={item.title} desc={item.desc} />
                  </section>
                );
              })}
            </div>
          </section>
        </Slide>
      </main>
    </div>
  );
};

export default About;
