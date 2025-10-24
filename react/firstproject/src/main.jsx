import App from "./App";
import BookGallery from "./BookGallery";
import Book from "./components/Book";
import BookTable from "./components/BookTable";
import Heros from "./components/Heros";
import Person from "./components/Person";
import ReactInfo from "./components/Reactinfo";
import {createRoot} from "react-dom/client"



createRoot(document.getElementById('root')).render(

    <div>
        {/* <App/>    
    // <ReactInfo/> */}
        {/* <Person/> */}
        {/* <Heros/> */}
        {/* <BookTable/> */}
        {/* <Book srno="123" title="Atlas Shrugged" author="Ayn Rand" category="Fiction" price="654.30"/>
        <Book srno="234" title="The Fountainhead" author="Ayn Rand" category="Fiction" price="532.40"/>
  <Book srno="345" title="The Alchemist" author="Paulo Cohelo" category="Fiction" price="432.90"/>  */}
  <BookGallery/>

        

    </div>
  

)
