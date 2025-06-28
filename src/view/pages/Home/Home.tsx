import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../slice/productSlice.ts";
import type {AppDispatch} from '../../../store/store.ts';
import type {RootState} from "../../../store/store.ts";


export function Home() {

    const dispatch = useDispatch<AppDispatch>();
    const {list} = useSelector((state: RootState) => state.products);


    // const [products, setProducts] = useState<ProductData[]>([]);


    useEffect(
        () => {
            dispatch(getAllProducts());
            // const fetchData = async ()=>{
            //   try {
            //       const response =  await fetch('./product-data.json')
            //       const jsonData = await response.json();
            //       // console.log(jsonData);
            //       setProducts(jsonData);
            //       console.log(products)
            //   }catch (error) {
            //       console.error("Error fetching data: ", error);
            //   }
            //
            //
            // }
            // fetchData()
        }, []
    )

    return (
        <div>
            <div className=" flex  flex-wrap ml-[1px] mt-5 mb-5 justify-center items-center gap-4">

                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }

                {/*<div*/}
                {/*    className="w-110 h-112 bg-blue-900 mr-2 mb-2 flex flex-col items-center border-1 rounded-2xl ">*/}
                {/*    <div>*/}
                {/*        <img className="h-[200px] w-[165px] !m-8" src={product1} alt=""/>*/}
                {/*    </div>*/}
                {/*    <h2>*/}
                {/*        Pc1*/}
                {/*    </h2>*/}
                {/*    <h3*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500   self-end !mr-16.5 rounded-2xl !p-2 !m-2 ">*/}
                {/*        LKR 500*/}
                {/*    </h3>*/}
                {/*    <button*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500 h-[50px] w-[370px] rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-cyan-300">*/}
                {/*        Add to cart*/}
                {/*    </button>*/}

                {/*</div>*/}

                {/*<div*/}
                {/*    className="w-110 h-112 bg-blue-900 mr-2 mb-2 flex flex-col items-center border-1 rounded-2xl ">*/}
                {/*    <div>*/}
                {/*        <img className="h-[200px] w-[265px] !m-8" src={product2} alt=""/>*/}
                {/*    </div>*/}
                {/*    <h2>*/}
                {/*        pc2*/}
                {/*    </h2>*/}
                {/*    <h3*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500   self-end !mr-16.5 rounded-2xl !p-2 !m-2 ">*/}
                {/*        LKR 500*/}
                {/*    </h3>*/}
                {/*    <button*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500 h-[50px] w-[370px] rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-cyan-300">*/}
                {/*        Add to cart*/}
                {/*    </button>*/}

                {/*</div>*/}

                {/*<div*/}
                {/*    className="w-110 h-112 bg-blue-900 mr-2 mb-2 flex flex-col items-center border-1 rounded-2xl ">*/}
                {/*    <div>*/}
                {/*        <img className="h-[200px] w-[285px] !m-8" src={product} alt=""/>*/}
                {/*    </div>*/}
                {/*    <h2>*/}
                {/*        pc3*/}
                {/*    </h2>*/}
                {/*    <h3*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500   self-end !mr-16.5 rounded-2xl !p-2 !m-2 ">*/}
                {/*        LKR 500*/}
                {/*    </h3>*/}
                {/*    <button*/}
                {/*        className="bg-gradient-to-r from-amber-950 to-blue-500 h-[50px] w-[370px] rounded-2xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-cyan-300">*/}
                {/*        Add to cart*/}
                {/*    </button>*/}

                {/*</div>*/}


            </div>
        </div>
    );
}