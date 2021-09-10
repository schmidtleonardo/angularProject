export interface Order {
  id: number;
  petId: number;
  quantity: number;
  shipDate: string;
  status: orderStatus;
  complete: boolean;
}

export enum orderStatus {
  placed,
  approved,
  delivered
}
