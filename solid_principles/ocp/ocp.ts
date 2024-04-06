/**
 * Open closed Principle : OCP
 * Class should be open for extension but close for modification
 * It should not get modified repeatedly for adding new features
 */

//bad Example
class InvoiceStorage {
    constructor(private invoice: Invoice) { }

    saveToFile(filename: string) { }

    saveToDb() { }
}

// Now to add another way of store we have to modify a class
// which makes OCP violated
// Now to make it extendable

interface IInvoiceStorage {
    save(): void;
}

class InvoiceDbStorage implements IInvoiceStorage {
    save(): void { }
}

class InvoiuceFileStorage  implements IInvoiceStorage {
    save(): void {}
}

class InvoicCloudStorage implements IInvoiceStorage{
    save(): void {}
}