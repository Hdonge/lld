interface Button {
    click(): void;
}

interface Textbox {
    setText(text: string): void;
}

class MacButton implements Button {
    public click(): void {
        console.log("Mac Button Clicked");
    }
}

class WindowsButton implements Button {
    public click(): void {
        console.log("Windows Button Clicked");
    }
}

class WindowsTextbox implements Textbox {
    public setText(text: string): void {
        console.log("Windows Textbox Set", text);
    }
}

class MacTextbox implements Textbox {
    public setText(text: string): void {
        console.log("Mac Textbox Set", text);
    }
}

interface ControlsAbstractFactory {
    createButton(): Button;
    createTextbox(): Textbox;
}

class MacControlsFactory implements ControlsAbstractFactory {
    createButton(): Button {
        return new MacButton();
    }

    createTextbox(): Textbox {
        return new MacTextbox();
    }
}


class WindowsControlsFactory implements ControlsAbstractFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createTextbox(): Textbox {
        return new WindowsTextbox();
    }
}


class OSControls { //facade
    static createControlsFactory(os: string): ControlsAbstractFactory | null {
        if (os.toLowerCase() === "mac") {
            return new MacControlsFactory();
        } else if (os.toLowerCase() === "windows") {
            return new WindowsControlsFactory();
        }
        return null;
    }
}


////////////////////////////////////////////////\

console.log("Choose OS , Windows/Mac");

const osFactory = OSControls.createControlsFactory('windows');

if (osFactory) {
    const button: Button = osFactory.createButton();
    button.click();

    const textbox: Textbox = osFactory.createTextbox();
    textbox.setText('text added');
}


