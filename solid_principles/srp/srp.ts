/***
 * Single responsiblity Principle : SRP
 * 
 * class should have only one responsiblity
 * class should have only one reason to change
 * it should not be overloaded with multiple resposiblities
 */

//Bad Example
class Invoice {
    constructor(
        private book: any,
        private quantity: number,
        private discountRate: number,
        private taxRate: number,
        private total: number
    ) {
    }

    calculateTotal() {
        /// some price calculation logic

        let priceWithTaxes = () => { }
        return priceWithTaxes;
    }

    printInvoice() {
        //logic to print invoice
    }

    saveInvoiceToDb() {
        //logic to save invoice to db
    }
}


// Above class is loaded with multiple resposiblities where is caluate invoice, print and save it.
// Ideal way is print and save can be done through a different class


class InvoicePrinter {
    constructor(private invoice: Invoice) {
    }

    print() {
        //logic to print invoice
        //console.log(this.invoice);
    }
}

class InvoiceFileStore {
    constructor(private invoice: Invoice) { }

    saveToFile() { }
}

class InvoiceDbStore {
    constructor(private invoic: Invoice) { }

    saveToDb() { }
}