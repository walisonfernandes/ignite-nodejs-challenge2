import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
        throw new Error ('ID User ' + user_id + ' not found!')
    }

    const userIsAAdmin = user.admin;

    if (userIsAAdmin === false) {
        throw new Error("User is not a Admin!")
    }
    
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
