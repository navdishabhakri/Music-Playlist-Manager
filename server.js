const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const MUSIC = [
  { title: 'Shape of You', 
    artist: 'Ed Sheeran', 
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/05/18/Ed-Sheeran.jpg' 
  },
  { title: 'Someone Like You', 
    artist: 'Adele', 
    image: 'https://i.pinimg.com/originals/51/10/8a/51108ad805a09752640bbeffcae78fd6.jpg' 
  },
  { title: 'Bohemian Rhapsody',
    artist: 'Queen', 
    image: 'https://tse4.mm.bing.net/th?id=OIP.TSJNkwMLuzFnmA1udLL5_QHaEc&pid=Api&P=0&h=180' 
  },
  { title: 'Billie Jean', 
    artist: 'Michael Jackson', 
    image: 'https://tse2.mm.bing.net/th?id=OIP.iwLecwzKUV___-q1HmmZcQHaHy&pid=Api&P=0&h=180' 
  },
  { title: 'Smells Like Teen Spirit', 
    artist: 'Nirvana', 
    image: 'https://tse4.mm.bing.net/th?id=OIP.mjB3Y62AJovLQSWQEOM-CAHaJO&pid=Api&P=0&h=180' 
  }
];

const PLAYLIST = [];


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let songsHTML = '';
  for (let i = 0; i < MUSIC.length; i++) {
    const song = MUSIC[i];
    songsHTML += `
      <li>
        <img src="/${song.image}" alt="${song.artist}">
        <div>
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
          <a href="/add/${i}">Add To Playlist</a>
          <a href="/find/${song.artist}">More Songs by the Artist</a>
        </div>
      </li>
    `;
  }
  res.render('index', { MUSIC });
});

app.get('/find/:artistName', (req, res) => {
  const artistName = req.params.artistName;
  const artistSongs = [];
  for (let i = 0; i < MUSIC.length; i++) {
    if (MUSIC[i].artist === artistName) {
      artistSongs.push(MUSIC[i]);
    }
  }
  res.render('find', { artistName, artistSongs });
});

app.get('/add/:position', (req, res) => {
  const position = parseInt(req.params.position);
  if (position >= 0 && position < MUSIC.length) {
    PLAYLIST.push(MUSIC[position]);
    res.send('Song added to playlist successfully!');
  } else {
    res.send('Invalid position');
  }
});

app.get('/playlist', (req, res) => {
  if (PLAYLIST.length === 0) {
    res.send('Playlist is empty');
  } else {
    res.render('playlist', { LIST: PLAYLIST });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
