export class WorkflowError{
    
    private _property : string;
    public get Property() : string {
        return this._property;
    }
    private set Property(v : string) {
        this._property = v;
    }
    
    private _message : string;
    public get Message() : string {
        return this._message;
    }
    private set Message(v : string) {
        this._message = v;
    }
    
    private _value : any;
    public get Value() : any {
        return this._value;
    }
    public set Value(v : any) {
        this._value = v;
    }
        
    constructor(property:string, message:string, value:any = null) {
        this.Property = property;
        this.Message = message;
        this.Value = value;
    }
    
}