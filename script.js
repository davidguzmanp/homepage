// Publications data - easily editable
const publications = [
    {
        title: "Corrupted by Reasoning: Reasoning Language Models Become Free-Riders in Public Goods Games",
        venue: "COLM 2025",
        authors: "D. Guzman Piedrahita, Y. Yang, M. Sachan, G. Ramponi, B. Schölkopf, Z. Jin",
        abstract: "Multi-agent simulation study revealing how reasoning can lead to free-riding behavior in LLMs in public goods game scenarios. Through systematic multi-agent simulations, we demonstrate that models with enhanced reasoning abilities may paradoxically become more prone to free-riding behavior.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.23276" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.23276" }
        ]
    },
    {
        title: "TextTrojaners at CheckThat! 2024: Robustness of Credibility Assessment with Adversarial Examples through BeamAttack",
        venue: "CLEF 2024",
        authors: "A. Fazla, L. Krauter, D. Guzman Piedrahita, A. Michail",
        abstract: "Novel adversarial attack algorithm achieving 2.8x-3.3x improvement over traditional methods for NLP model robustness testing. BeamAttack utilizes beam search techniques to balance attack effectiveness with computational efficiency.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.23661" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.23661" }
        ]
    },
    {
        title: "Democratic or Authoritarian? Probing a New Dimension of Political Biases in Large Language Models",
        venue: "arXiv",
        authors: "D. Guzman Piedrahita, I. Strauss, B. Schölkopf, R. Mihalcea, Z. Jin",
        abstract: "Novel methodology for assessing LLM alignment with democracy-authoritarianism spectrum, revealing language-dependent political biases. Our findings show that LLMs generally favor democratic values but exhibit increased favorability toward authoritarian figures when prompted in Mandarin.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.12758" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.12758" }
        ]
    },
    {
        title: "Are Language Models Consequentialist or Deontological Moral Reasoners?",
        venue: "arXiv",
        authors: "K. Samway, M. Kleiman-Weiner, D. Guzman Piedrahita, R. Mihalcea, B. Schölkopf, Z. Jin",
        abstract: "Taxonomy of moral rationales for systematically classifying LLM reasoning traces, revealing differences between chain-of-thought and post-hoc moral reasoning. We show that LLM chains-of-thought tend to favor deontological principles, while post-hoc explanations shift toward consequentialist rationales.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2505.21479" },
            { text: "PDF", url: "https://arxiv.org/pdf/2505.21479" }
        ]
    },
    {
        title: "When Ethics and Payoffs Diverge: LLM Agents in Morally Charged Social Dilemmas",
        venue: "arXiv",
        authors: "S. Backmann, D. Guzman Piedrahita, E. Tewolde, R. Mihalcea, B. Schölkopf, Z. Jin",
        abstract: "Introduced MoralSim to evaluate LLM behavior in morally charged prisoner's dilemma and public goods games. We showed substantial variation across models in both their general tendency to act morally and the consistency of their behavior across game types.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2505.19212" },
            { text: "PDF", url: "https://arxiv.org/pdf/2505.19212" }
        ]
    },
    {
        title: "Robustness of Misinformation Classification Systems to Adversarial Examples Through BeamAttack",
        venue: "arXiv",
        authors: "A. Fazla, L. Krauter, D. Guzman Piedrahita, A. Michail",
        abstract: "Advanced adversarial attack methodology using beam search for enhanced text generation. BeamAttack represents a significant advancement in adversarial text generation, moving beyond traditional greedy search approaches to leverage beam search for more effective attacks.",
        links: [
            { text: "arXiv", url: "https://arxiv.org/abs/2506.23661" },
            { text: "PDF", url: "https://arxiv.org/pdf/2506.23661" }
        ]
    },
    {
        title: "LSTM-based Time Series Forecasting for Air Quality",
        venue: "Bachelor's Thesis",
        authors: "D. Guzman Piedrahita",
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

// 3D Coin with Three.js
function init3DCoin() {
    const container = document.getElementById('coin3d');
    if (!container || typeof THREE === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, 400);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-5, 5, -5);
    scene.add(pointLight);

    // Create coin group
    const coinGroup = new THREE.Group();

    // Coin geometry
    const coinRadius = 2;
    const coinThickness = 0.2;
    const coinGeometry = new THREE.CylinderGeometry(coinRadius, coinRadius, coinThickness, 64);

    // Silver material
    const silverMaterial = new THREE.MeshStandardMaterial({
        color: 0xc0c0c0,
        metalness: 0.9,
        roughness: 0.2,
        envMapIntensity: 1
    });

    // Create main coin body
    const coin = new THREE.Mesh(coinGeometry, silverMaterial);
    coin.rotation.z = Math.PI / 2;
    coin.castShadow = true;
    coin.receiveShadow = true;
    coinGroup.add(coin);

    // Create edge detail (rim)
    const rimGeometry = new THREE.TorusGeometry(coinRadius, 0.05, 8, 64);
    const rim = new THREE.Mesh(rimGeometry, silverMaterial);
    rim.rotation.x = Math.PI / 2;
    coinGroup.add(rim);

    // Function to create text texture
    function createTextTexture(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const context = canvas.getContext('2d');

        // Clear canvas with silver gradient
        context.fillStyle = '#c0c0c0';
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Add subtle gradient for depth
        const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
        gradient.addColorStop(0, '#d0d0d0');
        gradient.addColorStop(1, '#a0a0a0');
        context.fillStyle = gradient;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw decorative border
        context.strokeStyle = '#808080';
        context.lineWidth = 8;
        context.beginPath();
        context.arc(256, 256, 240, 0, Math.PI * 2);
        context.stroke();

        // Draw inner circle
        context.lineWidth = 4;
        context.beginPath();
        context.arc(256, 256, 220, 0, Math.PI * 2);
        context.stroke();

        // Draw text
        context.fillStyle = '#505050';
        context.font = 'bold 72px Georgia';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Add text shadow for embossed effect
        context.shadowColor = 'rgba(0, 0, 0, 0.3)';
        context.shadowBlur = 4;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        
        context.fillText(text, 256, 256);

        // Add decorative stars
        const starPositions = [
            [256, 100], [256, 412],
            [100, 256], [412, 256]
        ];
        
        context.font = '36px Georgia';
        context.shadowBlur = 2;
        starPositions.forEach(pos => {
            context.fillText('★', pos[0], pos[1]);
        });

        return new THREE.CanvasTexture(canvas);
    }

    // Create text for both sides
    const frontTexture = createTextTexture('SAFE');
    const backTexture = createTextTexture('PROGRESS');

    // Materials for each face
    const frontMaterial = new THREE.MeshStandardMaterial({
        map: frontTexture,
        metalness: 0.7,
        roughness: 0.3,
        bumpMap: frontTexture,
        bumpScale: 0.05
    });

    const backMaterial = new THREE.MeshStandardMaterial({
        map: backTexture,
        metalness: 0.7,
        roughness: 0.3,
        bumpMap: backTexture,
        bumpScale: 0.05
    });

    // Create faces
    const faceGeometry = new THREE.CircleGeometry(coinRadius - 0.01, 64);
    
    const frontFace = new THREE.Mesh(faceGeometry, frontMaterial);
    frontFace.position.x = coinThickness / 2 + 0.001;
    frontFace.rotation.y = Math.PI / 2;
    coinGroup.add(frontFace);

    const backFace = new THREE.Mesh(faceGeometry, backMaterial);
    backFace.position.x = -coinThickness / 2 - 0.001;
    backFace.rotation.y = -Math.PI / 2;
    coinGroup.add(backFace);

    scene.add(coinGroup);

    // Camera position
    camera.position.z = 5;

    // Mouse controls
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseDown = false;

    container.addEventListener('mousedown', (e) => {
        mouseDown = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        mouseDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!mouseDown) return;
        
        const deltaX = e.clientX - mouseX;
        const deltaY = e.clientY - mouseY;
        
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Touch controls for mobile
    container.addEventListener('touchstart', (e) => {
        mouseDown = true;
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
    });

    document.addEventListener('touchend', () => {
        mouseDown = false;
    });

    container.addEventListener('touchmove', (e) => {
        if (!mouseDown) return;
        
        const deltaX = e.touches[0].clientX - mouseX;
        const deltaY = e.touches[0].clientY - mouseY;
        
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
    });

    // Window resize handler
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / 400;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, 400);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Smooth rotation
        coinGroup.rotation.x += (targetRotationX - coinGroup.rotation.x) * 0.1;
        coinGroup.rotation.y += (targetRotationY - coinGroup.rotation.y) * 0.1;

        // Gentle auto-rotation when not interacting
        if (!mouseDown) {
            targetRotationY += 0.005;
        }

        renderer.render(scene, camera);
    }

    animate();
}

// Initialize 3D coin when Three.js is loaded
if (typeof THREE !== 'undefined') {
    document.addEventListener('DOMContentLoaded', init3DCoin);
} else {
    window.addEventListener('load', init3DCoin);
}