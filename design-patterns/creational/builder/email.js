// Email class representing an email
var Email = /** @class */ (function () {
    function Email(from, to, subject, body, cc, attachments) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.body = body;
        this.cc = cc;
        this.attachments = attachments;
    }
    return Email;
}());
// EmailBuilder class to build Email object step by step
var EmailBuilder = /** @class */ (function () {
    function EmailBuilder() {
        this.from = '';
        this.to = '';
        this.subject = '';
        this.body = '';
    }
    // Methods to set different components of the email
    EmailBuilder.prototype.setFrom = function (from) {
        this.from = from;
        return this;
    };
    EmailBuilder.prototype.setTo = function (to) {
        this.to = to;
        return this;
    };
    EmailBuilder.prototype.setSubject = function (subject) {
        this.subject = subject;
        return this;
    };
    EmailBuilder.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    EmailBuilder.prototype.addCc = function (cc) {
        this.cc = cc;
        return this;
    };
    EmailBuilder.prototype.addAttachments = function (attachments) {
        this.attachments = attachments;
        return this;
    };
    // Method to build the Email object based on the specified components
    EmailBuilder.prototype.build = function () {
        return new Email(this.from, this.to, this.subject, this.body, this.cc, this.attachments);
    };
    return EmailBuilder;
}());
// Usage of the EmailBuilder to construct different Email objects
var email1 = new EmailBuilder()
    .setFrom('sender@example.com')
    .setTo('receiver@example.com')
    .setSubject('Greetings!')
    .setBody('Hello, how are you?')
    .build();
var email2 = new EmailBuilder()
    .setFrom('business@example.com')
    .setTo('client@example.com')
    .setSubject('Invoice')
    .setBody('Please find the attached invoice.')
    .addCc(['accounting@example.com'])
    .addAttachments(['invoice.pdf'])
    .build();
console.log(email1);
console.log(email2);
