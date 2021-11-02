import { WorkflowError } from "./workflow-error";


export class ErrorTracker {
    private readonly _errors: WorkflowError[] = [];
    

    constructor() {
        this._errors = [];
    }

    public get Errors(): WorkflowError[] {
        return this._errors;
    }

    public get isValid(): boolean {
        return this._errors.length == 0;
    }

    public addError(property: string, message: string, value: any = null) {
        this._errors.push(new WorkflowError(property, message, value));
    }

    //TODO: Melhorar erros de excessão
    public addException(property:string, exception:Error){
        this.addError(property, exception.message);
    }

    

}