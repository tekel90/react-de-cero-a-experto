import { heroes, Owner, type Hero } from "../data/heroes.data"

const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find( ( hero ) =>{
        return hero.id === id;
    });

    // if ( !hero ) {
    //     throw new Error (`No existe un heroe con el id ${ id }`)
    // }

    return hero;

}

console.log(getHeroById(6))

export const getHeroesByOwner = (owner: Owner): Hero[] | undefined => {
  const heroByOwner = heroes.filter((hero) => hero.owner === owner);

  return heroByOwner;
};