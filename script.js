// --- Constants for Grid Configuration ---
const CATEGORY_ORDER = [
    "AI + Machine Learning", "Analytics", "Compute", "Databases",
    "Developer Tools", "Identity + Security", "IoT + MR", "Integration",
    "Management + Governance", "Media + Comms", "Migration", "Networking", "Storage",
    "API Management", "Mixed Reality", "Security", "Web", "Other"
];
const SLA_LEVELS_ORDER = [1.0, 0.99999, 0.99995, 0.9999, 0.9995, 0.999, 0.995, 0.99, 0.98, 0.95, 0.92, 0.90];

// --- SVG Icon Definitions ---
const SERVICE_ICONS = {
    default: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>',
    database: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.03 3 3 5.24 3 8v10c0 2.76 4.03 5 9 5s9-2.24 9-5V8c0-2.76-4.03-5-9-5zm0 2c3.86 0 7 1.79 7 4s-3.14 4-7 4-7-1.79-7-4 3.14-4 7-4zm0 13c-3.86 0-7-1.79-7-4v-1.55c1.06.68 3.04 1.55 7 1.55s5.94-.87 7-1.55V14c0 2.21-3.14 4-7 4z"></path></svg>',
    vm: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18H4V6h16v12zM6 8v8h12V8H6zm7 1h-2v2H9v2h2v2h2v-2h2v-2h-2V9zM4 4h16v1H4V4z"></path></svg>',
    networking: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.78 16.28A8.001 8.001 0 014.38 8.62L3.09 7.33A9.96 9.96 0 002 12c0 2.21.89 4.21 2.34 5.66L2 20h6v-6l-2.22 2.28zM17.66 8.34A9.96 9.96 0 0012 4c-2.21 0-4.21.89-5.66 2.34L4 8h6v6l-2.28-2.22a8.001 8.001 0 0111.4 7.78l1.29 1.29A9.96 9.96 0 0022 12c0-2.21-.89-4.21-2.34-5.66z"></path></svg>',
    storage: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 20h20V4H2v16zm4-4h12V8H6v8zM8 10h8v4H8v-4z"></path></svg>',
    apache_cassandra_mi: '<svg viewBox="0 0 64 64" fill="currentColor"><path d="M32,10c-12.15,0-22,9.85-22,22s9.85,22,22,22s22-9.85,22-22S44.15,10,32,10z M32,50c-9.925,0-18-8.075-18-18s8.075-18,18-18s18,8.075,18,18S41.925,50,32,50z"></path><circle cx="20" cy="32" r="4"></circle><circle cx="44" cy="32" r="4"></circle><circle cx="32" cy="20" r="4"></circle><circle cx="32" cy="44" r="4"></circle><path d="M22.638,34.638l6.724-6.724l-1.414-1.414l-6.724,6.724L22.638,34.638z"></path><path d="M34.638,22.638l6.724,6.724l-1.414,1.414l-6.724-6.724L34.638,22.638z"></path><path d="M29.362,41.362l6.724-6.724l1.414,1.414l-6.724,6.724L29.362,41.362z"></path><path d="M41.362,34.638l-6.724-6.724l1.414-1.414l6.724,6.724L41.362,34.638z"></path><path d="M32,26c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6S35.309,26,32,26z M32,36c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S34.206,36,32,36z"></path><circle cx="32" cy="32" r="2"></circle></svg>'
    // Add more icons here
};

// --- Dark Column Background Colors ---
const LIGHT_COLUMN_BACKGROUNDS = {
    'cat-ai-+-machine-learning': '#106AAE',
    'cat-analytics': '#108A8A',
    'cat-compute': '#C88310',
    'cat-databases': '#6C3DA1',
    'cat-developer-tools': '#105588',
    'cat-identity': '#4A4A4A',
    'cat-identity-+-security': '#4A4A4A',
    'cat-internet-of-things': '#107C90',
    'cat-iot-+-mr': '#107C90',
    'cat-integration': '#7A107A',
    'cat-management-and-governance': '#5A5A5A',
    'cat-management-+-governance': '#5A5A5A',
    'cat-media': '#8A2DAA',
    'cat-media-+-comms': '#8A2DAA',
    'cat-migration': '#55317D',
    'cat-networking': '#10827D',
    'cat-storage': '#6E9310',
    'cat-api-management': '#10226E',
    'cat-mixed-reality': '#106AAE',
    'cat-security': '#2D2D2D',
    'cat-web': '#10629A',
    'cat-other': '#444444'
};

