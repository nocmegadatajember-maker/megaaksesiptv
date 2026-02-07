// JavaScript application logic for loading channels from JSON, filtering by search and category, rendering channel cards, and handling video playback.

// Fetch channels from a JSON file
async function fetchChannels() {
    const response = await fetch('path_to_your_channels.json'); // Update with the actual path to your JSON
    const channels = await response.json();
    return channels;
}

// Function to render channel cards
function renderChannels(channels) {
    const container = document.getElementById('channel-container');
    container.innerHTML = ''; // Clear previous entries
    channels.forEach(channel => {
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.innerHTML = `
            <h2>${channel.name}</h2>
            <button onclick="playVideo('${channel.videoUrl}')">Watch</button>
        `;
        container.appendChild(card);
    });
}

// Function to filter channels
function filterChannels(channels, searchTerm, selectedCategory) {
    return channels.filter(channel => {
        const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || channel.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
}

// Function to play video
function playVideo(videoUrl) {
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = videoUrl;
    videoPlayer.play();
}

// Event listener for search and category filter
document.getElementById('filter-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value;
    const selectedCategory = document.getElementById('category').value;
    const channels = await fetchChannels();
    const filteredChannels = filterChannels(channels, searchTerm, selectedCategory);
    renderChannels(filteredChannels);
});

// Initial load
fetchChannels().then(renderChannels);