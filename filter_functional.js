albums =  [
    {
        title : "Wretch",
        year : 2013
    },
    {
        title : "Blues for the Red Sun",
        year : 2001
    },
    {
        title : "Welcome to the Sky Valley",
        year : 2003
    },
    {
        title : "...And the Circues Leaves Town",
        year : 1997
    }
];

/*
IMPERATIVE

let albumsBefore2000 = new Array();
for(let i = 0 ; i < albums.length; i++){
    if(albums[i].year < 2000){
       albumsBefore2000.push(albums[i]);
    }
}

console.log(albumsBefore2000);
*/

let albumsBefore2000 = albums.filter(
    (
        album,
        index,
        albums
    ) => {
        return album.year < 2000;
    }
);