// --- Utility Functions ---
function slugify(text) {
    if (!text) return 'cat-other';
    let slug = text.toLowerCase()
        .replace(/\s\+\s/g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
    return 'cat-' + slug;
}

// --- Tooltip Variables and Functions ---
let hideTooltipTimeout;
const tooltipDelay = 200;
const tooltipElement = document.getElementById('serviceTooltip'); // Assuming this element exists in HTML

function extractServiceCreditInfo(description) {
    if (!description) return "Details in description or official link.";
    const creditKeyword = "Service Credit:";
    const keywordIndex = description.toLowerCase().indexOf(creditKeyword.toLowerCase());
    if (keywordIndex !== -1) {
        let creditText = description.substring(keywordIndex + creditKeyword.length).trim();
        const sentenceEnd = creditText.indexOf('.');
        if (sentenceEnd !== -1 && sentenceEnd < 150) {
            creditText = creditText.substring(0, sentenceEnd + 1);
        } else if (creditText.length > 150) {
            creditText = creditText.substring(0, 150) + "...";
        }
        return creditText;
    }
    return "Details in description or official link.";
}

function showTooltip(event, service) {
    if (!tooltipElement) return; // Guard clause if tooltip element is not found

    document.getElementById('tooltipTitle').textContent = service.name;
    document.getElementById('tooltipCategory').textContent = service.category;
    document.getElementById('tooltipSlaDisplay').textContent = service.slaDisplay;
    document.getElementById('tooltipSlaValue').textContent = service.slaValue;

    const serviceCreditText = extractServiceCreditInfo(service.description);
    document.getElementById('tooltipServiceCredit').textContent = serviceCreditText;

    document.getElementById('tooltipDescription').textContent = service.description || 'No additional details provided.';

    const detailsLinkElement = document.getElementById('tooltipDetailsLink');
    if (service.detailsLink && service.detailsLink !== "#" && service.detailsLink.trim() !== "") {
        detailsLinkElement.href = service.detailsLink;
        detailsLinkElement.parentElement.style.display = 'block';
    } else {
        detailsLinkElement.parentElement.style.display = 'none';
    }

    tooltipElement.classList.add('visible');

    let x = event.clientX + 20;
    let y = event.clientY + 20;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (x + tooltipElement.offsetWidth > viewportWidth - 15) {
        x = viewportWidth - tooltipElement.offsetWidth - 15;
    }
    if (x < 15) x = 15;

    if (y + tooltipElement.offsetHeight > viewportHeight - 15) {
        y = viewportHeight - tooltipElement.offsetHeight - 15;
    }
    if (y < 15) y = 15;

    tooltipElement.style.left = `${x}px`;
    tooltipElement.style.top = `${y}px`;
}

function hideTooltip() {
    if (tooltipElement) {
        tooltipElement.classList.remove('visible');
    }
}

// --- Core Application Logic ---
async function loadSlaDataAndBuildGrid() {
    try {
        const response = await fetch('./azure_slas.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - Could not fetch azure_slas.json.`);
        }
        const slaData = await response.json();

        // Assign iconIds to services (example logic, ideally this comes from JSON)
        slaData.forEach(service => {
            if (!service.iconId) { // Only assign if not already present in JSON
                if (service.name.toLowerCase().includes("database") || service.name.toLowerCase().includes("cosmos db") || service.name.toLowerCase().includes("sql")) {
                    service.iconId = "database";
                } else if (service.name.toLowerCase().includes("virtual machine") || service.name.toLowerCase().includes("vm")) {
                    service.iconId = "vm";
                } else if (service.category.toLowerCase().includes("networking")) {
                    service.iconId = "networking";
                } else if (service.category.toLowerCase().includes("storage")) {
                    service.iconId = "storage";
                } else if (service.name.toLowerCase().includes("cassandra")) {
                    service.iconId = "apache_cassandra_mi";
                }
            }
            if (!service.serviceUrl) {
                // Add a placeholder or a generic search link if a specific URL isn't available
                service.serviceUrl = `https://learn.microsoft.com/en-us/search/?terms=${encodeURIComponent(service.name)}`;
            }
        });
        buildGrid(slaData);
    } catch (error) {
        console.error("Could not load SLA data:", error);
        const gridContainer = document.getElementById('slaGridContainer');
        if (gridContainer) { // Check if gridContainer exists
            gridContainer.innerHTML = `<p class="text-red-400 text-center col-span-full py-10">Error loading SLA data: ${error.message}.</p>`;
        }
    }
}

function buildGrid(slaData) {
    const gridContainer = document.getElementById('slaGridContainer');
    if (!gridContainer) return; // Guard clause
    gridContainer.innerHTML = ''; // Clear loading message

    const uniqueCategoriesFromData = [...new Set(slaData.map(item => item.category))];
    const categoriesInOrder = CATEGORY_ORDER.filter(cat => uniqueCategoriesFromData.includes(cat));
    const remainingCategories = uniqueCategoriesFromData.filter(cat => !CATEGORY_ORDER.includes(cat));
    const finalCategories = [...categoriesInOrder, ...remainingCategories.sort()];

    gridContainer.style.gridTemplateColumns = `minmax(90px, auto) repeat(${finalCategories.length}, minmax(140px, 1fr))`;

    const slaHeaderCell = document.createElement('div');
    slaHeaderCell.className = 'grid-header-category sla-label';
    slaHeaderCell.textContent = 'SLA';
    gridContainer.appendChild(slaHeaderCell);

    const categoryCells = {};
    finalCategories.forEach(cat => categoryCells[cat] = []);

    finalCategories.forEach(category => {
        const headerCell = document.createElement('div');
        headerCell.className = 'grid-header-category';
        headerCell.textContent = category;
        gridContainer.appendChild(headerCell);
    });

    SLA_LEVELS_ORDER.forEach(slaValue => {
        const servicesInThisSlaRow = slaData.filter(service => service.slaValue === slaValue);
        if (servicesInThisSlaRow.length === 0) {
            return;
        }

        const slaLabelCell = document.createElement('div');
        slaLabelCell.className = 'sla-label';
        let slaText = (slaValue * 100).toFixed(3);
        if (slaText.endsWith('.000')) slaText = slaText.substring(0, slaText.length - 4);
        else if (slaText.endsWith('00')) slaText = slaText.substring(0, slaText.length - 2);
        else if (slaText.endsWith('0')) slaText = slaText.substring(0, slaText.length - 1);
        slaLabelCell.textContent = `${slaText}%`;
        gridContainer.appendChild(slaLabelCell);

        finalCategories.forEach(category => {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.category = category;

            categoryCells[category].push(cell);

            const servicesInCell = slaData.filter(service =>
                service.category === category && service.slaValue === slaValue
            );

            servicesInCell.forEach(service => {
                const serviceItem = document.createElement('a');
                serviceItem.href = service.serviceUrl || '#';
                serviceItem.target = '_blank';
                serviceItem.rel = 'noopener noreferrer';

                const categorySlug = slugify(service.category);
                serviceItem.className = `service-item ${categorySlug}`;

                const iconDiv = document.createElement('div');
                iconDiv.className = 'service-item-icon';
                iconDiv.innerHTML = SERVICE_ICONS[service.iconId] || SERVICE_ICONS.default;
                serviceItem.appendChild(iconDiv);

                const name = document.createElement('div');
                name.className = 'service-item-name';
                name.textContent = service.name;
                serviceItem.appendChild(name);

                serviceItem.addEventListener('mouseenter', (event) => {
                    clearTimeout(hideTooltipTimeout);
                    showTooltip(event, service);
                });
                serviceItem.addEventListener('mouseleave', () => {
                    hideTooltipTimeout = setTimeout(hideTooltip, tooltipDelay);
                });

                cell.appendChild(serviceItem);
            });
            gridContainer.appendChild(cell);
        });
    });

    // Apply light background colors to columns
    finalCategories.forEach(category => {
        const categorySlugForBg = slugify(category);
        const lightBgColor = LIGHT_COLUMN_BACKGROUNDS[categorySlugForBg];
        if (lightBgColor && categoryCells[category]) {
            categoryCells[category].forEach(cell => {
                cell.style.backgroundColor = lightBgColor;
            });
        }
    });
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', function() {
    loadSlaDataAndBuildGrid();
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) { // Check if element exists
        currentYearElement.textContent = new Date().getFullYear();
    }

    if (tooltipElement) {
        tooltipElement.addEventListener('mouseenter', () => {
            clearTimeout(hideTooltipTimeout);
        });
        tooltipElement.addEventListener('mouseleave', () => {
            hideTooltipTimeout = setTimeout(hideTooltip, tooltipDelay);
        });
    }
});
