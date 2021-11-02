import { Injectable, Scope } from "@nestjs/common";
import { StoreCommand } from "../commands/store-command";
import { IStoreRepository } from "../contracts/istore-repository";
import { Store } from "../entities/store";
import { WorkflowBase } from "./workflow-base";

@Injectable({scope: Scope.REQUEST})
export class StoreWorkflow extends WorkflowBase {

    constructor(private readonly storeRepository: IStoreRepository) {
        super();
    }

    public add(command: StoreCommand) {

        this.validateStore(command);

        if (!this.isValid) {
            return;
        }

        try {
            const store = new Store();
            store.new(command);

            return this.storeRepository.add(store);
        } catch (error) {
            this.addError("Add", "Não foi possível inserir a loja");
        }
    }

    public update(command: StoreCommand) {

        this.validateStore(command);

        const store = this.storeRepository.getById(command.id);
        if (!store) {
            this.addError("Store", "Loja não localizada", command.email);
        }

        if (!this.isValid) {
            return;
        }

        try {
            store.update(command);
            return this.storeRepository.update(store);
        } catch (error) {
            this.addError("Update", "Não foi possível atualizar a loja");
        }
    }

    private validateStore(command: StoreCommand) {
        if (!command.email) {
            this.addError("email", "E-mail não informado", command.email);
        }
    }

    public delete(id:string) {
        
        const store = this.storeRepository.getById(id);
        if (!store) {
            this.addError("Store", "Loja não localizada", id);
        }

        if (!this.isValid) {
            return;
        }

        try {
            return this.storeRepository.delete(store);
        } catch (error) {
            this.addError("Delete", "Não foi possível excluir a loja");
        }
    }
}