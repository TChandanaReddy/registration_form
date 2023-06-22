console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    const promiseWifeBringsTicks = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('ticket');
        },3000)
    });
    // const promiseWifeBringsTicks = new Promise((resolve,reject) => {
    //     setTimeout(()=>{
    //         reject('ticket');
    //     },3000)
    // });
    // let ticket
    // try{
    //     ticket = await promiseWifeBringsTicks;
    // }catch(e){
    //     ticket= 'sad face';
    // }
    
    const getPopCorn = new Promise((resolve,reject) => resolve(`popcorn`));
    const addButter = new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject)=>resolve(`ColdDrink`));

    let ticket=await promiseWifeBringsTicks;
    
    console.log(`wife:i have ${ticket}`);
    console.log('husband:we should go in');
    console.log('wife: no i am hungry');

    let[popcorn, butter, ColdDrink] = await Promise.all([getPopCorn,addButter,getColdDrinks]);
    // let popcorn= await getPopCorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

    //let butter=await addButter;

    console.log(`husband: i got some${butter}`);

    //let ColdDrink=await getColdDrinks;

    console.log(`wife: i need ${ColdDrink}`);
    console.log('husband: here is your coldDrink');
    console.log('wife: lets go we are getting late');

    return ticket;

}
preMovie().then((msg)=>console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
