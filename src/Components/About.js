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
          <div className='image-intermission'>
            <img alt='Old School Pugilism' src={pugilism_photo}></img>
            <div className='text-block'>
              <h1>Our Mission..</h1>
              <p>
                The goal of this platform is to bring together like-minded
                martial artists whether you`re a boxer, Muay Thai fighter or
                just somebody interested in combat sports. We plan to build a
                community focused on knowledge exchange and training things such
                as pad-work, partner drills and potentially sparring if you feel
                ready. Whether you`re a full-time fighter or a somebody that`s
                curious about what it takes to be a martial artist - anybody is
                welcome as long as you`re willing to work and train hard with
                everybody!
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
