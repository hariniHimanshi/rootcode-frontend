import { IComment } from "./IComment";

export interface IPost {
  id: string;
  title: string;
  description: string;
  color: string;
  comments: IComment[];

}
