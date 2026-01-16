export interface Arma {
  id: string;
  tipo_armamento: string;
  marca: string;
  modelo: string;
  calibre: string;
  quantidade: number;
  // Adicione estas duas linhas abaixo:
  acao: string;
  pais_origem: string;
}

export interface Requerimento {
  id?: string;
  rg: string;
  orgao_expedidor: string;
  armas: string[]; // Array de UUIDs das armas selecionadas
}
