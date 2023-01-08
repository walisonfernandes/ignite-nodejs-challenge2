import { Request, Response } from "express";
import { stringify } from "uuid";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
        const { user_id } = request.headers;

        const all = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
    
        return response.status(201).json(all);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
  }
}

export { ListAllUsersController };
