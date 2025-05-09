export type Task = {
    id: number;
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
};