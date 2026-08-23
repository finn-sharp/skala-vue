<script setup>
import HStack from './designsystem/layout/HStack.vue'
import VStack from './designsystem/layout/VStack.vue';
import GridRoot from './designsystem/layout/GridRoot.vue';
import GridItem from './designsystem/layout/GridItem.vue';
import Flex from './designsystem/layout/Flex.vue';
import Float from './designsystem/layout/Float.vue'
import Box from './designsystem/layout/Box.vue'
import WeatherMockup from '../components/WeatherMockup.vue'
import WeatherComposition from '../components/WeatherComposition.vue'
</script>

<template>
    <Box :border-width="1" border-color="stroke-neutral-muted" class="p-4">
        <VStack bg="layerDefault" gap="x2" width="full" border-radius="r2">
            <HStack bg="neutralWeak" gap="x2" width="full" border-radius="r2">
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2"><WeatherMockup/></Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2"><WeatherComposition/></Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2"><WeatherMockup/></Box>
            </HStack>
            <VStack bg="neutralWeak" gap="x2" width="full" border-radius="r2">
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">1</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">2</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">3</Box>      
            </VStack>
            <Box  width="480px" height="480px" :border-width="1" border-color="stroke-neutral-muted" class="p-4">
                <Float placement="top-start"><button class="bg-blue-500 text-white p-1 rounded">Top Start</button></Float>
                <Float placement="top-center"><button class="bg-blue-500 text-white p-1 rounded">Top Center</button></Float>
                <Float placement="top-end"><button class="bg-blue-500 text-white p-1 rounded">Top End</button></Float>
                <Float placement="middle-start"><button class="bg-blue-500 text-white p-1 rounded">Middle Start</button></Float>
                <Float placement="middle-center"><button class="bg-blue-500 text-white p-1 rounded">Middle Center</button></Float>
                <Float placement="middle-end"><button class="bg-blue-500 text-white p-1 rounded">Middle End</button></Float>
                <Float placement="bottom-start"><button class="bg-blue-500 text-white p-1 rounded">Bottom Start</button></Float>
                <Float placement="bottom-center"><button class="bg-blue-500 text-white p-1 rounded">Bottom Center</button></Float>
                <Float placement="bottom-end"><button class="bg-blue-500 text-white p-1 rounded">Bottom End</button></Float>
            </Box>
            <Box  width="500px" height="200px" :border-width="1" border-color="stroke-neutral-muted">
                <Float placement="top-start" offset-y="x2" offset-x="x2"><button>Top Center</button></Float>
                <Float placement="middle-center" offset-y="x2" offset-x="x2"><button>Middle Center</button></Float>
                <Float placement="bottom-end" offset-y="x2" offset-x="x2"><button>Bottom Center</button></Float>
            </Box>
            <Flex bg="blue" flex-direction="row" gap="x2" width="full" :padding-y="10">
                <Flex bg="white" flex-direction="column" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">1</Flex>
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">2</Flex>
                </Flex>
                <Flex bg="white" flex-direction="row" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">3</Flex>
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">4</Flex>
                </Flex>
                <Flex bg="white" px="x4" py="x3" border-radius="r2">
                    <Flex flex-direction="column" bg="white" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                        <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">1</Flex>
                        <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">2</Flex>
                    </Flex>
                    <Flex flex-direction="row" bg="white" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                        <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">3</Flex>
                        <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">4</Flex>
                    </Flex>
                </Flex>
            </Flex>
            <GridRoot bg="red" columns="5" gap="x4" p="x4">
                <GridItem bg="neutralWeak" p="x2" :col-span="3" :row-span="4">1번 아이템</GridItem>
                <GridItem bg="neutralWeak" p="x2" :row-span="4">2번 아이템</GridItem>
                <GridItem bg="neutralWeak" p="x2">3번 아이템</GridItem>
                <GridItem bg="neutralWeak" p="x2" :col-span="5">4번 아이템 (2칸 차지)</GridItem>
            </GridRoot>
        </VStack>
    </Box>
</template>