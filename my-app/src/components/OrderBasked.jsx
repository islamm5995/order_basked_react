import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../store/data";
import { add_order } from "../store/actions";
import css from '../components/style.css'

const OrderBasked = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order); // Получаем текущие заказы из Redux

  const handleAddToOrder = (item) => {
    dispatch(add_order(item)); // Отправляем действие при нажатии
  };

  return (
    <div className="container" style={styles.orderContainer}>
      <div className="menu" style={styles.menuContainer}>
        <h2 className="menutext">Меню</h2>
        <ul>
          {data.map((el, id) => (
            <li key={id} onClick={() => handleAddToOrder(el)}>
              {el.title} <b>{el.price}</b>
            </li>
          ))}
        </ul>
      </div>
      <div className="basked" style={styles.baskedContainer}>
        <h2 className="ordertext">Заказ</h2>
        <ul>
          {order.map((el, id) => (
            <li key={id}>
              {el.title} <b>{el.price}</b> x {el.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  orderContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuContainer: {
    width: "50%",
  },
  baskedContainer: {
    width: "50%",
  },
};

export default OrderBasked;
