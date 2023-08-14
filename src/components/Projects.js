import React from "react";
import "./Projects.css";
import FITX from "../images/FITXProject.PNG";
import FOTOCAMPER from "../images/FOTOCAMPERProject.PNG";
import SOPRANO from "../images/SOPRANOProject.PNG";
import { TypeAnimation } from "react-type-animation";

export const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2>
          {/* <TypeAnimation
            sequence={[
              "Projects I'm proud of",
              1000,
              "Projects I've worked On",
              1000,
              "My project achievements",
              1000,
              "Creative realizations",
              1000,
              "My projects in action",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          /> */}
          <TypeAnimation
            sequence={[
              "Projects I'm proud of",
              1000,
              "Welcome to my creative world",
              1000,
              "Exploring innovative creations",
              1000,
              "Showcasing passion-driven ventures",
              1000,
              "Designing with heart and soul",
              1000,
              "Bringing ideas to digital life",
              1000,
            ]}
            speed={40}
            repeat={Infinity}
          />
          <h4>
            Discover a collection of projects that define my journey as a
            creator.
          </h4>
        </h2>
        <article>
          <div class="text">
            <h4>Latest Project</h4>
            <h3>
              <a href="https://www.fit-x.pl">FIT-X Catering Dietetyczny</a>
            </h3>
            <p class="blackbox">
              I created a modern website for FIT-X diet catering based on the
              WordPress platform. The project involved designing an attractive
              user interface that allows for easy browsing and ordering of
              healthy meals. I also integrated a blog system to provide clients
              with access to dietary advice and recipes. The website was fully
              responsive, adapting to various devices, enabling convenient use
              on smartphones and tablets. Additionally, the project included SEO
              optimization to improve the website's visibility and ranking in
              search results.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img
            className="media-img"
            src={FITX}
            alt="Screenshot of FIT-X Catering Dietetyczny."
          />
        </article>
        <article>
          <div class="text">
            <h4>Commercial Project</h4>
            <h3>
              <a href="https://www.fotocamper.pl">
                FOTOCAMPER - Mobilna fotobudka
              </a>
            </h3>
            <p class="blackbox">
              As part of my commercial projects, I created the website
              www.fotocamper.pl, which promotes the offer of renting a mobile
              photobooth for events. The project included designing a modern
              user interface that allows for easy browsing of services. I also
              integrated a gallery of photos from previous events, allowing
              potential clients to see the results of the photobooth's work. The
              website also features a live chat option for customers to contact
              the company's support. It was fully optimized for various devices,
              enabling convenient use on both computers and mobile devices. The
              design was executed in a BOHO style. The project also included SEO
              optimization to increase the website's visibility in search
              results.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img
            className="media-img"
            src={FOTOCAMPER}
            alt="Screenshot of FOTOCAMPER - Mobilna budka na Twoją imprezę."
          />
        </article>
        <article>
          <div class="text">
            <h4>Commercial Project</h4>
            <h3>
              <a href="https://www.soprano-baranow.pl">
                SOPRANO Baranów - Pizza & Pub
              </a>
            </h3>
            <p class="blackbox">
              As part of my commercial projects, I completely redesigned the
              website of SOPRANO - Pizzeria and PUB, which promotes the
              offerings of this venue. The project involved designing a modern
              user interface that enables easy browsing of the menu and venue
              information. I also integrated a gallery of photos showcasing the
              interior and unique atmosphere of SOPRANO. The website includes an
              option for online table reservations and the ability to contact
              the staff through a contact form. The entire design was crafted to
              be fully responsive, allowing for convenient use on both computers
              and mobile devices. The project also incorporated SEO optimization
              to enhance the website's visibility in search results. The SOPRANO
              - Pizzeria and PUB website is captivating and visually appealing,
              reflecting the distinctive character of this place.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img
            className="media-img"
            src={SOPRANO}
            alt="Screenshot of SOPRANO - Pizzeria & PUB"
          />
        </article>
      </section>
    </div>
  );
};
