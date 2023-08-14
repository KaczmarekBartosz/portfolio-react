import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Umawiam wizytę");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Wysyłam...");
    console.log(formData);
    // Tutaj możesz dodać kod do wysyłania danych do serwera, jeśli to konieczne
  };

  return (
    <section
      id="contact"
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Umów wizytę on-line</h5>
                    </div>
                    <div>
                      <form onSubmit={handleSubmit} className="php-email-form">
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Twoje imię"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Twój adres e-mail"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Numer telefonu"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Marka i model auta"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                              />
                              <small className="form-text text-muted">
                                Wybierz datę wizyty
                              </small>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="form-control"
                                rows="5"
                                placeholder="Twoja wiadomość"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12 text-center my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">
                              Dane Twojej wizyty zostały wysłane. Zaczekaj na
                              kontakt z naszej strony w celu jej potwierdzenia!
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              {formStatus}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Potwierdź wizytę</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Po umówieniu wizyty on-line poczekaj na kontakt z naszej
                        strony. Chcesz przyspieszyć proces? Zadzwoń do nas!
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="bi bi-geo-alt"></span> AMS Andrzej
                          Spychała
                        </li>
                        <li>
                          <span className="bi bi-geo-alt"></span> Krzyworzeka
                          282, 98-345 Krzyworzeka
                        </li>
                        <li>
                          <span className="bi bi-phone"></span>{" "}
                          <FontAwesomeIcon icon={faPhone} />{" "}
                          <a href="tel:503694191">503 694 191</a>
                        </li>
                        <li>
                          <span className="bi bi-envelope"></span>{" "}
                          <FontAwesomeIcon icon={faEnvelope} />{" "}
                          <a href="mailto:andrzejspychala1@vp.pl">
                            andrzejspychala1@vp.pl
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
