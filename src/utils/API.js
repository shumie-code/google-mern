import axios from "axios";

export default {
    // Grab book json data from the Google books API
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q } });
    },
    // Get all saved book data from mongo database
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // Delete any saved book by the book id
    deleteBook: function(id) {
        return axios.delete("/api/books" + id);
    },
    // Saves books to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};