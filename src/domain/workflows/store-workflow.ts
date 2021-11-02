import { Injectable } from "@nestjs/common";
import { IStoreRepository } from "../contracts/istore-repository";
import { WorkflowBase } from "./workflow-base";

@Injectable()
export class StoreWorkflow extends WorkflowBase {
        
    constructor(private readonly storeRepository: IStoreRepository) {
        super();
    }

    public add(): any{

        this.addError("teste", "mensagem");
        
        const email = this.storeRepository.getByEmail("");
        return {
            workflow:email
        };        
    }
}