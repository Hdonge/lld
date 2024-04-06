/***
 * Interfaces and abstract class are both used in object oriented programming to provide asbtraction, encapsulation and define contracts for classes. 
 * While they serve similar purposes, still thay have some differences in thier implementations and use cases
 * 
 * Intarface:
 * - Pure Contract - contains only method/properties signature with implementation
 * - Multiple inheritance - class can inherit multiple interfaces and enable composition
 * - Forcing Behaviour - Interfaces are useful for forcing classes to implement specific behaviours
 * 
 * 
 * Abstract class:
 * - Partial implementation
 * - Single inheritance
 * - Common functionality - Sub classes can directly inherit and use reusable code defined in parent abstract class
 */

//There are scenarios where both can be used together.

//Defining Plugin Architecture - You can have interface defining the contract for plugins and abstract class providing some common functionality that plugin can optionally use.
//Hierarchical Structures - Hirerachy of abstract classes providing increasing levels of specilization with interfaces defining additional contracts for certain functionalities.

interface Plugin {
    run(): void;
}

abstract class BasePlugin implements Plugin {
    log(message: string): void {
        console.log(`[plugin] ${message}`);
    }

    abstract run(): void;
}

class ExamplePlugin extends BasePlugin {
    run(): void {
        // logic to run example plugin
    }
}

class AnotherPlugin extends BasePlugin {
    run(): void {
        // logic to run another plugin
    }
}


const exmaplePlugin: Plugin = new ExamplePlugin();
exmaplePlugin.run();
const anotherPlugin: Plugin = new AnotherPlugin();
anotherPlugin.run();
