// main application logic for loading channels, searching, and playing IPTV streams

class IPTV {  
    constructor() {  
        this.channels = [];  
        this.currentChannel = null;  
    }  

    loadChannels(channelList) {  
        this.channels = channelList;  
        console.log('Channels loaded:', this.channels);  
    }  

    searchChannel(searchTerm) {  
        const results = this.channels.filter(channel => channel.name.toLowerCase().includes(searchTerm.toLowerCase()));  
        console.log('Search results:', results);  
        return results;  
    }  

    playChannel(channelId) {  
        const channel = this.channels.find(c => c.id === channelId);  
        if (channel) {  
            this.currentChannel = channel;  
            console.log('Now playing:', channel.name);  
            // Logic for playing the IPTV stream would go here  
        } else {  
            console.log('Channel not found!');  
        }  
    }  
}

// Example usage:
const iptvApp = new IPTV();
iptvApp.loadChannels([{id: 1, name: 'Channel One'}, {id: 2, name: 'Channel Two'}]);
const searchResults = iptvApp.searchChannel('One'); // Searches for channels with "One"
iptvApp.playChannel(1); // Plays Channel One