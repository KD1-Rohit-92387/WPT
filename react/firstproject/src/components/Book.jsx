
const imageBaseUrl=  "https://nilesh-g.github.io/learn-web/JS/images/webp/"

function Book ({srno,title,author,category,price}){
    return <div style={{
        border:"1px solid black",
        padding:"4px",
        margin: "5px",
        diplay:"inline-block",
        backgroundColor: "baige",
        boxShadow:'2px 2px 5px gray'
    }}>
             <div>Title:{title}</div>
            <div>Author:{author}</div>
            <div>Category:{category}</div>
            <div>Price:Rs.{price}/-</div>
             <img width={80} alt={"image"} src={imageBaseUrl+"book"+b.srno+".webp"}  />
        </div>
    
}


export default Book