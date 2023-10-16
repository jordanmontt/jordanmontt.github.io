type Author = {
    name: string;
    lastName: string;
};

type Book = {
    title: string;
    type: string;
    role: string;
    pdfUrl: string;
    authors: Author[];
    year: number;
};

type Paper = {
    title: string;
    authors: Author[];
    year: number;
    type: string;
    conference: string;
    pdfUrl: string;
};

type Blogpost = {
    title: string;
    url: string;
    description: string;
}

type Resource = {
    url: string;
    name: string;
};

type Course = {
    title: string;
    institutionUrl: string;
    institution: string;
    description: string;
    date: string;
    hours: number;
    ressources: Resource[];
};

type Presentation = {
    title: string;
    institution: string;
    institutionUrl: string;
    videoUrl: string;
    slidesUrl: string;
    date: string;
};