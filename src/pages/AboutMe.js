import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const AboutMe = () => {
        {/* Languages: JS, CSS, HTML, Ruby, Swift */}
        const items = [
          {
            src: 'https://cdn.iconscout.com/icon/free/png-512/javascript-2038874-1720087.png?f=avif&w=512',
            altText: 'JavaScript Logo',
            caption: 'JavaScript',
            key: 1,
          },
          {
            src: 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png',
            altText: 'CSS Logo',
            caption: 'CSS',
            key: 2,
          },
          {
            src: 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png',
            altText: 'HTML Logo',
            caption: 'HTML',
            key: 3,
          },
          {
            src: 'https://cdn.iconscout.com/icon/free/png-512/ruby-3629029-3030386.png?f=avif&w=512',
            altText: 'Ruby Logo',
            caption: 'Ruby',
            key: 4,
          },
        ];
         {/* Frameworks/Libraries: ReactJS, Rails, Jest, Rspec, Postgresql */}
        const items2 = [
          {
            src: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png',
            altText: 'React Logo',
            caption: 'React',
            key: 1,
          },
          {
            src: 'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-512.png',
            altText: 'Rails Logo',
            caption: 'Rails',
            key: 2,
          },
          {
            src: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-512.png',
            altText: 'Jest Logo',
            caption: 'Jest',
            key: 3,
          },
          {
            src: 'https://www.svgrepo.com/download/374053/rspec.svg',
            altText: 'Rspec Logo',
            caption: 'Rspec',
            key: 4,
          },
          {
            src: 'https://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png',
            altText: 'Postgresql Logo',
            caption: 'Postgresql',
            key: 5,
          },
        ];
      
          const [activeIndex, setActiveIndex] = useState(0);
          const [animating, setAnimating] = useState(false);
        
          const next = () => {
            if (animating) return;
            const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(nextIndex);
          };
        
          const previous = () => {
            if (animating) return;
            const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
            setActiveIndex(nextIndex);
          };
        
          const goToIndex = (newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          };
        
          const slides = items.map((item) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
              >
                <img src={item.src} alt={item.altText}/>
                <CarouselCaption
                  captionText={item.caption}
                  captionHeader={item.caption}
                />
              </CarouselItem>
            );
          });

          const slides2 = items2.map((item) => {
            return (
              <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
              >
                <img src={item.src} alt={item.altText}/>
                <CarouselCaption
                  captionText={item.caption}
                  captionHeader={item.caption}
                />
              </CarouselItem>
            );
          });

  return (
    <>
        <h1>About Me</h1>

        <h2>
        After 12 years as an Independent Contractor in the Real Estate Industry, I'm heading into a new direction with my career. With prior education in Information Technology, I want to use what I have learned and combine it with my new skills I am currently learning and move into web development. While programming is not a new concept to me, I have been away from the field for 6 years. Realizing I never used my education to it's full potential, it has motivated me to pursue my dream job in the tech field. 
        </h2>
        
        <h2>
        I am currently a student at Learn Academy learning full stack web development. Learning different languages and frameworks to build my repertoire of tools for the ongoing journey. It is not how you start your journey, but how you continue to grow along the way in the face of adversity. Being challenged is something I take head on to prove to myself that I can do anything I set my mind to. 
        </h2>

        <h1>Tech Stack</h1>
        <section>
        <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
              {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
        </section>
       
        <section>
        <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
              {slides2}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
        </section>
    </>
  )
}

export default AboutMe