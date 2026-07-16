const fs = require('fs');
const path = require('path');

const initialSongs = [
  {
    "id": 1,
    "title": "Chasing Cars",
    "artist": "Snow Patrol",
    "sender": "🦦",
    // "dateSent": "2025-10-14",
    "lyrics": "We'll do it all, everything, on our own...\nIf I lay here, if I just lay here\nWould you lie with me and just forget the world?",
    // "previewUrl": "https://p.infcdn.net/find/audio/sample_preview.mp3",
    "albumArt": ""
  }
];

const outputPath = path.join(__dirname, 'songs.json');
fs.writeFileSync(outputPath, JSON.stringify(initialSongs, null, 2), 'utf-8');
console.log('Successfully updated songs.json structure with audio preview and album art support.');


/* COPY FOR SONGS 

{
    "id": 15,
    "title": "",
    "artist": "",
    "sender": "🦦",
    "lyrics": "",
    "albumArt": "img/"
  }
    
*/