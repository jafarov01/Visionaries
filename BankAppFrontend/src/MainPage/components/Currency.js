import React from "react";
import { View, Avatar, ScrollView, Text } from "native-base";
import { StyleSheet } from "react-native";
import CurrencyElement from "./CurrencyElement";
import currencies from "../../../fakeData/currencies";
// import AddCurrency from "./AddCurrency";

const Currency = (props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrView}
    >
      {currencies.map((currency) => {
        return (
          <CurrencyElement
            key={currency.name}
            value={currency.value}
            currency={currency.name}
            icon={currency.icon}
          ></CurrencyElement>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#e3e5e8",
    maxHeight: 150,
    minWidth: 150,
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
    borderColor: "grey",
  },
  scrView: {
    maxHeight: 170,
    marginVertical: 10,
    marginHorizontal: 5
},
  currencyImage: {},
});

export default Currency;
