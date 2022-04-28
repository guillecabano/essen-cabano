import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, Info, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button, } from './styles/StyledCart'
import FormatNumber from "../utils/FormatNumber";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';
const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem,
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
          });

          let order = {
            buyer: {
              name: "Leo Messi",
              email: "leo@messi.com",
              phone: "123456789"
            },
            total: test.calcTotal(),
            items: itemsForDB,
            date: serverTimestamp()
          };

          console.log(order);
    
          const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
          }

          createOrderInFirestore()
          .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
      
        test.removeList();

    } 

    return (
        <WrapperCart>
            <TitleCart>TU CARRITO</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUAR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                        ? <TopButton type="filled" onClick={test.removeList}>BORRAR PRODUCTOS</TopButton>
                        : <TopText>Tu carrito esta vacio!</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info>
                {
                    test.cartList.length > 0 &&
                        test.cartList.map(item =>
                            <Product key={item.idItem}>
                                <ProductDetail>
                                    <ImageCart src={item.imgItem} />
                                    <Details>
                                        <span>
                                            <b>Producto:</b> {item.nameItem}
                                        </span>
                                        <a class="btn btn-warning" href='/#' type="filled" onClick={() => test.deleteItem(item.idItem)}>Borrar</a>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <ProductAmount>{item.qtyItem} unidad(es)</ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} C/U</ProductPrice>
                                </PriceDetail>
                            </Product>
                )
                }
            </Info>
            {
                test.cartList.length > 0 &&
                    <Summary>
                        <SummaryTitle>SU ORDEN</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Impuestos (IVA)</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Descuento Promocional</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={-test.calcPromo()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={createOrder}>COMPRAR AHORA</Button>
                    </Summary>
            }
        </Bottom>
        </ContentCart>
    </WrapperCart>
);
}

export default Cart;