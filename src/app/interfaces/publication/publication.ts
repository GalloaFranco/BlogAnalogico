import { Statistics } from '../statistics/statistics';

export interface Publication {
    title: string;
    author: string;
    date: Date;
    description: string;
    urlToImage: string;
    content: string;
    category: string;
    stats: Statistics;
}
