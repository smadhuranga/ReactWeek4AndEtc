import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type ProductData = {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
};
type ProductProps = {
    data: ProductData;
};

const images:Record<string, string> = import.meta.glob('../../../assets/products/*',{  eager: true, import: 'default'});


export function Product({ data }: ProductProps) {
    console.log(images)

    const [isActive, setIsActive] = useState(false);


    const addToCart = () => {
       setIsActive(true)

    };

    return (
        <>
            <div
                className="w-110 h-112 bg-blue-900 mr-2 mb-2 flex flex-col items-center border-1 rounded-2xl ">
                <div>
                    <img className="h-[200px] w-[165px] !m-8" src={images[`../../../assets/products/${data.image}`]} alt=""/>
                </div>
                <h2>
                    {data.name}
                </h2>
                <h3
                    className="bg-gradient-to-r from-amber-950 to-blue-500   self-end !mr-16.5 rounded-2xl !p-2 !m-2 ">
                    {data.currency} {data.price}
                </h3>
                {
                    isActive ?
                       (<ModifyCart  data={{
                           product: data
                       }}/>)
                        :
                        <button
                            className="bg-gradient-to-r from-amber-950 to-blue-500 h-[50px] w-[370px] rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-cyan-300"
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                }

            </div>

        </>
    );
}