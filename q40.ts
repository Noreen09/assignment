interface Album {
    artist: string;
    title: string;
    numTracks?: number;
}

function make_album(artist: string, title: string, numTracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (numTracks) {
        album.numTracks = numTracks;
    }
    return album;
}

console.log(make_album('Bngtan Sonyodan', 'Wings'));
console.log(make_album('Ariana Grande', 'dangerous woman', 11));
console.log(make_album('The Weeknd', 'Starboy'));