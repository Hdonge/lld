class ExternalRequestProcessor {
    private elevatorSelectionStrategy: ElevatorSelectionStrategy;

    setElevatorSelectionStrategy(elevatorSelectionStrategy: ElevatorSelectionStrategy): void{
        this.elevatorSelectionStrategy = elevatorSelectionStrategy;   
    }

    
}

class ElevatorSystem {
    static elevatorSystemInstance: ElevatorSystem;
    private noOfFloors: number;
    private noOfElevators: number;
    private extReqProcessor: ExternalRequestProcessor;
    private intReqProcessor: InternalRequestProcessor;

    private ElevatorSystem() { } //constructor

    static getElevatorSystem(): ElevatorSystem { //return singleton using static method.
        if (this.elevatorSystemInstance === null) {
            this.elevatorSystemInstance = new ElevatorSystem();
        }
        return this.elevatorSystemInstance;
    }

    initializeElevatorSystem(noOfElevators: number, noOfFloors: number): void { //initialize Elevator System
        this.noOfElevators = noOfElevators;
        this.noOfFloors = noOfFloors;

        console.log(`Initializing Elevator System with noOfFloors ${this.noOfFloors} & noOFElevators ${this.noOfElevators}`);

        const elevatorManager = new ElevatorManager();
        elevatorManager.initializeElevators(this.noOfElevators); //Initialize Elevator Manager

        this.extReqProcessor = new ExternalRequestProcessor();
        this.intReqProcessor = new InternalRequestProcessor();
    }

    setElevatorSelectionStrategy(elevatorSelectionStrategy: ElevatorSelectionStrategy): void {
        this.extReqProcessor.setElevatorSelectionStrategy(elevatorSelectionStrategy);
    }

    sendExternalRequest(direction: ElevatorDirection, srcFloor: number): void {
        this.extReqProcessor.processExternalRequest(new ExternalRequest(direction, srcFloor));
    }

    sendInternalRequest(destFloor: number, srcElevatorId: number): void {
        this.intReqProcessor.processInternalRequest(new InternalRequest(destFloor, srcElevatorId));
    }

}