// Email class representing an email
class Email {
    constructor(
        public from: string,
        public to: string,
        public subject: string,
        public body: string,
        public cc?: string[],
        public attachments?: string[]
    ) { }
}

// EmailBuilder class to build Email object step by step
class EmailBuilder {
    private from: string = '';
    private to: string = '';
    private subject: string = '';
    private body: string = '';
    private cc?: string[];
    private attachments?: string[];

    // Methods to set different components of the email
    setFrom(from: string): this {
        this.from = from;
        return this;
    }

    setTo(to: string): this {
        this.to = to;
        return this;
    }

    setSubject(subject: string): this {
        this.subject = subject;
        return this;
    }

    setBody(body: string): this {
        this.body = body;
        return this;
    }

    addCc(cc: string[]): this {
        this.cc = cc;
        return this;
    }

    addAttachments(attachments: string[]): this {
        this.attachments = attachments;
        return this;
    }

    // Method to build the Email object based on the specified components
    build(): Email {
        return new Email(
            this.from,
            this.to,
            this.subject,
            this.body,
            this.cc,
            this.attachments
        );
    }
}

// Usage of the EmailBuilder to construct different Email objects
const email1 = new EmailBuilder()
    .setFrom('sender@example.com')
    .setTo('receiver@example.com')
    .setSubject('Greetings!')
    .setBody('Hello, how are you?')
    .build();

const email2 = new EmailBuilder()
    .setFrom('business@example.com')
    .setTo('client@example.com')
    .setSubject('Invoice')
    .setBody('Please find the attached invoice.')
    .addCc(['accounting@example.com'])
    .addAttachments(['invoice.pdf'])
    .build();

console.log(email1);
console.log(email2);
