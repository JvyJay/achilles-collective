// COMPONENTS
import Form from './Form';
import { Fade, Slide, Roll } from 'react-awesome-reveal';
// PHOTOS
import achilles_photo from '../img/HeroImageLogo.png';
import pugilism_photo from '../img/pugilism.png';
import facebook_icon from '../img/facebook-icon.png';
import instagram_icon from '../img/instagram-icon.png';
import youtube_icon from '../img/youtube-icon.png';

const Home = () => {
  return (
    <div>
      <main>
        {/* HERO AREA */}
        <div className='hero-area-container'>
          <div className='left'>
            <Fade direction='left'>
              <h1>
                Martial Arts <span>Community</span> Made & Created By{' '}
                <span>Martial Artists</span>
              </h1>
              <p>
                The goal of this organization is to bring together various
                martial arts enthusiasts from boxing, kickboxing, MMA or what
                have you in the PNW to exchange training methods, networking or
                just getting some good work in!
              </p>
              <div className='button-container'>
                <a
                  href='https://www.facebook.com/groups/5437920596330257'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='primary'>Join us</button>
                </a>
                <a
                  href='mailto: remmramm@protonmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='secondary'>Contact us</button>
                </a>
              </div>
            </Fade>
          </div>
          <div className='right'>
            <Fade direction='right'>
              <img
                alt='Minimalist Achilles Collective Logo'
                src={achilles_photo}
              ></img>
            </Fade>
          </div>
        </div>
        {/* IMAGE INTERMISSION */}
        <section>
          <Fade>
            <div className='image-intermission'>
              <img alt='Old School Pugilism' src={pugilism_photo}></img>
              <div className='text-block'>
                <h4>
                  <q>
                    The ultimate aim of martial arts is not having to use them
                  </q>
                  <i>- Miyamoto Musashi, A Book of Five Rings</i>
                </h4>
              </div>
            </div>
          </Fade>
        </section>
        {/* CONTACT SECTION */}
        <section>
          <div className='contact-form-section'>
            <Roll left>
              <div className='left'>
                <div className='quart'>
                  <h3>How To Join</h3>
                  <p>
                    Join the community through our{' '}
                    <a
                      href='https://www.facebook.com/groups/5437920596330257'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img alt='facebook' src={facebook_icon} />
                    </a>
                    page!
                  </p>
                  <a
                    href='https://www.facebook.com/groups/5437920596330257'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='primary'>Join us!</button>
                  </a>
                </div>
                <div className='quart'>
                  <h3>Stay Connected</h3>
                  <p>
                    Stay connected with us through{' '}
                    <a
                      href='https://www.instagram.com/achillescollective/?next=%2F'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img alt='instagram' src={instagram_icon} />
                    </a>{' '}
                    or{' '}
                    <a
                      href='https://www.youtube.com/watch?v=oJpRU0BuFXo&list=PLSES_oW0heZvpp5H1RA-POT5oq91FU9f1'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {' '}
                      <img alt='YouTube' src={youtube_icon}></img>
                    </a>
                  </p>
                  <a
                    href='mailto: remmramm@protonmail.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='secondary'>Contact us!</button>
                  </a>
                </div>
              </div>
            </Roll>
            <Roll right>
              <div className='right'>
                <Form id='contact' />
              </div>
            </Roll>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
