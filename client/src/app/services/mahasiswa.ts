import { Prodi } from "./prodi";

export interface Mahasiswa {
  id: number;
  nim: string;
  nama: string;
  prodi: number | Prodi;
}
