const myPromise = new Promise<number>( (resolve, reject)=> {

    setTimeout( ()=> {
        //yo quiero mi dinero
        // resolve(100);
        reject('Mi amigo se perdio ')
    }, 2000); // 2 segundos

});

myPromise
    .then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
    })

    .catch((reason) => {
        console.warn(reason)
    })

    .finally( () => {
        console.log('pues a seguir con mi vida')
    });