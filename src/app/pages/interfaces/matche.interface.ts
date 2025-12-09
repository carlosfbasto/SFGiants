export interface Matche {
    date: string; // formato 'YYYY-MM-DD'
    status: string;
    matches: {
        name: string;
        logo: string;
        points: number;
    }[];
}