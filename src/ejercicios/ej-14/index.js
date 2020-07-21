import React from "react";
import Page from "./Page";
import Avatar from "./Avatar";

/*https://es.reactjs.org/docs/composition-vs-inheritance.html*/
const Ejercicio14 = () => {
  const user = { name: "Pepe José", email: "pepe@jose.com" };

  const orders = { total: 12 };
  const Avatar2 = <Avatar userName={user.name} totalOrders={orders.total} />;

  return (
    <div>
      <Page avatar={Avatar2} />
    </div>
  );
};
export default Ejercicio14;
