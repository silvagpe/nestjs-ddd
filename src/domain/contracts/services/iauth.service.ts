export abstract class IAuthService {
    abstract  login(user: any) 
    abstract  validateUser(email: string, password: string): Promise<any>
    
}