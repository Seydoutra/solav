import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowUpRight, BatteryCharging, Bell, ChevronDown, CircleGauge,
  Droplets, Factory, House, Menu, Phone, School, Shirt, Smartphone, Sun,
  Users, WashingMachine, X, Zap
} from 'lucide-react'

const nav = [
  ['Le concept', 'concept'], ['La station', 'station'], ['Pour qui ?', 'publics'],
  ['La plateforme', 'plateforme'], ['Contact', 'contact'],
]

const problems = [
  ['01', 'Le temps du lavage', 'À la main, l’entretien du linge prend une place importante dans la journée.'],
  ['02', 'Le courant interrompu', 'Les délestages compliquent l’usage régulier des équipements électriques.'],
  ['03', 'L’hivernage', 'Quand l’air est humide et la pluie fréquente, sécher le linge devient plus difficile.'],
  ['04', 'Les textiles locaux', 'Le bazin et les pagnes demandent des programmes respectueux de leurs usages.'],
]

const system = [
  { icon: Sun, name: 'Solaire', detail: 'Produit l’énergie au plus près de la station.', tone: 'yellow' },
  { icon: WashingMachine, name: 'Lavage', detail: 'Des cycles pensés pour le quotidien et les textiles locaux.', tone: 'light' },
  { icon: Shirt, name: 'Séchage', detail: 'Aide à rendre le linge prêt, y compris pendant l’hivernage.', tone: 'light' },
  { icon: Droplets, name: 'Eau', detail: 'Une réserve et un circuit de recyclage à valider techniquement.', tone: 'blue' },
  { icon: CircleGauge, name: 'Suivi', detail: 'Observe les cycles, l’énergie et l’eau pour mieux piloter.', tone: 'green' },
]

const audiences = [
  { icon: House, title: 'Ménages', need: 'Alléger le temps consacré au linge et mieux gérer le séchage.', offer: 'Lavage, séchage, collecte et livraison sont des services envisagés.' },
  { icon: School, title: 'Étudiants', need: 'Accéder à une solution pratique lorsque l’espace et l’équipement manquent.', offer: 'Un service de proximité avec paiement à l’usage envisagé.' },
  { icon: Factory, title: 'Professionnels', need: 'Traiter des volumes réguliers pour hôtels, restaurants ou salons.', offer: 'Des formules et contrats professionnels pourront être étudiés.' },
]

const machineChoices = [
  ['Courant continu solaire', 'Limiter les conversions d’énergie et le recours aux batteries.'],
  ['Lavage à froid', 'Réduire le besoin de chauffe tout en adaptant les programmes.'],
  ['Eau maîtrisée', 'Mesurer la consommation et organiser sa réutilisation lorsque c’est pertinent.'],
  ['Textiles locaux', 'Prévoir des cycles adaptés au bazin, aux pagnes et aux usages locaux.'],
  ['Maintenance accessible', 'Faciliter l’entretien dans le contexte guinéen.'],
]

const faqs = [
  ['Qu’est-ce qu’une station SoLav ?', 'Un projet de laverie aménagée dans un conteneur, équipée pour laver, sécher et suivre son activité grâce à l’énergie solaire et à des outils numériques.'],
  ['Comment l’énergie solaire intervient-elle ?', 'Les panneaux installés sur le toit alimenteraient la station, avec une architecture pensée pour limiter la dépendance au réseau et le recours aux batteries.'],
  ["Quel est l’objectif pendant l’hivernage ?", 'Proposer un dispositif de séchage qui aide à rendre le service plus régulier lorsque la pluie et l’humidité ralentissent le séchage naturel.'],
  ["À qui le service s’adresse-t-il ?", 'Aux ménages, aux étudiants et aux professionnels qui ont besoin d’une solution pratique et régulière pour leur linge.'],
  ['La plateforme est-elle déjà disponible ?', 'Non. Elle fait partie de la vision du projet. Les écrans présentés ici sont des aperçus conceptuels avec des données fictives.'],
  ['Comment participer au développement du projet ?', 'Vous pouvez prendre contact pour proposer un emplacement, partager une expertise ou discuter d’un partenariat et des prochaines étapes.'],
]

function Logo() {
  return <a className="logo" href="#top" aria-label="SoLav, retour en haut"><span className="logo-sun"><Sun size={15} /></span>SoLav</a>
}

