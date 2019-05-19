class Library
{
    constructor()
    {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
    }
    addPatron(patron)
    {
        this.patrons.push(patron);
    }
    addBook(book)
    {
        this.books.push(book);
    }
}