# Music-Playlist-Manager

This project is a simple Node.js web application that allows users to explore a collection of music, add songs to a playlist, and discover more songs by the same artist. It is built using Express.js and EJS (Embedded JavaScript) templates.

Features

View Music List:
1)Displays a collection of songs with title, artist, and cover image.
2)Options to add songs to a playlist or find more songs by the same artist.

Search by Artist:
View all songs by a specific artist.

Add to Playlist:
Add any song from the music list to a custom playlist.

View Playlist:
Access your custom playlist.

Installation

Clone the repository:
git clone <repository-url>
cd <repository-folder>

Install dependencies:
npm install

Start the application:
node app.js

Open your browser and navigate to:
http://localhost:3000

Routes

Homepage (GET /)

Displays a list of all available songs.
Each song includes:
1)Title
2)Artist
3)Cover Image
Links to:
1)Add to playlist (/add/:position)
2)Find more songs by the artist (/find/:artistName)

Find Songs by Artist (GET /find/:artistName)
Displays a list of songs by the specified artist.

Add to Playlist (GET /add/:position)
Adds a song to the playlist using its index position in the music list.
Returns a success or error message.

View Playlist (GET /playlist)
Displays all songs in the custom playlist.
Shows a message if the playlist is empty.
