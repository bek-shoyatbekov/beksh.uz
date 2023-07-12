export interface BlogInterface {
    id: number;
    type: string;
    title: string;
    body: {
        image: string;
        text: string;
    }
}