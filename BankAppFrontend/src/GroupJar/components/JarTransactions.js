import { View, Flex, Text, Avatar } from "native-base";
// import groupJar from "../../../fakeData/groupJar";
import JarTransaction from "../../../fakeData/jarTransaction";

const JarTransactions = () =>
{

    return (
<Flex width={"100%"} mt={"15px"}>
      <Text color={"#7d7d7d"}>Transactions</Text>
      <Flex
        width={"100%"}
        mt={"5px"}
        backgroundColor={"#e3e5e8"}
        borderRadius={"10px"}
      >
        {JarTransaction.map((x) => {
          return (
            <Flex
              key={x.id}
              width={"95%"}
              margin={"auto"}
              py={"10px"}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex direction="row" alignItems={"center"}>
                <Avatar
                  source={{
                    uri: `${x.userAvatar}`,
                  }}
                ></Avatar>
                <Flex ml={"5px"}>
                  <Text
                    fontSize={"15px"}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    maxWidth={"160px"}
                  >
                    {x.description}
                  </Text>
                  <Text fontSize={"12px"}>{x.userName}</Text>
                </Flex>
              </Flex>
              <Flex>
                <Text>{x.amount}$</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
    );
}

export default JarTransactions;