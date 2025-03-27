// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
      <section id="contact">
        <div className="contact-box" id="contactbox">
          <div className="contact-links">
            <h2 className="contact-h2">Contacto</h2>
            <p>
              Encontranos en nuestro encuentro en Parque Centenario, o escribinos para coordinar una visita.
            </p>
            <div className="ifrma">
              <iframe
                title="Maps google iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26269.098736595475!2d-58.42251275081016!3d-34.61333092670571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca688994eb61%3A0xd055df0a7dafa86e!2sParque%20Centenario!5e0!3m2!1ses-419!2sar!4v1664320117277!5m2!1ses-419!2sar"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" id="nombre" required />
                <label htmlFor="nombre">Nombre:</label>
              </div>

              <div className="form-item">
                <input type="text" name="email" id="email" required />
                <label htmlFor="email">Email:</label>
              </div>

              <div className="form-item">
                <input type="text" name="asunto" id="asunto" required />
                <label htmlFor="asunto">Asunto:</label>
              </div>

              <div className="form-item">
                <textarea name="message" id="mensaje" required></textarea>
                <label htmlFor="mensaje">Mensaje:</label>
              </div>

              <button className="submit-btn">Enviar</button>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
