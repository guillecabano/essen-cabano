import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, Info, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice, Button, } from './styles/StyledCart'
import FormatNumber from "../utils/FormatNumber";

const Cart = () => {
    const test = useContext(CartContext);

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
                                        <a class="btn btn-warning" href='#/' type="filled" onClick={() => test.deleteItem(item.idItem)}>Borrar</a>
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
                        <Button>COMPRAR AHORA</Button>
                    </Summary>
            }
        </Bottom>
        </ContentCart>
    </WrapperCart>
);
}

export default Cart;