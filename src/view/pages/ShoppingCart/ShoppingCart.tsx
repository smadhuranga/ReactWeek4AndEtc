import type {CartItme} from "../../../model/CartItme.ts";

interface ShoppingCartProps {
    itemList: CartItme[];

}

export function ShoppingCart({itemList}: ShoppingCartProps) {
    return (
        <div className="flex justify-center items-center px-4  py-18 w-full ">
            <div className="w-full max-w-screen-2xl border border-green-200
            ">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-green-700 text-white">
                        <th className="text-xs font-semibold border border-green-600 p-2">Id</th>
                        <th className="text-xs font-semibold border border-green-600 p-2">Name</th>
                        <th className="text-xs font-semibold border border-green-600 p-2">Unit Price</th>
                        <th className="text-xs font-semibold border border-green-600 p-2">Quantity</th>
                        <th className="text-xs font-semibold border border-green-600 p-2">Total Price</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        itemList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-4 text-orange-400">No items in the cart</td>
                            </tr>
                        ) : (
                            itemList.map((item, index) => (
                                    <tr key={item.product.id}
                                        className={`${index % 2 === 0 ? "bg-green-600 " : "bg-green-800"} hover:bg-green-300 border border-green-300 h-3`}>
                                        <td className="text-xs font-semibold border border-green-600 p-2">{item.product.id}</td>
                                        <td className="text-xs font-semibold border border-green-600 p-2">{item.product.name}</td>
                                        <td className="text-xs font-semibold border border-green-600 p-2">{item.product.price} {item.product.currency}</td>
                                        <td className="text-xs font-semibold border border-green-600 p-2">{item.itemCount}</td>
                                        <td className="text-xs font-semibold border border-green-600 p-2">{item.itemCount * item.product.price} {item.product.currency}</td>


                                    </tr>
                                )
                            )
                        )
                    }
                    </tbody>


                </table>
            </div>

        </div>
    );
}