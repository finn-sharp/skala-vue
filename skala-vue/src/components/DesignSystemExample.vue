<script setup>
import HStack from './designsystem/foundation/HStack.vue'
import VStack from './designsystem/foundation/VStack.vue';
import Grid from './designsystem/foundation/Grid.vue';
import Flex from './designsystem/foundation/Flex.vue';
import Float from './designsystem/foundation/Float.vue'
import Box from './designsystem/foundation/Box.vue'
import WeatherMockup from '../components/WeatherMockup.vue'
</script>

<template>
    <Box :border-width="1" border-color="stroke-neutral-muted" class="p-4">
        <VStack bg="layerDefault" gap="x2" width="full" border-radius="r2">
            <HStack bg="layerDefault" gap="x2" width="full" border-radius="r2">
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">1</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">2</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">3</Box>
            </HStack>
            <VStack bg="layerDefault" gap="x2" width="full" border-radius="r2">
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">1</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">2</Box>
                <Box bg="brandSolid" px="x2" py="x2" border-radius="r2">3</Box>      
            </VStack>
            <Box position="relative" width="480px" height="480px" :border-width="1" border-color="stroke-neutral-muted" class="p-4">
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
            <Box position="relative" width="500px" height="200px" :border-width="1" border-color="stroke-neutral-muted">
                <Float placement="top-start" offset-y="x2" offset-x="x2"><button>Top Center</button></Float>
                <Float placement="middle-center" offset-y="x2" offset-x="x2"><button>Middle Center</button></Float>
                <Float placement="bottom-end" offset-y="x2" offset-x="x2"><button>Bottom Center</button></Float>
            </Box>
            <Flex flex-direction="row" bg="layerDefault" gap="x2" width="full" border-radius="r2">
                <!-- 첫 번째 그룹: 세로 정렬 (width="full" 제거, flex-grow로 영역 분할) -->
                <Flex flex-direction="column" bg="brandSolid" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">1</Flex>
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">2</Flex>
                </Flex>

                <!-- 두 번째 그룹: 가로 정렬 -->
                <Flex flex-direction="row" bg="brandSolid" gap="x1-5" px="x2" py="x2" :flex-grow="1" border-radius="r2">
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">3</Flex>
                    <Flex bg="neutralWeak" px="x4" py="x3" border-radius="r1">4</Flex>
                </Flex>

                <!-- 5번 아이템 -->
                <Flex bg="brandSolid" px="x4" py="x3" border-radius="r2">
                    <WeatherMockup/>
                </Flex>
            </Flex>
        </VStack>
    </Box>
</template>