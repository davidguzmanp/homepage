// Publications data - easily editable
const publications = [
    {
        title: "Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games",
        venue: "COLM 2024",
        authors: "David Guzman Piedrahita, Yang Yang, Mrinmaya Sachan, Giulia Ramponi, Bernhard Schölkopf, Zhijing Jin",
        abstract: "Multi-agent simulation study revealing how reasoning can lead to free-riding behavior in LLMs in public goods game scenarios. Through systematic multi-agent simulations, we demonstrate that models with enhanced reasoning abilities may paradoxically become more prone to free-riding behavior.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2402.05853" },
            { text: "PDF", url: "https://arxiv.org/pdf/2402.05853" }
        ]
    },
    {
        title: "TextTrojaners at CheckThat! 2024: Robustness of Credibility Assessment with Adversarial Examples through BeamAttack",
        venue: "CLEF 2024",
        authors: "David Guzman Piedrahita, Amir Fazla, Lukas Krauter",
        abstract: "Novel adversarial attack algorithm achieving 2.8x-3.3x improvement over traditional methods for NLP model robustness testing. BeamAttack utilizes beam search techniques to balance attack effectiveness with computational efficiency.",
        links: [
            { text: "Paper", url: "https://ceur-ws.org/Vol-3740/paper-42.pdf" },
            { text: "Semantic Scholar", url: "https://www.semanticscholar.org/paper/TextTrojaners-at-CheckThat!-2024%3A-Robustness-of-Piedrahita-Fazla/80ef9dc666d621ffd29b18e17b81c0bba35f3656" }
        ]
    },
    {
        title: "Democratic or Authoritarian? Probing a New Dimension of Political Biases in Large Language Models",
        venue: "arXiv",
        authors: "David Guzman Piedrahita, Ira Strauss, Bernhard Schölkopf, Rada Mihalcea, Zhijing Jin",
        abstract: "Novel methodology for assessing LLM alignment with democracy-authoritarianism spectrum, revealing language-dependent political biases. Our findings show that LLMs generally favor democratic values but exhibit increased favorability toward authoritarian figures when prompted in Mandarin.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2406.08631" },
            { text: "PDF", url: "https://arxiv.org/pdf/2406.08631" }
        ]
    },
    {
        title: "Are Language Models Consequentialist or Deontological Moral Reasoners?",
        venue: "arXiv",
        authors: "Karson Samway, Max Kleiman-Weiner, David Guzman Piedrahita, Rada Mihalcea, Bernhard Schölkopf, Zhijing Jin",
        abstract: "Taxonomy of moral rationales for systematically classifying LLM reasoning traces, revealing differences between chain-of-thought and post-hoc moral reasoning. We show that LLM chains-of-thought tend to favor deontological principles, while post-hoc explanations shift toward consequentialist rationales.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2405.17320" },
            { text: "PDF", url: "https://arxiv.org/pdf/2405.17320" }
        ]
    },
    {
        title: "When Ethics and Payoffs Diverge: LLM Agents in Morally Charged Social Dilemmas",
        venue: "arXiv",
        authors: "Simon Backmann, David Guzman Piedrahita, Eyob Tewolde, Rada Mihalcea, Bernhard Schölkopf, Zhijing Jin",
        abstract: "Introduced MoralSim to evaluate LLM behavior in morally charged prisoner's dilemma and public goods games. We showed substantial variation across models in both their general tendency to act morally and the consistency of their behavior across game types.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2405.15667" },
            { text: "PDF", url: "https://arxiv.org/pdf/2405.15667" }
        ]
    },
    {
        title: "Robustness of Misinformation Classification Systems to Adversarial Examples Through BeamAttack",
        venue: "arXiv",
        authors: "Amir Fazla, Lukas Krauter, David Guzman Piedrahita, Andreas Michail",
        abstract: "Advanced adversarial attack methodology using beam search for enhanced text generation. BeamAttack represents a significant advancement in adversarial text generation, moving beyond traditional greedy search approaches to leverage beam search for more effective attacks.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2404.08996" },
            { text: "PDF", url: "https://arxiv.org/pdf/2404.08996" }
        ]
    },
    {
        title: "LSTM-based Time Series Forecasting for Air Quality",
        venue: "Bachelor's Thesis",
        authors: "David Guzman Piedrahita",
        abstract: "Applied LSTM networks for air-quality forecasting with LIME-based interpretability analysis. This thesis evaluated LSTM neural networks for air-quality time-series forecasting in Lombardy, Italy, with a focus on model interpretability using surrogate models.",
        links: [
            { text: "University of Bergamo", url: "#" }
        ]
    }
];

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Load publications
    loadPublications();
    
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        }
    });
});

function loadPublications() {
    const container = document.getElementById('publications-container');
    
    publications.forEach(pub => {
        const pubCard = createPublicationCard(pub);
        container.appendChild(pubCard);
    });
}

function createPublicationCard(publication) {
    const card = document.createElement('div');
    card.className = 'publication-card';
    
    const linksHtml = publication.links.map(link => 
        `<a href="${link.url}" class="publication-link" target="_blank">${link.text}</a>`
    ).join('');
    
    card.innerHTML = `
        <div class="publication-venue">${publication.venue}</div>
        <h3 class="publication-title">${publication.title}</h3>
        <div class="publication-authors">${publication.authors}</div>
        <div class="publication-abstract">${publication.abstract}</div>
        <div class="publication-links">${linksHtml}</div>
    `;
    
    return card;
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.publication-card, .timeline-item');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 1000);
});