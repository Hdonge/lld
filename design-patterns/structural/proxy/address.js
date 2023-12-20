var Address = /** @class */ (function () {
    function Address(street, city, state, zip, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
    Address.prototype.getStreet = function () {
        return this.street;
    };
    Address.prototype.getCity = function () {
        return this.city;
    };
    Address.prototype.getState = function () {
        return this.state;
    };
    Address.prototype.getZip = function () {
        return this.zip;
    };
    Address.prototype.getCountry = function () {
        return this.country;
    };
    return Address;
}());
var AddressValidatorProxy = /** @class */ (function () {
    function AddressValidatorProxy(street, city, state, zip, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
        this.address = null;
    }
    AddressValidatorProxy.prototype.getStreet = function () {
        return this.street;
    };
    AddressValidatorProxy.prototype.getCity = function () {
        return this.city;
    };
    AddressValidatorProxy.prototype.getState = function () {
        if (this.isValidState(this.state)) {
            return this.state;
        }
        return "Invalid State";
    };
    AddressValidatorProxy.prototype.getZip = function () {
        if (this.isValidZip(this.zip)) {
            return this.zip;
        }
        else {
            return "Invalid Zip";
        }
    };
    AddressValidatorProxy.prototype.getCountry = function () {
        if (this.isValidCountry(this.country)) {
            return this.country;
        }
        else {
            return "Invalid Country";
        }
    };
    AddressValidatorProxy.prototype.isValidCountry = function (country) {
        var allowedCountries = ["US", "CA", "UK"];
        return allowedCountries.includes(country);
    };
    AddressValidatorProxy.prototype.isValidState = function (state) {
        var allowedStates = ["NY", "CA", "WA"];
        return allowedStates.includes(state);
    };
    AddressValidatorProxy.prototype.isValidZip = function (zip) {
        return zip.length === 5;
    };
    AddressValidatorProxy.prototype.isValid = function () {
        return this.isValidCountry(this.country) && this.isValidState(this.state) && this.isValidZip(this.zip);
    };
    return AddressValidatorProxy;
}());
//////////////////////////////////////////////////
var addressValidator = new AddressValidatorProxy("123 Main St", "San Francisco", "CA", "94107", "US");
console.log(addressValidator.isValid());
console.log(addressValidator.getStreet());
console.log(addressValidator.getCity());
console.log(addressValidator.getState());
console.log(addressValidator.getZip());
console.log(addressValidator.getCountry());
