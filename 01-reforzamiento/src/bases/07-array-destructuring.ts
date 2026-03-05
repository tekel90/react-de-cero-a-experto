const characterNames = ['Goku', 'Vegeta', 'Trunks'];

// const [, p2] = characterNames;

// console.log({p2});

const [, , trunks] = characterNames;

console.log({ trunks });

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers)


// Tarea 22. Desestructuracion
const useState = (value: String) =>{
    return [
        value,
        (newValue: string) => {
            console.log(newValue);
        }
    ] as const;
};



// const useState = () =>{
//     return ['ABC', ()=>{console.log('hola')}] as const;
// }

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"