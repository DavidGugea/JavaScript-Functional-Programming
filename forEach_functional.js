let artists = [
    {
        name: "Kyuss",
        albums: [
            {
                title : "Wretch",
                year : 1991
            },
            {
                title : "Blues for the Red Sun",
                year : 1992
            },
            {
                title : "Welcome to the Sky Valley",
                year : 1994
            },
            {
                title : "...And the Circues Leaves Town",
                year : 1995
            }
        ]
    },
    {
        name : "Ben Harper",
        albums : [
            {
                title : "The Will to Live",
                year : 1997
            },
            {
                title : "Burn to Shine",
                year : 1999
            },
            {
                title : "Live from Mars",
                year : 2001
            },
            {
                title : "Diamonds on the Inside",
                year : 2003
            }
        ]
    }
];

// IMPERATIVE PROGRAMMING
for(let i = 0 ; i < artists.length; i++){
    console.log(artists[i].name);
}

// FUNCTIONAL PROGRAMMING
artists.forEach(
    (
        artist, 
        index, 
        artists
    ) => {
        console.log(artist.name);
    }
);