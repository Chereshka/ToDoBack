import { mongoose } from "@typegoose/typegoose";


export interface ITask {  
  _id:  mongoose.Types.ObjectId,
  deviceId: string,
  title: string,
  text: string,
  important: boolean,
  closed: boolean  
}

export const TaskSchema = new mongoose.Schema({
  deviceId: String,
  title: String,
  text: String,
  important: {type: Boolean, require: false},
  closed: {type: Boolean, require: false} 
}, {
  timestamps: false // Отключение автоматических полей createdAt и updatedAt
});

export default mongoose.model<ITask>("Task", TaskSchema);