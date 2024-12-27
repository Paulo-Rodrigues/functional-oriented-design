export type Vehicle<T extends string, Specs> = Readonly<{ type: T } & Specs>;
export type Car = Vehicle<'car', { licenseNo: string }>;


