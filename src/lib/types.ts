export type Tag = "novo" | "mais-pedido" | "vegetariano" | "picante";

export interface Category {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  emoji: string;
  tags?: Tag[];
  serves?: string;
}

export interface CartLine {
  item: MenuItem;
  qty: number;
}
