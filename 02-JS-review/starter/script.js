const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const books = getBooks();

// Array Map Method
const titles = books.map((book) => book.title);
titles;

const titlesAuthor = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
titlesAuthor;

// Filter Method
const longBooks = books
  .filter((book) => book.pages >= 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const sciFi = books.filter((book) => book.genres.includes("science fiction"));
sciFi;

// Reduce Method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// note, push returns new length, not new array. use return to be explicit. dont need to return the acc, though that is the default.
const titless = books.reduce((acc, book) => {
  acc.push(book.title);
  return acc;
}, []);
titles;

// Sort is a mutation method. This can be bad with react which does not want us to mutuate data
const x = [1, 2, 3, 6, 4];
// const sorted = x.sort((a, b) => a - b);

// creat copy of array
const sortedNew = x.slice().sort((a, b) => a - b);
sortedNew;
x;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// add book object to array
const newBook = {
  id: 6,
  title: "Baru Cormorant: The Masquerade",
  author: "Seth Dickinson",
};
const booksAfterAdd = [...books, newBook];

// Delete book object from array
// new to always create copies of arrays, but these would be hidden away under getter setter style methods.
const booksAfterDelete = books.filter((book) => book.id !== 3);
booksAfterDelete;

// Update obj in array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  // Spread book and overwrite a given property. Map in method which takes in key and value as well
  book.id === 1 ? { ...book, pages: 98798878 } : book
);

booksAfterUpdate;

// Async vs Await
// this will return a Promise obj, pending, error, or fufilled
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log("GH");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos(); // this will return a promise bc of async?!
// but this is normally a bad set up, and we set a var after the await in the mthods
console.log(todos);
todos;
