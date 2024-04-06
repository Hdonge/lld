interface Employee {
    getBasicInfo(): { id: number, name: string, role: string }
    calculateSalary(): number;
}

abstract class BaseEmployee implements Employee {
    protected id: number;
    protected name: string;
    protected role: string;

    constructor(id: number, name: string, role: string) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    getBasicInfo(): { id: number; name: string; role: string; } {
        return {
            id: this.id,
            name: this.name,
            role: this.role
        }
    }

    abstract calculateSalary(): number;
}

class FullTimeEmployee extends BaseEmployee {
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        super(id, name, 'Full-Time');
        this.salary = salary;
    }

    calculateSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends BaseEmployee {
    private hourlyRate: number;
    private hoursWorked: number;

    constructor(id: number, name: string, hourlyRate: number, hoursWorked: number) {
        super(id, name, 'Part-Time');
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked
    }

    calculateSalary(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

class ContractEmployee extends BaseEmployee {
    private contractAmount: number;

    constructor(id: number, name: string, contractAmount: number) {
        super(id, name, 'Contract');
        this.contractAmount = contractAmount;
    }

    calculateSalary(): number {
        return this.contractAmount;
    }
}

const fullTimeEmployee: Employee = new FullTimeEmployee(1, 'XYZ', 25000);
fullTimeEmployee.getBasicInfo();
fullTimeEmployee.calculateSalary();

const partTimeEmployee: Employee = new PartTimeEmployee(2, 'PQR', 250, 10);
partTimeEmployee.getBasicInfo();
partTimeEmployee.calculateSalary();

const contractEmployee : Employee = new ContractEmployee(3, 'LMN', 30000);
contractEmployee.getBasicInfo();
contractEmployee.calculateSalary();
