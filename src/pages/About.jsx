export default function About() {
  return (
    <main>
      <h1 className="title">React Blog Pages</h1>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="border border-2 border-secondary rounded-4 p-4 bg-transparent">
              <h2 className="text-center mb-5 display-5 fw-bold text-white">
                Chi Siamo
              </h2>

              <div className="row g-4 mb-5">
                <div className="col-md-8 mx-auto">
                  <p className="lead text-ligth fs-4 text-center fst-italic">
                    "Trasformiamo la passione per React in contenuti
                    innovativi e ispiranti"
                  </p>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="border border-secondary rounded-3 p-4 h-100 hover-shadow">
                    <div className="d-flex align-items-center mb-4">
                      <i className="bi bi-rocket-takeoff fs-2 text-primary me-3"></i>
                      <h3 className="h4 mb-0">La Nostra Missione</h3>
                    </div>
                    <p className="text-white mb-0">
                      Condividere conoscenze e best practices nel mondo React,
                      guidando gli sviluppatori verso nuove frontiere di
                      innovazione e eccellenza tecnica.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border border-secondary rounded-3 p-4 h-100 hover-shadow">
                    <div className="d-flex align-items-center mb-4">
                      <i className="bi bi-stars fs-2 text-primary me-3"></i>
                      <h3 className="h4 mb-0">I Nostri Valori</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                        <span>Innovazione continua nel mondo React</span>
                      </li>
                      <li className="d-flex align-items-center mb-3">
                        <i className="bi bi-people-fill text-info me-2"></i>
                        <span>Collaborazione e crescita della community</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="bi bi-book-fill text-success me-2"></i>
                        <span>Apprendimento e miglioramento costante</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
