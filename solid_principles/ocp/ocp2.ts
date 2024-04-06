
//bad example
class Authentication {
    constructor() { }

    authenticateCtools() { }

    authenticateOAuth() { }

    authenticateSocialSignOn() { }
}


// good example

interface IAuthentication {
    authenticate(): string;
}

class CtoolsAuthentication implements IAuthentication {
    authenticate(): string {
        return '';
    }
}

class OAuthentication implements IAuthentication {
    authenticate(): string {
        return '';
    }
}

class SociaSignOnAuthentication implements IAuthentication {
    authenticate(): string {
        return '';
    }
}