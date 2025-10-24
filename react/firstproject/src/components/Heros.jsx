const heros=[
    {
        name:"James Bond",
        age:65,
        address:"London",
        speciality:"Adventure spy"
    },
    {
        name:"John Galt",
        age:55,
        address:"USA",
        speciality:"Super hero"
    }
]

function Heros(){
    return <div>
        {
            heros.map((h)=> <div>
                <div>Name:{h.name}</div>
                <div>Age:{h.age}</div>
                <div>Address:{h.address}</div>
                <div>speciality:{h.speciality}</div>
            </div>
        )
        }
    </div>
}

export default Heros