import { Fragment, useContext } from 'react';
import CartContext from '../cart-context';
const CartButton = () => {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <div id="cart-btn-ctn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          id="cart-button"
        >
          <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
        </svg>
        <p id="cart-amount">{cartCtx.totalAmount}</p>
      </div>
    </Fragment>
  );
};

export default CartButton;