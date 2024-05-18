import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.css";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".content--sticky").forEach((el, index) => {
      const inner = el.querySelector(".content__inner");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=200%",
            scrub: true,
          },
        })
        .set(inner, {
          transformOrigin: "50% 0%",
        })
        .to(
          inner,
          {
            ease: "power1",
            startAt: { filter: "brightness(100%)" },
            filter: "brightness(60%)",
            scale: 0.9,
            rotationX: -90,
            yPercent: index === 5 ? 100 : 0, // Assuming there are 6 content elements
          },
          0
        );
    });
  }, []);

  return (
    <div>
      <main>
        <header
          className="frame frame--header"
          //   style="background-image:url(img/9.png);"
        >
         

          <div className="frame__heading">
            <h2 className="content__title">
              <i>Our</i> Services
            </h2>
            <p className="text-meta">Choose Leifii Co for all your marketing needs.</p>
          </div>
        </header>
        <div className="content content--highlight content--intro">
          <p className="text-large">
            As data conglomerates reveled in the opulence of cognitive wealth, a
            silent underclassName manifested, condemned to the digital
            periphery.
          </p>
        </div>
        <div className="wrap">
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-1">
              <img
                className="content__img content__img--large content__img--left"
                src="img/7.png"
              />
              <h2 className="content__title">
                <i>Brand</i> Strategy
              </h2>
              <p className="content__text content__text--left text-meta">
                The algorithm's workings are shrouded in complexity, and its
                decision-making processes are inscrutable to the general
                populace.
              </p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-2">
              <img
                className="content__img content__img--large content__img--left"
                src="img/8.png"
              />
              <h2 className="content__title">
                <i>Social Media marketing</i> 
              </h2>
              <p className="content__text content__text--left text-meta">
                The digital gospel etched into the very code of the algorithmic
                society, served as the bedrock of the cognitive regime.
              </p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-3">
              <img
                className="content__img content__img--large content__img--left"
                src="img/9.png"
              />
              <h2 className="content__title">
                <i>Logo Design & Production</i> 
              </h2>
              <p className="content__text content__text--left text-meta">
                The elusive entities, lacking human form, operate in the
                shadows, skillfully shaping societal norms through the complex
                interplay of algorithms and Dogmas.
              </p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-4">
              <img
                className="content__img content__img--large content__img--left"
                src="img/10.png"
              />
              <h2 className="content__title">
                <i>Online</i> marketing
              </h2>
              <p className="content__text content__text--left text-meta">
                This overlooked realm, a consequence of algorithmic judgments,
                is a haunting landscape filled with the echoes of untold stories
                and uncharted thoughts.
              </p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-5">
              <img
                className="content__img content__img--large content__img--left"
                src="img/11.png"
              />
              <h2 className="content__title">
                <i>Offline</i> Advertising
              </h2>
              <p className="content__text content__text--left text-meta">
                "The Narrative" unfolds as the omnipresent thread weaving
                through the fabric of the algorithmic society.
              </p>
            </div>
          </div>
          <div className="content content--sticky content--grid content--perspective">
            <div className="content__inner bg-6">
              <img
                className="content__img content__img--large content__img--left"
                src="img/12.png"
              />
              <h2 className="content__title">
                <i>Retail Exhibition</i> Design
              </h2>
              <p className="content__text content__text--left text-meta">
                "The Opulence" epitomizes the cognitive elite's wealth in the
                algorithmic society, where opulent thoughts and experiences
                shape the societal narrative.
              </p>
            </div>
          </div>
        </div>
        <div className="content content--highlight content--outro">
          <p className="text-large">
            Lost in perpetual dependency, inhabitants of the Synthetic Era found
            solace in cryptic simulations, where pain ebbed and cognitive loads
            momentarily lightened.
          </p>
          <img className="content__img spacer" src="img/7.png" />
        </div>
      </main>
    </div>
  );
};

export default Services;
