<script setup>
import {VStack, GridRoot, GridItem, Box} from '../components/designsystem/layout/index.js'

// 1번 과제
import WeatherMockup from '../components/subject/WeatherMockup.vue'

// 2번 과제
import WeatherComposition from '../components/subject/WeatherComposition.vue'

// 3번 과제
import {
    WeatherCard, 
    WeatherParent, 
    BaseDashboardCard, 
    SearchBar
} from '../components/subject/weatherComponent/index.js'
const MockupData = [
  { id: 'city_01', name: '테스트[1]', temp: 28, status: '맑음' },
  { id: 'city_02', name: '테스트[2]', temp: 24, status: '비' },
  { id: 'city_03', name: '테스트[3]', temp: 26, status: '구름' },
  { id: 'city_04', name: '테스트[4]', temp: 23, status: '천둥번개' },
]

// 4번 과제
import { RouterView } from 'vue-router'

// 5번 과제

</script>
<template>
    <VStack>
        <!-- 1번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>1. Weather Mockup</h2>
                <hr>
                <h3>1.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
                <h3>1.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><WeatherMockup/></GridItem>
        </GridRoot>
        
        <!-- 2번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>2. Weather Composition</h2>
                <hr>
                <h3>2.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
                <h3>2.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><WeatherComposition/></GridItem>
        </GridRoot>

        <!-- 3번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>3. Weather Composition</h2>
                <hr>
                <h3>3.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul><br/>
                <h3>3.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2">
                <GridRoot columns="2" rows="4" gap="x4" p="x4">
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="3" border-radius="r2">
                        <h4>1. WeatherParent.vue</h4>
                        <hr/>
                        <WeatherParent/>
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="3" border-radius="r2">
                        <h4>2. WeatherCard.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <WeatherCard v-for="item in MockupData" :key="item.id" :city-item="item" @select-card="(msg) => (selectedCityInfo = msg)" @click-detail="showDetail" />
                        </BaseDashboardCard>
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="1" border-radius="r2">
                        <h4>3. SearchBar.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <SearchBar :current-query="테스트" @update-query="(val) => (searchQuery = val)" />
                        </BaseDashboardCard>                            
                    </GridItem>
                    <GridItem bg="white" p="x2" :col-span="1" :row-span="1" border-radius="r2">
                        <h4>4. BaseDashboardCard.vue</h4>
                        <hr/>
                        <BaseDashboardCard>
                            <p><br>Section 분할을 위해 만든 디자인 컴포넌트</p><br>
                        </BaseDashboardCard>
                    </GridItem>
                </GridRoot>
            </GridItem>
        </GridRoot>

        <!-- 4번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>4. Weather Router & Store</h2>
                <hr>
                <h3>4.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul><br/>
                <h3>4.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="2" border-radius="r2"><RouterView/></GridItem>
        </GridRoot>
        
        <!-- 5번 과제 -->
        <GridRoot columns="3" gap="x4" p="x4">
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>5. Weather Axios</h2>
                <hr>
                <h3>5.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                    </li>
                </ul><br/>
                <h3>5.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                    </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>6. Weather UI Library</h2>
                <hr>
                <h3>6.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                    </li>
                </ul><br/>
                <h3>6.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                    </li>
                </ul>
            </GridItem>
            <GridItem bg="neutralWeak" p="x2" :col-span="1" border-radius="r2">
                <h2>7. Weather Deployment</h2>
                <hr>
                <h3>7.1. 기본 요구사항</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul><br/>
                <h3>7.2. Trouble Shotting</h3>
                <ul>
                    <li>배열 렌더링(v-for)</li>
                    <li>조건부 렌더링(v-if)</li>
                    <li>양방향 바인딩 및 한글처리(:value, @input)</li>
                    <li>이벤트 및 수식어</li>
                    <li><strong>목업 추가하기</strong><br>
                        </li>
                </ul>
            </GridItem>
        </GridRoot>
        
    </VStack>
</template>

<style scoped>
@import '@/assets/style.css';
</style>