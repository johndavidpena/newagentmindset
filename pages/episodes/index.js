import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import IndexStyles from '../../stylesheets/Index.module.css';
import MainStyles from '../../stylesheets/Main.module.css';

export default () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (width <= 576) {
      setScreenSize('mobile');
    } else if (width > 576 && width <= 768) {
      setScreenSize('tablet');
    } else if (width > 768) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Real Estate Agent - Episodes | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - Episodes | New Agent Mindset'
        description='All of the New Real Estate Agent Mindset episodes are here, including audio and video episodes. Make sure to check out the Resources Hub if you are a new real estate agent.'
        canonical='https://newagentmindset.com/episodes/index/'
        openGraph={{
          url: 'https://newagentmindset.com/episodes/index/',
          title: 'New Real Estate Agent - Episodes | New Agent Mindset',
          description: 'New Agent Mindset is a podcast, Youtube channel, Facebook group, and website devoted to helping new real estate agents access the best strategies, tips, tools, and advice. Getting started in real estate is tough and New Agent Mindset exists to help new real estate agents find success!',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
            // {
            //   url: 'https://www.example.ie/og-image-02.jpg',
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            // },
            // { url: 'https://www.example.ie/og-image-03.jpg' },
            // { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
        }}
      />

      <div>
        {/* EPISODE 15 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601658253/New%20Agent%20Mindset/Episodes/NewAgentSalary-m400.jpg' alt='episode-15-thumbnail' title='episode-15-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601658253/New%20Agent%20Mindset/Episodes/NewAgentSalary-m400.jpg' alt='episode-15-thumbnail' title='episode-15-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601658254/New%20Agent%20Mindset/Episodes/NewAgentSalary-d770.jpg' alt='episode-15-thumbnail' title='episode-15-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='new-real-estate-agent-salary' width="560" height="315" src="https://www.youtube.com/embed/jdwZar3p4pM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 14 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='this-too-shall-pass' src="https://anchor.fm/new-agent-mindset/embed/episodes/This-Too-Shall-Pass-ekbl27" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 13 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601234630/New%20Agent%20Mindset/Episodes/sphere-m400.jpg' alt='episode-13-thumbnail' title='episode-13-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601234630/New%20Agent%20Mindset/Episodes/sphere-t640.jpg' alt='episode-13-thumbnail' title='episode-13-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1601234630/New%20Agent%20Mindset/Episodes/sphere-d770.jpg' alt='episode-13-thumbnail' title='episode-13-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='sphere-of-influence-real-estate' width="560" height="315" src="https://www.youtube.com/embed/OzJJS5IOmjY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 12 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='master-of-my-emotions' src="https://anchor.fm/new-agent-mindset/embed/episodes/Master-of-My-Emotions-ek10qi" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 11 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600453530/New%20Agent%20Mindset/Episodes/episode-11-m400.jpg' alt='episode-11-thumbnail' title='episode-11-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600453530/New%20Agent%20Mindset/Episodes/episode-11-t640.jpg' alt='episode-11-thumbnail' title='episode-11-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600453530/New%20Agent%20Mindset/Episodes/episode-11-d770.jpg' alt='episode-11-thumbnail' title='episode-11-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='why-should-i-listen-to-you' width="560" height="315" src="https://www.youtube.com/embed/EAw4Ouz3U-Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 10 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='tomorrow-is-buried-with-yesterday' src="https://anchor.fm/new-agent-mindset/embed/episodes/Tomorrow-Is-Buried-with-Yesterday-ejm6do" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 9 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292538/New%20Agent%20Mindset/Episodes/episode-9-m400.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292539/New%20Agent%20Mindset/Episodes/episode-9-t640.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292538/New%20Agent%20Mindset/Episodes/episode-9-d770.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='what-is-circle-prospecting' width="560" height="315" src="https://www.youtube.com/embed/B3GefNdLdqs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 8 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='identifying-your-unique-value' src="https://anchor.fm/new-agent-mindset/embed/episodes/Identifying-Your-Unique-Value-ejaarm" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 7 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599246937/New%20Agent%20Mindset/episode-7-m400.jpg' alt='episode-7-thumbnail' title='episode-7-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599246938/New%20Agent%20Mindset/episode-7-7640.jpg' alt='episode-7-thumbnail' title='episode-7-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599246938/New%20Agent%20Mindset/episode-7-d770.jpg' alt='episode-7-thumbnail' title='episode-7-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='truth-about-being-new-real-estate-agent' width="560" height="315" src="https://www.youtube.com/embed/woz2CtL-oUc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 6 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='importance-of-persistence' src="https://anchor.fm/new-agent-mindset/embed/episodes/The-Importance-of-Persistence-ej05hr" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 5 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-m400.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-t640.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-d770.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='getting-started-with-lead-generation' width="560" height="315" src="https://www.youtube.com/embed/89Hd6-qss8I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 4 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='power-of-love' src="https://anchor.fm/new-agent-mindset/embed/episodes/The-Power-of-Love-eil68t" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 3 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079502/New%20Agent%20Mindset/episode-3-m400.jpg' alt='episode-3-thumbnail' title='episode-3-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079503/New%20Agent%20Mindset/episode-3-t640.jpg' alt='episode-3-thumbnail' title='episode-3-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079502/New%20Agent%20Mindset/episode-3-d770.jpg' alt='episode-3-thumbnail' title='episode-3-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='start-with-why' width="560" height="315" src="https://www.youtube.com/embed/jQkt9sumwn4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        {/* EPISODE 2 */}
        <div className={MainStyles.podcastContainer}>
          <iframe title='form-good-habits' src="https://anchor.fm/new-agent-mindset/embed/episodes/Form-Good-Habits-eiagnu" height="102px" width="400px" frameBorder="0" scrolling="no"></iframe>
        </div>

        {/* EPISODE 1 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078140/New%20Agent%20Mindset/episode-1-thumbnail-m400jpg.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078140/New%20Agent%20Mindset/episode-1-thumbnail-t640.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078140/New%20Agent%20Mindset/episode-1-thumbnail-d770.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='facts-tell-stories-sell' width="560" height="315" src="https://www.youtube.com/embed/Y01z2pMyIZs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}
      </div>

    </>
  );
}
