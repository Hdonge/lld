interface IAddress {
    getStreet(): string;
    getCity(): string;
    getState(): string;
    getZip(): string;
    getCountry(): string;
}

class Address implements IAddress {
    private street: string;
    private city: string;
    private state: string;
    private zip: string;
    private country: string;

    constructor(street: string, city: string, state: string, zip: string, country: string) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }

    getStreet(): string {
        return this.street;
    }

    getCity(): string {
        return this.city;
    }

    getState(): string {
        return this.state;
    }

    getZip(): string {
        return this.zip;
    }

    getCountry(): string {
        return this.country;
    }
}

class AddressValidatorProxy implements IAddress {
    private address: Address | null = null;
    constructor(
        private street: string,
        private city: string,
        private state: string,
        private zip: string,
        private country: string
    ) { }

    getStreet(): string {
        return this.street;
    }

    getCity(): string {
        return this.city;
    }

    getState(): string {
        if (this.isValidState(this.state)) {
            return this.state;
        }
        return "Invalid State";
    }

    getZip(): string {
        if (this.isValidZip(this.zip)) {
            return this.zip;
        } else {
            return "Invalid Zip";
        }
    }

    getCountry(): string {
        if(this.isValidCountry(this.country)) {
            return this.country;
        } else {
            return "Invalid Country";
        }
    }

    private isValidCountry(country: string): boolean {
        const allowedCountries = ["US", "CA", "UK"];
        return allowedCountries.includes(country);
    }

    private isValidState(state: string): boolean {
        const allowedStates = ["NY", "CA", "WA"];
        return allowedStates.includes(state);
    }

    private isValidZip(zip: string): boolean {
        return zip.length === 5;
    }

    isValid(): boolean {
        return this.isValidCountry(this.country) && this.isValidState(this.state) && this.isValidZip(this.zip);
    }
}

//////////////////////////////////////////////////
const addressValidator = new AddressValidatorProxy("123 Main St", "San Francisco", "CA", "94107", "US");
console.log(addressValidator.isValid());
console.log(addressValidator.getStreet());
console.log(addressValidator.getCity());
console.log(addressValidator.getState());
console.log(addressValidator.getZip());
console.log(addressValidator.getCountry());
