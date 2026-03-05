export interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

// type Owner = "DC" | "Marvel";

export enum Owner {
    // DC, // 0
    // Marvel // 1
    DC = "DC",
    Marvel = "Marvel"
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    // owner: "DC", // cuando se usa el type
    owner: Owner.DC, // cuando se usa el enum
  },
  {
    id: 2,
    name: "Spiderman",
    // owner: "Marvel", // cuando se usa el type
    owner: Owner.Marvel, // cuando se usa el enum
  },
  {
    id: 3,
    name: "Superman",
    // owner: "DC", // cuando se usa el type
    owner: Owner.DC, // cuando se usa el enum
  },
  {
    id: 4,
    name: "Flash",
    //owner: "DC", // cuando se usa el type
    owner: Owner.DC, // cuando se usa el enum
  },
  {
    id: 5,
    name: "Wolverine",
    //owner: "Marvel", // cuando se usa el type
    owner: Owner.Marvel, // cuando se usa el enum
  },
  {
    id: 6,
    name: "Green Lantern",
    //owner: 'DC', // cuando se usa el type
    owner: Owner.DC, // cuando se usa el enum
  },
];


export default heroes