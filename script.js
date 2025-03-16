const genreColors = {
    "Rock": "#e63946",
    "Pop": "#ffbe0b",
    "Hip-Hop": "#3a86ff",
    "Jazz": "#8338ec",
    "Electronic": "#ff006e",
    "Country": "#06d6a0",
    "Classical": "#8d99ae",
    "Reggae": "#f4a261",
    "Metal": "#2b2d42",
    "Blues": "#457b9d"
};

const songs = [
    { title:"sadfasdf", artist:"asdfasdf", duration: 213, vibe:	2, genre: "Rock",link: "https://open.spotify.com/track/3vp9eQblhoda9oRdCSQksA?si=e5c9f9c3d90a4735"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 324, vibe:	5, genre: "Pop",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 214, vibe:	3, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 432, vibe:	3, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 521, vibe:	8, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 134, vibe:	7, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 190, vibe:	6, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 234, vibe:	9, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 278, vibe:	1, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 132, vibe:	1, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 242, vibe:	9, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 174, vibe:	3, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 146, vibe:	5, genre: "Hip-Hop",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 212, vibe:	2, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 213, vibe:	1, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 218, vibe:	7, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 249, vibe:	4, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 262, vibe:	10, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 143, vibe:	10, genre: "Jazz",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 236, vibe:	10, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 226, vibe:	8, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 223, vibe:	9, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 298, vibe:	2, genre: "Blues",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 134, vibe:	4, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 181, vibe:	4, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 223, vibe:	9, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 208, vibe:	2, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 144, vibe:	6, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 262, vibe:	10, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},
{ title:"sadfasdf", artist:"asdfasdf", duration: 244, vibe:	1, genre: "Rock",link: "https://open.spotify.com/track/0uwqhEwCXLvDwgYBKFjfk8?si=ad55b58f92344f6c"},


];

const container = document.getElementById("musicBlocks");

songs.forEach(song => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${song.vibe * 30}px`;
    block.style.width = `${song.duration * 0.12}px`; 
    block.style.backgroundColor = genreColors[song.genre] || "#cccccc";

    const info = document.createElement("div");
    function str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
      }
    const min = Math.floor(song.duration / 60);
    const sec = song.duration - min * 60;
    const finalTime = str_pad_left(min, '0', 2) + ':' + str_pad_left(sec, '0', 2);
    info.classList.add("song-info");
    info.innerHTML = `
        <strong>${song.title}</strong><br>
        <small>by ${song.artist}</small><br>
        <small>Duration: ${finalTime}</small><br>
        <small>Genre: ${song.genre}</small>
    `;

    block.addEventListener('click', () => {
        window.open(song.link, '_blank');
    });

    block.appendChild(info);
    container.appendChild(block);
});
