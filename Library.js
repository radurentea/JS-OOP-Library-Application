class Library
{
    constructor()
    {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
        this.overDue = []; // Store Patrons who have overdue books
    }
    addPatron(patron)
    {
        this.patrons.push(patron);
    }
    addBook(book)
    {
        this.books.push(book);
    }
    chargeFines()
    {
        const today = new Date();

        const latePatrons = this.patrons.filter(patron => (patron.currentBook !== null && patron.currentBook.dueDate < today));

        for (let patron of latePatrons)
        {
            if (this.overdue.includes(latePatron.name))
            {
                console.log("Don't Charge")
            } else
            {

                const dateDiff = new Date(today - patron.currentBook.dueDate);
                const daysLate = dateDiff.getDate();
                patron.balance += this.dailyFine * daysLate;
                this.overDue.push(latePatron.name);
            }
        }
    }
}