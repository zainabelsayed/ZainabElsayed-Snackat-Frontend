import { useSelector, useDispatch } from "react-redux";
import { increaseCartAction } from "../redux/actions/IncreaseProduct";
import { removeCartAction } from "../redux/actions/RemoveCart";
import { decreaseCartAction } from "../redux/actions/DecreaseProduct";
export default function Cart() {
  const cartData = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(removeCartAction(id));
  };
 const increaseCart = (id)=>{
    dispatch(increaseCartAction(id));
 }
 const decreaseCart = (id)=>{
    dispatch(decreaseCartAction(id));
 }
  return (
    <div>
      {cartData.map((product) => (
        <div
          key={product.id}
          className="card mb-3 col-auto p-3 shadow text-decoration-none text-black"
        >
            <div className="d-flex justify-content-end">
            <button
            className="btn btn-danger w-50"
            onClick={() => removeCart(product.id)}
          >
            Remove
          </button>
      </div>
          
          <div className="d-flex justify-content-center">
        <img src={product.image} className="card-img-top w-50" alt="..." />
      </div>
          <div className="card-body">
            <small className="fw-bold lh-1">{product.title}</small>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <div className="btn btn-primary me-2" onClick={()=>increaseCart(product.id)}>+</div>
            <div className="text-center"> {product.count}</div>
            <div className="btn btn-primary ms-2" onClick={()=>decreaseCart(product.id)}>-</div>
          </div>
        </div>
      ))}
    </div>
  );
}
