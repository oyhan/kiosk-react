export interface IAction<TAction,TPayload> {
    type: TAction;
    payload: TPayload
  }
  