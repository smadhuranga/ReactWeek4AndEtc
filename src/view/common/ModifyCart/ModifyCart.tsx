// import {useState} from "react";
// import type {CartItem} from "../../../model/CartItem.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slice/cartSlice.ts";

interface ModifyCartProps {
    data: any
}

// export const itemList: CartItem[] = [];

export function ModifyCart({data}: ModifyCartProps) {

    const dispatch = useDispatch<AppDispatch>();

    // const [itemCount, setItemCount] = useState(1);
    const item = useSelector((state: RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.product.id));

    // useEffect(() => {
    //     const existingItem = itemList.find(item => item.product.id === data.product.id);
    //
    //     if (existingItem) {
    //         existingItem.itemCount = itemCount;
    //     } else {
    //         itemList.push({
    //             product: data.product,
    //             itemCount: itemCount
    //         })
    //     }
    // }, [itemCount, data]);


    const increaseItemCount = () => {
        // setItemCount((prev) => prev + 1);
        dispatch(increaseQuantity(data.product.id));
    };

    const decreaseItemCount = () => {
        // setItemCount(prevValue => prevValue > 1 ? prevValue - 1 : (alert("Item count cannot be less than 1"), prevValue));
        if (item && item.itemCount > 1) {
            // setItemCount((prev) => prev -1);
            dispatch(decreaseQuantity(data.product.id));
        } else {
            alert("Item count cannot be less than 1");
        }
    };

    return (
        <div className="w-full flex justify-between items-center">
            <button
                className=" w-10 h-9 !px-3 !py-2 text-sm font-semibold !my-3 text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:transition-all cursor-pointer"
                onClick={decreaseItemCount}>-
            </button>
            <div
                className="w-35 h-9 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] flex justify-center items-center">
                <span
                    className="w-34 h-8 !px-3 !py-1 flex justify-center items-center text-sm font-semibold !my-3 text-black bg-white rounded-[0.5rem]">{item?.itemCount}</span>
            </div>
            <button
                className=" w-10 h-9 !px-3 !py-2 text-sm font-semibold !my-3 text-white bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[0.5rem] hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:transition-all cursor-pointer"
                onClick={increaseItemCount}>+
            </button>
        </div>
    );
}