interface Button {
    render(): void;
}

class WindowsButton implements Button {
    render(): void {
        //render windows style button
        console.log("Windows button rendered");
    }
}

class MacButton implements Button {
    render(): void {
        //render mac style button
        console.log("Mac button rendered");
    }
}

//simple factory method
// class ButtonFactory {
//     createButton(os: string): Button | null {
//         if(os.toLowerCase() === "windows") {
//             return new WindowsButton();
//         } else if(os.toLowerCase() === "mac") {
//             return new MacButton();
//         }
//         return null;
//     }
// }

// const buttonFactory = new ButtonFactory('Windows');


//Factory methods
interface ButtonFactory {
    createButton(): Button | null;
}


class WindowsButtonFactory implements ButtonFactory {
    createButton(): Button {
        return new WindowsButton();
    }
}

class MacButtonFactory implements ButtonFactory {
    createButton(): Button {
        return new MacButton();
    }
}

class ButtonImpl {
    private buttonFactory: ButtonFactory;

    constructor(buttonFactory: ButtonFactory) {
        this.buttonFactory = buttonFactory;
    }
    public render(): void  {
        const button = this.buttonFactory.createButton();
        button?.render();
    }
}

const buttonImpl = new ButtonImpl(new WindowsButtonFactory());
buttonImpl.render();

const buttonImplMac = new ButtonImpl(new MacButtonFactory());
buttonImplMac.render();


