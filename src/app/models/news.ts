import { Body } from './single-language-news-body';

export class News {
    constructor(
        public _id: string,
        public author: string,
        public date: Date,
        public body: Body[],
        public category?: string[],
    ) {}
}