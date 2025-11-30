const searchIndex = [
    {
        title: "Legal Translation",
        url: "/services/legal-translation/",
        category: "Services",
        keywords: "legal translation moj certified court documents contracts agreements powers of attorney"
    },
    {
        title: "Golden Visa Translation",
        url: "/services/golden-visa-translation/",
        category: "Services",
        keywords: "golden visa uae residence permit investor entrepreneur specialist talent documents"
    },
    {
        title: "Attestation Services",
        url: "/services/attestation/",
        category: "Services",
        keywords: "attestation mofa ministry foreign affairs legalization apostille embassy"
    },
    {
        title: "Certificate Translation",
        url: "/services/certificate-translation/",
        category: "Services",
        keywords: "certificate birth marriage death degree diploma academic educational"
    },
    {
        title: "Corporate Translation",
        url: "/services/corporate-translation/",
        category: "Services",
        keywords: "corporate business company trade license memorandum articles association"
    },
    {
        title: "Palm Jumeirah",
        url: "/locations/palm-jumeirah/",
        category: "Locations",
        keywords: "palm jumeirah dubai translation service hnw high net worth luxury"
    },
    {
        title: "JLT - Jumeirah Lake Towers",
        url: "/locations/jlt/",
        category: "Locations",
        keywords: "jlt jumeirah lake towers free zone dmcc translation"
    },
    {
        title: "DIFC",
        url: "/locations/difc/",
        category: "Locations",
        keywords: "difc dubai international financial centre legal translation courts"
    },
    {
        title: "Business Bay",
        url: "/locations/business-bay/",
        category: "Locations",
        keywords: "business bay dubai downtown translation corporate"
    },
    {
        title: "Abu Dhabi",
        url: "/locations/abu-dhabi/",
        category: "Locations",
        keywords: "abu dhabi capital uae translation adgm"
    },
    {
        title: "Sharjah",
        url: "/locations/sharjah/",
        category: "Locations",
        keywords: "sharjah emirate translation services"
    },
    {
        title: "Legal Industry",
        url: "/industries/legal/",
        category: "Industries",
        keywords: "legal law firms lawyers attorneys court litigation"
    },
    {
        title: "Healthcare Industry",
        url: "/industries/healthcare/",
        category: "Industries",
        keywords: "healthcare medical hospital clinic doctors patients"
    },
    {
        title: "Real Estate Industry",
        url: "/industries/real-estate/",
        category: "Industries",
        keywords: "real estate property dld poa power of attorney"
    },
    {
        title: "E-commerce Industry",
        url: "/industries/e-commerce/",
        category: "Industries",
        keywords: "ecommerce online business digital marketplace"
    },
    {
        title: "Pricing Guide",
        url: "/resources/pricing-guide/",
        category: "Resources",
        keywords: "pricing price cost rates fees quote"
    },
    {
        title: "FAQ",
        url: "/resources/faq/",
        category: "Resources",
        keywords: "faq questions answers help support"
    },
    {
        title: "Document Checklist",
        url: "/resources/document-checklist/",
        category: "Resources",
        keywords: "documents checklist requirements prepare"
    },
    {
        title: "Golden Visa Checklist 2025",
        url: "/resources/golden-visa-checklist/",
        category: "Resources",
        keywords: "golden visa checklist 2025 investor entrepreneur specialist documents required"
    },
    {
        title: "UAE Attestation Guide 2025",
        url: "/resources/attestation-guide/",
        category: "Resources",
        keywords: "attestation guide mofa hague apostille legalization chain"
    },
    {
        title: "Contact Us",
        url: "/contact/",
        category: "Contact",
        keywords: "contact whatsapp email phone call quote"
    }
];

function performSearch(query) {
    if (!query || query.length < 2) return [];
    
    const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 1);
    
    const results = searchIndex.map(item => {
        const searchableText = `${item.title} ${item.category} ${item.keywords}`.toLowerCase();
        let score = 0;
        
        searchTerms.forEach(term => {
            if (item.title.toLowerCase().includes(term)) score += 10;
            if (item.category.toLowerCase().includes(term)) score += 5;
            if (item.keywords.includes(term)) score += 3;
        });
        
        return { ...item, score };
    }).filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
    
    return results;
}

function displaySearchResults(results, container) {
    if (!container) return;
    
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No results found. Try different keywords or browse our quick links above.</p>';
        return;
    }
    
    const html = results.map(item => `
        <a href="${item.url}" class="search-result-item">
            <span class="result-category">${item.category}</span>
            <span class="result-title">${item.title}</span>
        </a>
    `).join('');
    
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    let resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer && searchInput) {
        resultsContainer = document.createElement('div');
        resultsContainer.id = 'searchResults';
        resultsContainer.className = 'search-results';
        searchInput.parentNode.after(resultsContainer);
    }
    
    function doSearch() {
        const query = searchInput ? searchInput.value : '';
        const results = performSearch(query);
        displaySearchResults(results, resultsContainer);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', doSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            doSearch();
        });
    }
});
