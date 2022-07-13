import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../redux/actions/AddToCart";

export default function Product(props) {
  const product = props.product;
  const cartData = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const addToCart = () => {
    if (!cartData.some((item) => item.id === product.id)) {
      dispatch(addToCartAction({ ...product, count: 1 }));
    }
  };

  return (
    <div className="card mb-3 ms-3 col-md-4 p-3 shadow text-decoration-none text-black">
      <div className="text-end">
      <p className="badge bg-dark w-50">{product.category}</p>
      </div>
      <div className="d-flex justify-content-center">
        <img src={product.image} className="card-img-top w-50" alt="..." />
      </div>
      <div className="card-body">
        <small className="fw-bold lh-1">{product.title}</small>
        <div className="d-flex justify-content-between mt-3">
          <p className="fw-bold">USD{product.price}</p>
          <p className="fw-bold">{product.rating.rate}/5</p>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <div className="btn btn-dark p-2 w-50" onClick={() => addToCart()}>
          Add To Cart
        </div>
      </div>
    </div>
  );
}
