const quotes = [
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },
    {
        quote: "There is nothing on this earth more to be prized than true friendship.",
        author: "Thomas Aquinas",
    },
    {
        quote: "A leader is one who knows the way, goes the way, and shows the way.",
        author: "John C. Maxwell",
    },
    {
        quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        author: "Marcus Aurelius",
    },
    {
        quote: "There is only one happiness in this life, to love and be loved.",
        author: "George Sand",
    },
    {
        quote: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
    },
    {
        quote: "The beginning is the most important part of the work.",
        author: "Plato",
    },
    {
        quote: "The World is my country, all mankind are my brethren, and to do good is my religion.",
        author: "Thomas Paine",
    },
    {
        quote: "When we are no longer able to change a situation - we are challenged to change ourselves.",
        author: "Viktor E. Frankl",
    },
    {
        quote: "Problems are not stop signs, they are guidelines.",
        author: "Robert H. Schuller",
    },
    {
        quote: "What we achieve inwardly will change outer reality.",
        author: "Plutarch",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
    },
    {
        quote: "We love life, not because we are used to living but because we are used to loving.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "We know what we are, but know not what we may be.",
        author: "William Shakespeare",
    },
    {
        quote: "It's not what you look at that matters, it's what you see.",
        author: "Henry David Thoreau",
    },
    {
        quote: "A single rose can be my garden... a single friend, my world.",
        author: "Leo Buscaglia",
    },
    {
        quote: "Friends show their love in times of trouble, not in happiness.",
        author: "Euripides",
    },
    {
        quote: "You don't choose your family. They are God's gift to you, as you are to them.",
        author: "Desmond Tutu",
    }
]

const quote = document.querySelector(".quotes h2");
const author = document.querySelector(".quotes h3");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;