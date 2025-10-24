const person={
    name:"Rohit Moharir",
    age:30,
    address:"Bhagynagar,Old Jalna"
}

function Person(){
    return <>
    <h3>Person Info</h3>
    <div>Name:{person.name}</div>
    <div>Age:{person.age}</div>
    <div>Address:{person.address}</div>
    </>


}
export default Person