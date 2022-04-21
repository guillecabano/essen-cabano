import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText } from './styles/StyledCart'

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
                    {
                        test.cartList.length > 0 ? 
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
                            <ProductPrice>$ {item.costItem} C/U</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;