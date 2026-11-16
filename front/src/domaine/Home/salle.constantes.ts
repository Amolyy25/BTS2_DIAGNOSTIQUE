export interface Salle {
    id: number,
    nom: string,
    capacite: number,
    etage: number | null,
    equipements: string[] | null,
}
