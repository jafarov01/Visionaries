import { Flex, Text, Avatar } from "native-base";

const GroupJarItem = (props) =>
{

    return (
        <Flex
            width={"100%"}
            alignItems={"center"}
            justifyContent={'space-between'}
            borderRadius={"8px"}
            backgroundColor={"#e3e5e8"}
            minHeight={"80px"}
            direction={"row"}
            px={"10px"}
            mt={'5px'}
          >
            <Avatar
              source={{
                uri: `${props.avatar}`,
              }}
            ></Avatar>
            <Flex ml="8px" height={'50px'} width={'75%'}>
              <Text fontWeight={'600'} fontSize='17px'>{props.name}</Text>
              <Text fontWeight={'600'} color={"#1e8f3b"}>Balance: {props.value}{props.currency}</Text>
            </Flex>
            <Text color={'#00B9FF'}>View</Text>
          </Flex>
    );
}


export default GroupJarItem;