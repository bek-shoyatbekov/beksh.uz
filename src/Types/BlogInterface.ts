export interface BlogInterface {
    id: number;
    type: string;
    title: string;
    body: {
        link: string;
        code: object;
        image: string;
    }
}