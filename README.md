[index.html](https://github.com/user-attachments/files/24696384/index.html)
<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="SCAR dei F.lli Scala – rivendita auto selezionate e consulenza tecnica a Luzzara (RE)." />
  <title>SCAR dei F.lli Scala | Rivendita auto & consulenza – Luzzara (RE)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <a class="skip" href="#contenuto">Vai al contenuto</a>

  <header class="topbar" aria-label="Barra superiore">
    <div class="container topbar__inner">
      <a class="brand" href="#home" aria-label="SCAR dei F.lli Scala">
        <img class="brand__logo" src="assets/logo.png" alt="Logo SCAR dei F.lli Scala" />
        <span class="brand__name">SCAR <span class="muted">dei F.lli Scala</span></span>
      </a>

      <nav class="nav" aria-label="Navigazione">
        <a href="#chi-siamo">Chi siamo</a>
        <a href="#servizi">Cosa facciamo</a>
        <a href="#perche">Perché noi</a>
        <a href="#contatti" class="pill">Contatti</a>
      </nav>

      <button class="hamburger" type="button" aria-label="Apri menu" aria-expanded="false" aria-controls="menu-mobile">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div id="menu-mobile" class="menu" hidden>
      <div class="container menu__inner">
        <a href="#chi-siamo">Chi siamo</a>
        <a href="#servizi">Cosa facciamo</a>
        <a href="#perche">Perché noi</a>
        <a href="#contatti">Contatti</a>
      </div>
    </div>
  </header>

  <main id="contenuto">
    <!-- HERO -->
    <section id="home" class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="kicker">📍 Luzzara (RE) · Rivendita auto & consulenza</p>
          <h1>Rivendita auto selezionate.<br/><span class="accent">Consulenza tecnica reale.</span></h1>
          <p class="lead">Non vendiamo solo auto: aiutiamo le persone a scegliere bene, con competenza, trasparenza e responsabilità.</p>

          <div class="cta">
            <a class="btn" href="#contatti">Contattaci</a>
            <a class="btn btn--ghost" href="#" id="waLink" rel="noopener">WhatsApp</a>
          </div>

          <div class="badges" aria-label="Punti chiave">
            <span class="badge">Auto valutate con criterio</span>
            <span class="badge">Approccio diretto</span>
            <span class="badge">Supporto prima e dopo</span>
          </div>
        </div>

        <div class="hero__card" aria-label="Auto di nicchia da intenditori">
          <div class="glass">
            <h2>Auto di nicchia, scelte da intenditori</h2>
            <p>Preferiamo l’auto giusta al “prendere tutto”. Valutiamo tecnica, uso reale e costi nel tempo.</p>

            <div class="mini-grid" role="list">
              <div class="mini" role="listitem">
                <div class="svgcar" aria-hidden="true">
                  <!-- hatchback silhouette -->
                  <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34 78c6-20 18-32 40-38l62-16c10-3 21-3 31 0l52 16c18 6 32 18 40 38l6 18H28l6-18z" />
                    <path d="M98 34h58c10 0 19 6 24 14l8 14H70l10-18c4-7 10-10 18-10z" />
                    <circle cx="86" cy="96" r="14" />
                    <circle cx="234" cy="96" r="14" />
                  </svg>
                </div>
                <p>Compatte “giuste”</p>
              </div>
              <div class="mini" role="listitem">
                <div class="svgcar" aria-hidden="true">
                  <!-- wagon silhouette -->
                  <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 78c8-22 22-34 46-40l64-14c10-2 20-2 30 0l60 14c24 6 38 18 46 40l6 18H20l6-18z" />
                    <path d="M92 34h118c10 0 18 6 22 14l10 18H76l10-20c3-8 9-12 16-12z" />
                    <circle cx="88" cy="96" r="14" />
                    <circle cx="240" cy="96" r="14" />
                  </svg>
                </div>
                <p>Station e touring</p>
              </div>
              <div class="mini" role="listitem">
                <div class="svgcar" aria-hidden="true">
                  <!-- coupe silhouette -->
                  <svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 78c6-20 18-32 40-38l70-18c9-2 18-2 27 0l55 16c18 6 32 18 40 40l6 18H24l6-18z" />
                    <path d="M110 34h54c12 0 22 7 28 18l6 14H92l10-18c4-9 10-14 18-14z" />
                    <circle cx="86" cy="96" r="14" />
                    <circle cx="234" cy="96" r="14" />
                  </svg>
                </div>
                <p>Coupé & youngtimer</p>
              </div>
            </div>

            <div class="note">*Le opportunità migliori spesso arrivano “su richiesta”: raccontaci cosa cerchi.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHI SIAMO -->
    <section id="chi-siamo" class="section">
      <div class="container">
        <div class="section__head">
          <h2>Chi siamo</h2>
          <p>Due fratelli. Due percorsi diversi. Un’unica competenza.</p>
        </div>

        <div class="grid two">
          <article class="card">
            <h3>Meccatronico · Docente · Tecnico automotive</h3>
            <p>Diplomato in meccatronica, è <strong>docente di ruolo da oltre 9 anni</strong> nel settore delle <strong>autoriparazioni</strong>, con migliaia di studenti formati nel tempo.</p>
            <ul class="list">
              <li>Esperienza in <strong>officine specializzate</strong></li>
              <li><strong>Perizie tecniche</strong> e valutazioni</li>
              <li>Preparazioni e controllo veicoli</li>
            </ul>
          </article>

          <article class="card">
            <h3>Meccatronico · Laureato · Manager</h3>
            <p>Diplomato in meccatronica con il massimo dei voti, laureato in discipline giuridiche (<strong>L-14 – Servizi Giuridici</strong>). Ha <strong>5 anni di esperienza</strong> come manager in azienda metalmeccanica.</p>
            <ul class="list">
              <li>Approccio <strong>organizzato e concreto</strong></li>
              <li>Visione <strong>tecnica + normativa</strong></li>
              <li>Gestione e supporto decisionale</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- SERVIZI -->
    <section id="servizi" class="section">
      <div class="container">
        <div class="section__head">
          <h2>Cosa facciamo</h2>
          <p>Rivendita auto selezionate e consulenza: poche cose, fatte bene.</p>
        </div>

        <div class="grid three">
          <article class="card">
            <h3>Rivendita auto selezionate</h3>
            <p>Auto usate scelte con criterio, valutate per tecnica, uso reale e costi nel tempo. Niente stock casuali.</p>
          </article>
          <article class="card">
            <h3>Consulenza pre-acquisto</h3>
            <p>Ti aiutiamo a scegliere il modello giusto, confrontare alternative e capire dove conviene davvero.</p>
          </article>
          <article class="card">
            <h3>Ricerca su richiesta</h3>
            <p>Se cerchi una nicchia specifica (allestimento, motore, storico), lavoriamo “su brief” e ti guidiamo fino alla scelta.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- PERCHE' NOI -->
    <section id="perche" class="section">
      <div class="container">
        <div class="section__head">
          <h2>Perché noi</h2>
          <p>Competenza tecnica vera, comunicata in modo semplice.</p>
        </div>

        <div class="grid two">
          <div class="card">
            <h3>Selezione prima di tutto</h3>
            <p>Ogni proposta nasce da valutazioni tecniche e da esperienza reale sul campo. Preferiamo dire “no” piuttosto che proporti un acquisto sbagliato.</p>
          </div>
          <div class="card">
            <h3>Diretti, senza pressioni</h3>
            <p>Nessuna vendita forzata: ti spieghiamo pro e contro, così decidi in modo consapevole.</p>
          </div>
        </div>

        <div class="pillrow" aria-label="Punti chiave">
          <span class="pill2">✔ Competenza tecnica certificata</span>
          <span class="pill2">✔ Officina · perizie · valutazioni</span>
          <span class="pill2">✔ Supporto prima e dopo l’acquisto</span>
          <span class="pill2">✔ Approccio moderno e trasparente</span>
        </div>
      </div>
    </section>

    <!-- CONTATTI -->
    <section id="contatti" class="section section--last">
      <div class="container">
        <div class="section__head">
          <h2>Contatti</h2>
          <p>Parliamone direttamente. Rispondiamo in modo rapido e chiaro.</p>
        </div>

        <div class="grid two">
          <div class="card">
            <h3>SCAR dei F.lli Scala</h3>
            <p class="muted">📍 Luzzara (RE)</p>

            <div class="contact">
              <a class="contact__item" href="tel:+390000000000" id="telLink">📞 <span>+39 000 000 0000</span></a>
              <a class="contact__item" href="mailto:info@esempio.it" id="mailLink">✉️ <span>info@esempio.it</span></a>
              <a class="contact__item" href="#" id="waLink2" rel="noopener">💬 <span>WhatsApp</span></a>
            </div>

            <p class="note">*Sostituisci telefono/email/WhatsApp appena me li dai.</p>
          </div>

          <form class="card form" action="https://formsubmit.co/your@email" method="POST">
            <h3>Scrivici</h3>
            <p class="muted">(form gratuito — impostiamo la tua email)</p>

            <label>
              Nome
              <input name="name" required placeholder="Il tuo nome" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="nome@email.it" />
            </label>
            <label>
              Messaggio
              <textarea name="message" rows="5" required placeholder="Che auto cerchi? Budget? Preferenze?..."></textarea>
            </label>

            <!-- Anti-spam + redirect (opzionale) -->
            <input type="hidden" name="_subject" value="Richiesta dal sito SCAR dei F.lli Scala" />
            <input type="hidden" name="_captcha" value="true" />

            <button class="btn" type="submit">Invia</button>
            <p class="tiny">Usiamo un servizio gratuito per il form. Nessun dato viene salvato sul sito.</p>
          </form>
        </div>

        <footer class="footer">
          <p>© <span id="year"></span> SCAR dei F.lli Scala · Luzzara (RE)</p>
        </footer>
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
