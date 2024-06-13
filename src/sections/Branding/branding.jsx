import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import "./branding.css";
import SliderComponent from "./sliderComponent";

gsap.registerPlugin(ScrollTrigger, Flip);

const Branding = () => {
  const triggerFlipOnScroll = (galleryEl, options = {}) => {
    if (!galleryEl) return; // Check if galleryEl exists

    let settings = {
      flip: {
        absoluteOnLeave: false,
        absolute: false,
        scale: true,
        simple: true,
      },
      scrollTrigger: {
        start: "center center",
        end: "+=300%",
      },
      stagger: 0,
    };

    settings = { ...settings, ...options };

    const galleryCaption = galleryEl.querySelector(".caption");
    const galleryItems = galleryEl.querySelectorAll(".gallery__item");
    const galleryItemsInner = [...galleryItems]
      .map((item) => (item.children.length > 0 ? [...item.children] : []))
      .flat();

    galleryEl.classList.add("gallery--switch");
    const flipstate = Flip.getState([galleryItems, galleryCaption], {
      props: "filter, opacity",
    });
    galleryEl.classList.remove("gallery--switch");

    const tl = Flip.to(flipstate, {
      ease: "none",
      absoluteOnLeave: settings.flip.absoluteOnLeave,
      absolute: settings.flip.absolute,
      scale: settings.flip.scale,
      simple: settings.flip.simple,
      scrollTrigger: {
        trigger: galleryEl,
        start: settings.scrollTrigger.start,
        end: settings.scrollTrigger.end,
        pin: galleryEl.parentNode,
        scrub: true,
      },
      stagger: settings.stagger,
    });

    if (galleryItemsInner.length) {
      tl.fromTo(
        galleryItemsInner,
        {
          scale: 2,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: galleryEl,
            start: settings.scrollTrigger.start,
            end: settings.scrollTrigger.end,
            scrub: true,
          },
        },
        0
      );
    }
  };

  const scroll = () => {
    const galleries = [
      {
        id: "#gallery-1",
        options: { flip: { absoluteOnLeave: true, scale: false } },
      },
      { id: "#gallery-2" },
      {
        id: "#gallery-3",
        options: {
          flip: { absolute: true, scale: false },
          scrollTrigger: { start: "center center", end: "+=900%" },
          stagger: 0.05,
        },
      },
      { id: "#gallery-4" },
      { id: "#gallery-5" },
      { id: "#gallery-6" },
      { id: "#gallery-7" },
      { id: "#gallery-8", options: { flip: { scale: false } } },
      { id: "#gallery-9" },
    ];

    galleries.forEach((gallery) => {
      const galleryElement = document.querySelector(gallery.id);
      triggerFlipOnScroll(galleryElement, gallery.options);
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  return (
    <main className="bodii">
      <div className="frame">
        <div className="frame__title">
          <h1 className="frame__title-main">
            On-Scroll Image Layout Animations
          </h1>
          <a
            aria-label="Back to the article"
            className="frame__title-back"
            href="https://tympanus.net/codrops/?p=72941"
          >
            <span className="oh__inner">Back to the article</span>
            <svg width="18px" height="18px" viewBox="0 0 24 24">
              <path
                vectorEffect="non-scaling-stroke"
                d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"
              ></path>
            </svg>
          </a>
        </div>
        <a
          className="frame__prev"
          href="https://tympanus.net/Development/TextBlockTransitions/"
        >
          Previous demo
        </a>
      </div>

      <section className="project project--intro">
        <span className="project__label project__label--name">Project</span>
        <span className="project__name">AI Art</span>
        <span className="project__label project__label--date">Date</span>
        <span className="project__date">July, 2023</span>
        <h2 className="project__title">
          <span className="project__title-line">Creativity</span>
          <span className="project__title-line">Redefined</span>
        </h2>
        <span className="project__label project__label--mission">Mission</span>
        <div className="project__mission">
          <p>
            The AI-Art Project is a transformative initiative dedicated to
            exploring the immense impact of AI-generated art on the art world
            and artists. We aim to discover and promote exceptional AI-generated
            artworks that push the boundaries of creativity, redefine
            traditional practices, and provoke thought.
          </p>
          <p>
            Through collaborations with artists, workshops, and educational
            programs, we empower artists to leverage AI as a tool for
            exploration, expanding their artistic horizons and embracing new
            forms of expression.
          </p>
        </div>
      </section>

      <div className="gallery-wrap">
        <div className="gallery gallery--row" id="gallery-1">
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--xl gallery__item--center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--l"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--m"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            className="gallery__item gallery__item--s"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div className="caption">
            Within this meticulously arranged AI-generated ensemble lies a
            tantalizing facade, captivating our gaze. Yet, as we search for the
            soul of human expression, we question whether algorithms can truly
            embody the essence of authentic art.
          </div>
        </div>
      </div>

      <section class="project project--details project--left">
        <span class="project__label project__label--default">
          Ethical Considerations
        </span>
        <p>
          The emergence of AI-generated art raises ethical questions and
          concerns. One of the key challenges is navigating the boundaries of
          authorship and ownership. Determining the role of AI algorithms and
          their creators in the artistic process, as well as addressing issues
          of attribution and intellectual property, requires careful
          deliberation. Additionally, ensuring that AI-generated art does not
          perpetuate bias, discrimination, or harmful content is crucial for
          fostering a responsible and inclusive artistic landscape.
        </p>
      </section>

      <div class="gallery-wrap gallery-wrap--large">
        <div class="gallery gallery--grid gallery--breakout" id="gallery-2">
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="gallery__item gallery__item-cut">
            <div
              class="gallery__item-inner"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
            ></div>
          </div>
          <div class="caption">
            <p>
              Devoid of inherent knowledge, the language model relies solely on
              probabilities to craft a peculiar vision. As a result, the
              earrings hang in curious defiance of physics, inviting us to
              ponder the implications of relinquishing human understanding in
              the pursuit of artificial creativity.
            </p>
          </div>
        </div>
      </div>

      <section class="project project--details project--right">
        <span class="project__label project__label--default">
          Preserving Artistic Identity
        </span>
        <p>
          While AI offers new avenues for artistic exploration, there is a
          concern that it may overshadow or replace human creativity. Balancing
          the integration of AI tools and techniques with preserving the unique
          perspectives, emotional depth, and artistic identity of human artists
          is a significant challenge. Striking the right balance between
          AI-generated art and the irreplaceable human touch requires thoughtful
          consideration and an ongoing dialogue between artists, technologists,
          and the wider art community.
        </p>
      </section>

      <div class="gallery-wrap">
        <div class="gallery gallery--grid10" id="gallery-3">
          <div
            class="gallery__item pos-2"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-1"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-3"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-4"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-5"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-6"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-7"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-8"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-9"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-10"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-11"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-12"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-13"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-14"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-15"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item pos-16"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div class="caption">The Art of Perfection?</div>
        </div>
      </div>
      <div className="flex text-justify justify-center text-[3rem]">
        Explore the projects
      </div>

      <div className="h-screen text-white">
        <SliderComponent />{" "}
      </div>

      {/* <div class="gallery-wrap gallery-wrap--dense">
        <div
          class="gallery gallery--stack gallery--stack-inverse gallery--stack-dark"
          id="gallery-4"
        >
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div class="caption">
            <p>
              AI-generated art captivates with varied creations, sometimes
              senseless, yet impressively enigmatic.
            </p>
          </div>
        </div>
      </div>
      <div class="gallery-wrap gallery-wrap--dense">
        <div class="gallery gallery--stack gallery--stack-glass" id="gallery-5">
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div class="caption">
            <p>
              In the realm of unpredictable algorithms, some variations may
              appear random or without purpose, challenging traditional notions
              of beauty and meaning.
            </p>
          </div>
        </div>
      </div>
      <div class="gallery-wrap gallery-wrap--dense">
        <div
          class="gallery gallery--stack gallery--stack-inverse gallery--stack-scale gallery--stack-dark"
          id="gallery-6"
        >
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div
            class="gallery__item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/22670171/pexels-photo-22670171/free-photo-of-a-close-up-of-the-ocean-water-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}
          ></div>
          <div class="caption">
            <p>
              This uncharted territory challenges artists and art enthusiasts
              alike, igniting debates about the role of intention and chance in
              the artistic process.
            </p>
          </div>
        </div>
      </div>
      <section class="project project--details project--right">
        <span class="project__label project__label--default">
          Unmasking the Void of Authenticity
        </span>
        <p>
          While AI-generated art showcases impressive technical prowess, it
          leaves behind an unsettling void in the quest for authenticity. As
          humans, we seek the genuine touch of human hands and the depth of
          emotional connection embedded within traditional art forms. The lack
          of human essence in AI-generated creations may leave us yearning for
          the profound human expression that sparks true resonance, evoking a
          sense of emptiness in the face of machine-driven artistry.
        </p>
      </section> */}

      {/* <div className="h-screen bg-black"></div> */}
    </main>
  );
};

export default Branding;
