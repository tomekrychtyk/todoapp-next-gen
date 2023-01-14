import mongoose, { Document, Schema, Model } from 'mongoose';
import { CategoryDocument } from '../category/Category';
import { ProjectDocument } from '../project/Project';

export type TodoDocument = Document & {
  id: String;
  title: string;
  status: string;
  categories: CategoryDocument[];
  project: ProjectDocument;
};

export const todoSchema = new Schema(
  {
    title: {
      type: Schema.Types.String,
      required: true,
    },
    status: {
      type: Schema.Types.String,
    },
    categories: [{ name: String, id: String }],
    project: {
      name: String,
      id: String,
    },
  },
  {
    collection: 'todos',
    timestamps: true,
  }
);

export const Todo: Model<TodoDocument> = mongoose.model<TodoDocument>(
  'Todo',
  todoSchema
);
