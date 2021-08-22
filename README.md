# Functional programming in JavaScript

### Principles of functional programming in JavaScript:

**1. Functions are first class citizens.**

That means that functions can be assigned to values, passed as arguments inside other functions or be returned from other functions.

```JavaScript
// 1. Functions can be assigned to variables
const say_hello = () => {
    console.log("Hello");
}

// 2. Function can be passed as arguments inside other functions
const return_greeting = (greeting) => {
    return greeting;
}
const say_hello_to = (greet_function, name) => {
    console.log(`${greet_function("Hello")} ${name}`);
}

// You can return them from other functions
const greet_person = (greeting) => {
    const say_hello_to_name = (name) => {
        console.log(`${greeting} ${name}`);
    }

    return say_hello_to_name;
}
```

**2. Immutability**

The data structures that we are working with remain immutable. That means that we won't change the data inside of them but instead, we will get a new data structure back. So we will get a new object back with the updated data instead of modifying the original one.
JavaScript is not a pure functional programming language, so there are some exceptions to this.

**3. Functions have no side effects**

Continuing with the last point we can deduce that functions have no side effects, they act like mathematical functions. That means that functions will always return the same output when you give them the same input.
JavaScript is not a pure functional programming language, so there are some exceptions to this.

**4. Functional Programming is declarative**

In imperative programming languages you have to specify how you get to the result step by step. You have to use while and for loops, if - else statements etc. 
In declarative programming you specify the result that you want to get. You don't care about how the programming language gets you the result, you just have to specify it. Functional programming is declarative.

### forEach()

In order to iterate over an array you can use for-loops. That is imperative programming, since you describe every step. 

```JavaScript
for(let i = 0 ; i < artists.length; i++){
    console.log(artists[i].name);
}
```

In order to use functional programming, you can use the forEach function:

```JavaScript
artists.forEach(
    (
        artist, 
        index, 
        artists
    ) => {
        console.log(artist.name);
    }
);
```

I don't describe every step, I just describe the result that I want to get.

### Map()

You can use map to get a new modified array based on the function given:

```JavaScript
let artistNames = artists.map(
    (artist, index, artists) => {
        return artist.name
    },
);
```

### Filter()

If you want to filter values out of an array then you can use the filter function:

```JavaScript
let albumsBefore2000 = albums.filter(
    (
        album,
        index,
        albums
    ) => {
        return album.year < 2000;
    }
);
```

### Reduce()

If you want to reduce the function to a certain value you can use the reduce function:

```JavaScript
let totalAlbumcCount = artists.reduce(
    function(
        result,
        artist,
        index,
        artists
    ){
        let albumCount = artist.albums.length;
        return result + albumCount
    },
    0
);
```