function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)
  return <>
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="nav-wrap">
        <Logo />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Navigation principale">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
          <a className="button button-small mobile-cta" href="#contact" onClick={close}>Parlons du projet</a>
        </nav>
        <a className="button button-small desktop-cta" href="#contact">Parlons du projet</a>
        <button className="menu-button" type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Projet de laverie solaire · Conakry, Guinée</p>
          <h1>Du linge propre et sec, même pendant les délestages.</h1>
          <p className="hero-intro">SoLav imagine une station de laverie solaire prête à poser, pensée pour les réalités de Conakry : laver, sécher et simplifier l’entretien du linge grâce à l’énergie du soleil.</p>
          <div className="hero-actions">
            <a className="button" href="#concept">Découvrir le concept <ArrowDown size={18} /></a>
            <a className="text-link" href="#contact">Échanger sur le projet <ArrowUpRight size={18} /></a>
          </div>
          <div className="hero-tags" aria-label="Repères du projet">
            <span><Sun size={16}/>Énergie solaire</span><span><WashingMachine size={16}/>Lavage et séchage</span><span><CircleGauge size={16}/>Suivi connecté</span>
          </div>
        </div>
        <figure className="hero-visual">
          <img src={`${import.meta.env.BASE_URL}station-solav-concept.png`} alt="Illustration conceptuelle d’une station SoLav aménagée dans un conteneur vert, avec panneaux solaires, machines et réserve d’eau" width="1536" height="1024" />
          <figcaption><span className="pulse"></span> Illustration du concept</figcaption>
        </figure>
      </section>

      <section className="problem section" id="concept">
        <div className="section-lead"><p className="kicker">Pourquoi SoLav ?</p><h2>Le linge n’attend pas le retour du courant.</h2></div>
        <div className="problem-grid">{problems.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="station section" id="station">
        <div className="station-head"><div><p className="kicker kicker-light">La station</p><h2>Une station complète, pensée comme un seul système.</h2></div><p>Chaque composante a un rôle précis. Ensemble, elles dessinent un service de proximité moins dépendant des coupures de courant.</p></div>
        <div className="system-map">
          {system.map(({icon: Icon, name, detail, tone}, i) => <article className={`system-card ${tone}`} key={name}><div className="system-index">0{i+1}</div><Icon /><h3>{name}</h3><p>{detail}</p></article>)}
        </div>
        <p className="station-conclusion">L’ambition de SoLav : réunir l’essentiel dans une station prête à installer, conçue pour rendre le service de laverie plus accessible et plus régulier.</p>
      </section>

      <section className="audience section" id="publics">
        <div className="section-lead split"><div><p className="kicker">Les usages</p><h2>Trois publics, un même besoin de linge propre.</h2></div><p>Une solution imaginée à partir de situations quotidiennes différentes, avec des services qui restent à préciser et à tester.</p></div>
        <div className="audience-grid">{audiences.map(({icon: Icon, title, need, offer}) => <article key={title}><Icon /><h3>{title}</h3><p>{need}</p><div className="offer"><span>Service envisagé</span>{offer}</div></article>)}</div>
      </section>

      <section className="machines section">
        <div className="machine-title"><p className="kicker">Conception</p><h2>Pensées dès le départ pour le soleil.</h2><p>Les orientations techniques relient chaque choix à une utilité concrète. Elles devront être confirmées par la conception et les essais.</p></div>
        <div className="machine-list">{machineChoices.map(([title, text], i) => <article key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="journey section">
        <div className="section-lead centered"><p className="kicker">Parcours envisagé</p><h2>Un parcours simple, du dépôt au linge prêt.</h2></div>
        <ol className="journey-steps">
          {[
            ['Déposer', 'Déposer son linge ou demander une collecte.'],
            ['Choisir', 'Sélectionner le service adapté à son besoin.'],
            ['Laver & sécher', 'Confier le traitement du linge à la station.'],
            ['Être informé', 'Recevoir une notification lorsque le linge est prêt.'],
          ].map(([title,text], i) => <li key={title}><span>{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}
        </ol>
        <p className="note">Ce parcours illustre le service envisagé ; aucun délai de traitement n’est encore garanti.</p>
      </section>

      <section className="platform section" id="plateforme">
        <div className="platform-copy"><p className="kicker kicker-light">La plateforme</p><h2>Une station physique. Un suivi numérique.</h2><p>SoLav prévoit une plateforme pour faciliter l’expérience client, aider l’opérateur au quotidien et suivre, à terme, plusieurs stations.</p>
          <div className="view-list">
            <article><Users /><div><h3>Vue client</h3><p>Réservation, paiement mobile, notification et collecte — fonctionnalités envisagées.</p></div></article>
            <article><CircleGauge /><div><h3>Vue opérateur</h3><p>Cycles, revenus, énergie, eau et incidents réunis au même endroit.</p></div></article>
            <article><Zap /><div><h3>Vue réseau</h3><p>Une vue consolidée des stations et de leur activité.</p></div></article>
          </div>
          <p className="integration">Orange Money et MTN MoMo sont envisagés comme intégrations futures.</p>
        </div>
        <div className="dashboard" aria-label="Aperçu conceptuel du tableau de bord SoLav avec données fictives">
          <div className="dash-top"><div><span className="mini-logo">S</span><strong>SoLav pilotage</strong></div><Bell size={19}/></div>
          <div className="demo-label">Aperçu conceptuel — données de démonstration</div>
          <div className="dash-greeting"><span>Vue opérateur</span><h3>Bonjour, Mamadou</h3><p>Voici l’activité fictive de la station aujourd’hui.</p></div>
          <div className="metrics">
            <div><span>Cycles</span><strong>18</strong><small>Donnée fictive</small></div>
            <div><span>Énergie</span><strong>42 kWh</strong><small>Donnée fictive</small></div>
            <div><span>Eau suivie</span><strong>680 L</strong><small>Donnée fictive</small></div>
          </div>
          <div className="dash-bottom"><div className="chart"><span>Activité hebdomadaire · fictive</span><div className="bars">{[42,64,50,76,58,88,68].map((h,i)=><i key={i} style={{height:`${h}%`}}></i>)}</div></div><div className="cycles"><span>Cycles en cours</span><div><WashingMachine/><p><strong>Machine 04</strong><small>Lavage · démonstration</small></p><em>En cours</em></div><div><Shirt/><p><strong>Séchoir 02</strong><small>Séchage · démonstration</small></p><em>En cours</em></div></div></div>
        </div>
      </section>

      <section className="benefits section">
        <div className="section-lead split"><div><p className="kicker">Bénéfices attendus</p><h2>Du temps gagné. Un service pensé pour le quotidien.</h2></div><p>SoLav cherche à réunir des bénéfices utiles sans promettre de résultats qui n’ont pas encore été mesurés.</p></div>
        <div className="benefit-grid">
          {[[Smartphone,'Plus simple','Un parcours clair pour déposer, suivre et récupérer son linge.'],[Sun,'Plus solaire','Une station conçue autour de l’énergie disponible sur place.'],[Droplets,'Plus attentive à l’eau','Mesure, réserve et recyclage envisagé pour mieux gérer la ressource.'],[CircleGauge,'Plus visible','Des indicateurs utiles pour comprendre et piloter l’activité.']].map(([Icon,title,text]) => { const I=Icon as typeof Smartphone; return <article key={title as string}><I/><h3>{title as string}</h3><p>{text as string}</p></article>})}
        </div>
      </section>

      <section className="vision section">
        <div className="vision-copy"><p className="kicker kicker-light">Vision de développement</p><h2>Pensée à Conakry. Avec une ambition ouest-africaine.</h2><p>SoLav porte la vision d’une marque de stations adaptées au contexte local, reproductibles et pilotées par une plateforme commune.</p><a className="button" href="#contact">Discuter d’un partenariat <ArrowUpRight size={18}/></a></div>
        <div className="vision-points">
          {['Une marque de stations identifiable','Une conception adaptée au contexte local','Un modèle reproductible','Une plateforme de pilotage','Des possibilités de vente, location et franchise'].map((t,i)=><div key={t}><span>{String(i+1).padStart(2,'0')}</span><p>{t}</p></div>)}
        </div>
      </section>

      <section className="faq section">
        <div className="section-lead"><p className="kicker">Questions fréquentes</p><h2>Comprendre le projet, simplement.</h2></div>
        <div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<ChevronDown aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-main"><p className="kicker kicker-light">La prochaine étape</p><h2>Construisons la première étape de SoLav.</h2><p>Vous souhaitez découvrir le projet, proposer un emplacement ou échanger sur un partenariat ? Prenons contact.</p><div className="contact-actions"><a className="button" href="tel:+224620619064"><Phone size={18}/> Appeler</a><a className="button button-outline" href="https://wa.me/224620619064?text=Bonjour%2C%20je%20souhaite%20obtenir%20davantage%20d%E2%80%99informations%20sur%20le%20projet%20SoLav." target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={18}/></a></div></div>
        <aside className="contact-card"><span>Votre contact</span><h3>Seydou Traoré</h3><p>Porteur du projet</p><hr/><a href="tel:+224620619064">+224 620 61 90 64</a><p>Conakry, Guinée</p></aside>
      </section>
    </main>

    <footer><div className="footer-top"><div><Logo/><p>Conçue en Guinée pour le soleil.</p></div><nav aria-label="Navigation de pied de page">{nav.map(([l,id])=><a href={`#${id}`} key={id}>{l}</a>)}</nav><div><strong>Seydou Traoré</strong><a href="tel:+224620619064">+224 620 61 90 64</a><span>Conakry, Guinée</span></div></div><div className="footer-bottom"><span>SoLav · Projet en développement</span><a href="#top">Retour en haut <ArrowUpRight size={15}/></a></div></footer>
  </>
}

export default App
