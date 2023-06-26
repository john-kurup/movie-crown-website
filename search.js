const jsonFiles = ['latest-movies.json', 'coming-soon.json', 'ott-release.json'];

// Constants for pagination
const itemsPerPage = 20;
let currentPage = 1;

// Function to fetch and combine JSON data from multiple files
const fetchCombinedJsonData = () => {
    const promises = jsonFiles.map(file =>
        fetch(file).then(response => response.json())
    );
    return Promise.all(promises).then(data => data.flat());
};

// Function to display the search results
const displaySearchResults = (data, searchResults) => {
    searchResults.innerHTML = '';

    if (data.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'No Movie found.';
        searchResults.appendChild(message);
        return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = data.slice(startIndex, endIndex);

    itemsToShow.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = item.title;

        const link = document.createElement('a');
        link.classList.add('card-link');
        link.href = item.link;
        link.textContent = 'View Details';

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(link);

        searchResults.appendChild(card);
    });

    // Update pagination
    const totalPages = Math.ceil(data.length / itemsPerPage);
    displayPagination(totalPages);
};

// Function to display pagination
const displayPagination = (totalPages) => {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;

        if (i === currentPage) {
            pageLink.classList.add('active');
        }

        pageLink.addEventListener('click', () => {
            currentPage = i;
            displaySearchResults(filteredData, searchResults);
        });

        pagination.appendChild(pageLink);
    }
};

// Fetch and process combined JSON data
let filteredData = [];
fetchCombinedJsonData()
    .then(data => {
        filteredData = data;

        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const searchResults = document.getElementById('search-results');

        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            searchResults.innerHTML = '';

            if (searchTerm === '') {
                const message = document.createElement('p');
                message.textContent = 'Please Enter The Movie Name';
                searchResults.appendChild(message);
                return;
            }

            const searchTermWithoutSpaces = searchTerm.replace(/\s/g, '');
            filteredData = data.filter(item => {
                const titleWithoutSpaces = item.title.replace(/\s/g, '');
                return titleWithoutSpaces.toLowerCase().includes(searchTermWithoutSpaces.toLowerCase());
            });

            currentPage = 1;
            displaySearchResults(filteredData, searchResults);
        });
    });
// Get the search results container
const searchResults = document.getElementById('search-results');

// Function to display the search results
function displayResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Number of products per page
    const productsPerPage = 20;

    // Calculate the total number of pages
    const totalPages = Math.ceil(results.length / productsPerPage);

    // Get the current page from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get('page')) || 1;
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // Calculate the starting and ending indices for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    // Display the products for the current page
    for (let i = startIndex; i < endIndex && i < results.length; i++) {
        const product = results[i];

        // Create the card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create the image element
        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.title;
        card.appendChild(image);

        // Create the title element
        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = product.title;
        card.appendChild(title);

        // Create the link element
        const link = document.createElement('a');
        link.classList.add('card-link');
        link.href = product.link;
        link.textContent = 'View Details';
        card.appendChild(link);

        // Append the card to the search results container
        searchResults.appendChild(card);
    }

    // Create the pagination links
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    // Previous page link
    const prevPage = currentPage - 1;
    if (prevPage > 0) {
        const prevLink = createPaginationLink(prevPage, 'Prev');
        pagination.appendChild(prevLink);
    }

    // Page links
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = createPaginationLink(i, i.toString(), currentPage);
        pagination.appendChild(pageLink);
    }

    // Next page link
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
        const nextLink = createPaginationLink(nextPage, 'Next');
        pagination.appendChild(nextLink);
    }
}

// Function to create a pagination link
function createPaginationLink(page, text, currentPage) {
    const link = document.createElement('a');
    link.href = `search.html?page=${page}`;
    link.textContent = text;
    if (currentPage === page) {
        link.classList.add('active');
    }
    return link;
}

// Sample JSON data
const jsonData = [
    // Your JSON data here
];

// Initial search results display
