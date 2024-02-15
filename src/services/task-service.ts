import TaskModel from "../db/models/TaskModel";

export default class UserService {
  public async getByUserId(userId: string): Promise<any> {
    const user = await TaskModel.find({ _id: userId });
    if (!user) {
      throw new Error(`Unable to find user ${userId} in database`);
    }
    return user;
  }

}
