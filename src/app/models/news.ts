import { Category } from "./category";

export class News {
    constructor(
        public _id: string,
        public author: string,
        public date: Date,
        public title: Title,
        public article: Article,
        public preview: Preview,
        public img?: string[],
        public category?: Category[],
    ) {}
}

export class Title {
    constructor(
        public en: string,
        public ru: string,
    ) {}
}

export class Article {
    constructor(
        public en: string,
        public ru: string,
    ) {}
}

export class Preview {
    constructor(
        public en: string,
        public ru: string,
        public img: string,
    ) {}
}