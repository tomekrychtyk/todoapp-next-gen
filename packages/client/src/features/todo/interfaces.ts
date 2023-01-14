export interface ITodo {
  _id: string;
  title: string;
  done: boolean;
}

export interface ITodosState {
  items: ITodo[];
}
