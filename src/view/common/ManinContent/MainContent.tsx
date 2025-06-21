// import './MainContent.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import { Contact } from '../../pages/Contact/Contact.tsx';
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart.tsx";
import {itemList} from "../ModifyCart/ModifyCart.tsx";

export function MainContent() {
    return (
       <div className=" flex flex-wrap ml-[1px] mt-25 mb-5 justify-center items-center gap-4">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/shopping-cart" element={<ShoppingCart itemList={itemList}/>}/>

          </Routes>
       </div>
    );
}