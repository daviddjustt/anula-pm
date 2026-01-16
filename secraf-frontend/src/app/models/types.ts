export interface Arma {
  id: string; // UUID vindo do Django
  tipo_armamento: string;
  marca: string;
  modelo: string;
  calibre: string;
  quantidade: number;
}

export interface Requerimento {
  id?: string;
  rg: string;
  orgao_expedidor: string;
  armas: string[]; // Array de UUIDs das armas selecionadas
}
