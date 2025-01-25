export interface InventoryItem {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    description: string;
  }
  
  export type SortDirection = 'asc' | 'desc';