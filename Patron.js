class Patron
{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
        this.currentBook = null;
    }
    checkout(book)
    {
        this.currentBook = book;
        book.out = true;
        book.patron = this;

        const newDueDate = new Date();
        newDueDate.setDate(newDueDate.getDate() + 14);
        book.dueDate = newDueDate;
    }

}
