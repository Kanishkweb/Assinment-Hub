const books = [
  { title: "Book 1", author: "author 1", year: 2008 },
  { title: "Book 2", author: "author 2", year: 2012 },
  { title: "Book 3", author: "author 3", year: 2015 },
];

const filteredBooks = books
  .filter((book) => book.year > 2010) // Filter books published after 2010
  .map((book) => {
    return {
      title: book.title,
      author: book.author.toUpperCase(), // Capitalize author name
      year: book.year,
    };
  });

console.log("Filtered books with capitalized author names:", filteredBooks);
