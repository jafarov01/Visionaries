import { Avatar, View, Text } from "native-base";
import { StyleSheet } from "react-native";

const CurrencyElement = (props) => {
  return (
    <View style={styles.item}>
      <Avatar
        source={{
          uri: `${props.icon}`,
        }}
        height="40px"
        width="40px"
      ></Avatar>

      <View>
        <Text fontWeight={"700"} color={"#2e4369"} fontSize={"18px"}>
          {props.value}
        </Text>
        <Text color={"#7d7d7d"} fontWeight={"400"}>{props.currency}</Text>
      </View>
    </View>
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
  },
});

export default CurrencyElement;
