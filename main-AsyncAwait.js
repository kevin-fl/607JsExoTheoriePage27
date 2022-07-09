let func = async () => {
    console.log('OK');
    return 'test'
}

func().then(text => console.log(text));

// comme j ai aucune return dans ma fonction il me renvoi undefined , car je return rien .
/* le async s utilise , se declare avant une fonction 
    --> let func = async () => {

    }

   nb: peut s ecrire aussi 
   async function func() {

   }
*/

/*
async dans la fonction va crée une promise , tt simplement ! 

en bref , dans l exemple ci dessus -> async crée une promise , elle est resolved
et return le mot test sous forme de string.

on appelle la func et on utilise le .then comme avec une promise classique 

*/

/*
AWAIT :

await s'utilise qu avec une fonction qui contient async . 

je peux crée une 2eme fonction que j utilise dans ma fonction principale

*/

let funcTwo = () => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved('test')
        }, 1000);
    })
}

let function = async () => {
    console.log('ok')
  let text =  await funcTwo()
    return text
}

function().then(text => console.log(text))




