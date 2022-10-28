import React from "react";
import { Flex, Text, Pressable, Avatar } from "native-base";
import groupJar from "../../../fakeData/groupJar";
import GroupJarItem from "./GroupJarItem";
import JarSeeAll from "./JarSeeAll";


const GroupJar = () => {
  return (
    <Flex width={"100%"} mt={"15px"} alignItems={"center"}>
      <Flex width={"95%"}>
        <Flex
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"24px"} fontWeight={"700"}>
            Group Jar
          </Text>
          <Flex>
            <JarSeeAll/>
          </Flex>
        </Flex>
        {groupJar.map(x => 
            <GroupJarItem
              key={x.id}
              avatar={x.avatar}
              name={x.name}
              currency={x.currency}
              value={x.value}
            />)}
      </Flex>
    </Flex>
  );
};

export default GroupJar;
