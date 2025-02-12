export function formatAuthors(authors: Author[]): string {
    return authors.map(author => {
        const firstInitial = author.name.charAt(0).toUpperCase() + '.';
        return `${author.lastName} ${firstInitial}`;
    }).join(', ');
}