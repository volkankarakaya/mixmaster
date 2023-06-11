import React from "react";
import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    <h4 style={{ textAlign: "center" }}>No matchin cocktails found...</h4>;
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      info: strAlcoholic,
      image: strDrinkThumb,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
