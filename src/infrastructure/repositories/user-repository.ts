import { Injectable } from "@nestjs/common";
import { IUserRepository } from "src/domain/contracts/iuser-repository";
import { User } from "src/domain/entities/user";
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserRepository implements IUserRepository {
    login(email: string, password: string): Promise<User> {

        const auth = Md5.hashStr(`${email}:${password}`)        
        
        return User
            .getRepository()
            .createQueryBuilder()
            .where("active = true")
            .andWhere("password = :auth", { auth })
            .getOne()
    }

    async getById(id: string): Promise<User> {
        return User.findOne(id)
    }

    public getByEmail(email: string): Promise<User> {
        return User
            .getRepository()
            .createQueryBuilder()
            .where("email = :email", { email })
            .getOne()
    }

    async query(search: string): Promise<User[]> {
        search = !search ? '' : search;
        search = `%${search}%`;
        return User
            .getRepository()
            .createQueryBuilder()
            .where("email ilike(:search)", { search })
            .getMany()
    }

    async save(User: User): Promise<User> {
        return User.save();
    }

    async delete(User: User): Promise<User> {
        return User.remove()
    }


}