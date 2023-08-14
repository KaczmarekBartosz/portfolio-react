import React from "react";
import "./Projects.css";
import FITX from "../images/FITXProject.PNG";

export const Projects = () => {
  return (
    <div>
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <article>
          <div class="text">
            <h4>Latest Project</h4>
            <h3>FIT-X Catering Dietetyczny</h3>
            <p class="blackbox">
              I created a modern website for FIT-X diet catering based on the
              WordPress platform. The project involved designing an attractive
              user interface that allows for easy browsing and ordering of
              healthy meals. I also integrated a blog system to provide clients
              with access to dietary advice and recipes. The website was fully
              responsive, adapting to various devices, enabling convenient use
              on smartphones and tablets. Additionally, the project included SEO
              optimization to improve the website's visibility and ranking in
              search results. You can check the whole page here:
              <a href="https://www.fit-x.pl">www.fit-x.pl</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img src={FITX} alt="Screenshot of FIT-X Catering Dietetyczny." />
        </article>
        <article class="reverse">
          <div class="text">
            <h4>Commercial Project</h4>
            <h3>FOTOCAMPER - Mobilna fotobudka</h3>
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
              results. You can check the whole page here:
              <a href="https://www.fotocamper.pl">www.fotocamper.pl</a>.
            </p>
            <h4>Technologies used include:</h4>
            <ul>
              <li>WordPress</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img
            src="./src/FOTOCAMPERProject.PNG"
            alt="Screenshot of FOTOCAMPER - Mobilna budka na Twoją imprezę."
          />
        </article>
        <article>
          <div class="text">
            <h4>Commercial Project</h4>
            <h3>SOPRANO Baranów - Pizzeria & PUB</h3>
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
            src="./src/SOPRANOProject.PNG"
            alt="Screenshot of SOPRANO - Pizzeria & PUB"
          />
        </article>
      </section>
    </div>
  );
};
