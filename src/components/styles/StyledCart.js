import styled from "styled-components";

const WrapperCart = styled.div`
  padding: 20px;
`;

const TitleCart = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ImageCart = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#227b94" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  border-radius: 10px;
`;

const TopText = styled.span`
  margin: 20px;
  font-weight: bold;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export {
  WrapperCart,
  TitleCart,
  ContentCart,
  Product,
  ProductDetail,
  ImageCart,
  Details,
  PriceDetail,
  ProductPrice,
  Top,
  TopButton,
  TopText,
  ProductAmount,
  ProductAmountContainer,
  Bottom,
  Info,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
};
