export const Genre = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Thriller" },
];

export function getGenre() {
  return Genre.filter((g) => g);
}
