// Publications data - easily editable
const publications = [
    {
        title: "Position: Safe Models Do Not Guarantee Safe Societies: The Case for Sociopolitical Risk",
        venue: "ICML 2026",
        award: "Spotlight · Position Paper Track",
        authors: "D. Guzman Piedrahita, D. Banerjee, C. Li, T. J. Zhang, K. Blin, S. Simko, P. S. Pandey, I. Strauss, R. Mihalcea, B. Schölkopf, Z. Jin",
        abstract: "Led a position paper arguing that model-level safety does not by itself address the sociopolitical risk posed by increasingly agentic AI systems. The extended preprint, AI Poses Risks to Democratic and Social Systems, was developed with a senior author and advisor network including Yoshua Bengio, Stuart Russell, Audrey Tang, Bernhard Schölkopf, and Richard Mallah.",
        links: [
            { text: "PDF", url: "https://zhijing-jin.com/d/2026-ai-risk.pdf" }
        ]
    },
    {
        title: "Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games",
        venue: "COLM 2025",
        award: "Best Oral Paper, REALM @ ACL 2025 · 95th-percentile reviews · MSc Thesis",
        authors: "D. Guzman Piedrahita, Y. Yang, M. Sachan, G. Ramponi, B. Schölkopf, Z. Jin",
        abstract: "Investigated the behavior of reasoning-augmented language models in public goods games, finding that reasoning can paradoxically lead to free-riding behavior. Built multi-environment, game-theoretic benchmarks to systematically simulate agent interactions and the influence of punishments and rewards.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.23276" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.23276" }
        ]
    },
    {
        title: "Democratic or Authoritarian? Probing a New Dimension of Political Biases in Large Language Models",
        venue: "EACL 2026",
        award: "Oral presentation",
        authors: "D. Guzman Piedrahita, I. Strauss, B. Schölkopf, R. Mihalcea, Z. Jin",
        abstract: "Proposed a novel methodology to assess LLM alignment with the democracy-authoritarianism spectrum. Found that LLMs generally favor democratic values and leaders, but exhibit increased favorability toward authoritarian figures when prompted in Mandarin.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.12758" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.12758" }
        ]
    },
    {
        title: "Are Language Models Consequentialist or Deontological Moral Reasoners?",
        venue: "EMNLP 2025",
        authors: "K. Samway, M. Kleiman-Weiner, D. Guzman Piedrahita, R. Mihalcea, B. Schölkopf, Z. Jin",
        abstract: "Introduced a taxonomy of moral rationales to systematically classify reasoning traces by consequentialism and deontology. Revealed that LLM chains-of-thought tend to favor deontological principles, while post-hoc explanations shift toward consequentialist rationales.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2505.21479" },
            { text: "PDF", url: "https://arxiv.org/pdf/2505.21479" }
        ]
    },
    {
        title: "When Ethics and Payoffs Diverge: LLM Agents in Morally Charged Social Dilemmas",
        venue: "Preprint",
        award: "Under submission",
        authors: "S. Backmann, D. Guzman Piedrahita, E. Tewolde, R. Mihalcea, B. Schölkopf, Z. Jin",
        abstract: "Introduced MoralSim (Moral Behavior in Social Dilemma Simulation) to evaluate how LLMs behave in the prisoner's dilemma and public goods game under morally charged contexts. Showed substantial variation across models in both their general tendency to act morally and the consistency of their behavior across game types.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2505.19212" },
            { text: "PDF", url: "https://arxiv.org/pdf/2505.19212" }
        ]
    },
    {
        title: "Robustness of Misinformation Classification Systems to Adversarial Examples Through BeamAttack",
        venue: "Preprint",
        award: "Under submission",
        authors: "A. Fazla, L. Krauter, D. Guzman Piedrahita, A. Michail",
        abstract: "Introduced BeamAttack, a novel algorithm for generating adversarial examples in NLP via beam search. Used a masked language model to predict contextually plausible word replacements, improving the coherence of the generated adversarial examples.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.23661" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.23661" }
        ]
    },
    {
        title: "LSTM-based Time Series Forecasting for Air Quality",
        venue: "BSc Thesis",
        authors: "D. Guzman Piedrahita",
        abstract: "Evaluated LSTM neural networks for air-quality time-series forecasting in Lombardy, Italy. Employed surrogate models, specifically LIME, to assess feature importance and enhance interpretability.",
        links: [
            { text: "University of Bergamo", url: "https://www.unibg.it/" }
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
        container.appendChild(createPublicationItem(pub));
    });
}

// Emphasize David's own name within an author list
function emphasizeAuthor(authors) {
    return authors.replace(/(D\. Guzman Piedrahita)/g, '<em>$1</em>');
}

function createPublicationItem(publication) {
    const li = document.createElement('li');

    const linksHtml = publication.links.map(link =>
        `<a href="${link.url}" target="_blank" rel="noopener">${link.text}</a>`
    ).join('');

    const awardHtml = publication.award
        ? `<div class="bib-award"><i class="fas fa-award"></i> ${publication.award}</div>`
        : '';

    li.innerHTML = `
        <div class="bib-abbr"><abbr>${publication.venue}</abbr></div>
        <div class="bib-body">
            <div class="bib-title">${publication.title}</div>
            <div class="bib-author">${emphasizeAuthor(publication.authors)}</div>
            ${awardHtml}
            <div class="bib-abstract">${publication.abstract}</div>
            <div class="bib-links">${linksHtml}</div>
        </div>
    `;

    return li;
}

