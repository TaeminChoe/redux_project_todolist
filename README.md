# 반응형 웹

-   다양한 디바이스로 웹 사이트를 접속하는 소비자는 다양한 디바이스 크기로 웹을 확인한다.
    다양한 해상도에 맞춰 웹을 제작하는 것

## media query

-   print, tv, screen 등의 미디어 타입 특성을 이용해 특성에 따른 css파일을 적용하는 기법

### 다른 css파일 읽어오기

```jsx
<link
	rel="stylesheet"
	media="screen and (max-width: 768px)"
	href="mystyle.css"
/>
```

-   화면의 width가 768px 이하일 때, mystyle.css를 적용한다.

### 하나의 css파일 내에서 처리하기

```jsx
body {
	background-color: red;
}

@media screen and (max-width: 768px) {
	body {
		background-color: lightgreen;
	}
}
```

-   배경색을 red로 지정, 화면의 width가 768px 이하일 때, lightgreen으로 지정.

### 사용법

-   데스크탑 우선 적용

    ```jsx
    // .css
    /* 데스크탑에서 사용될 스타일을 먼저 작성합니다. */

    @media screen and (max-width: 768px) {
        /* 모바일에 사용될 스트일 시트를 여기에 작성합니다. */
    }
    ```

-   모바일 우선 적용

    ```jsx
    // .css
    /* 모바일에 적용될 스타일을 먼저 작성합니다. */

    @media screen and (min-width: 769px) {
       /* 데스크탑에서 사용될 스타일을 여기에 작성합니다. */
    }
    ```

---

---

# Redux-loggger

-   Redux를 이용해 store에 있는 state를 관리할 때, 정확하게 흐름을 확인하기 위한 디버깅 도구
-   Redux를 사용할 때 활용할 수 있는 middleware중 하나
    -   여러개의 middle를 사용할 경우, redux-logger은 가장 끝에 추가해야 합니다.

## 사용법

-   설치
    `npm i redux-logger`
-   설정

    ```jsx
    // index.js

    // applyMiddleware - to use redux-logger
    import { createStore, applyMiddleware } from "redux";
    import reducer from "../reducers/Reducer";

    // Import the package
    import logger from "redux-logger";

    // Pass it as a middleware
    const middlewares = [logger];
    const store = createStore(reducer, applyMiddleware(...middlewares));

    ReactDOM.render(
    	<Provider store={store}>
    		<App />
    	</Provider>,
    	document.getElementById("root"),
    );
    ```

-   설정 이후 state가 변동될 때마다 console창에 표시됩니다.
    ![image](https://user-images.githubusercontent.com/92558961/149095578-d8985c00-8984-4b3b-95ca-b839dfba6ff0.png)
    ![image](https://user-images.githubusercontent.com/92558961/149095590-2bc55cd5-4db5-4a96-bb5f-bed76f42e31c.png)
    -   prev state : 이전 state의 상태를 보여줍니다.
    -   action : state에 대해 어떤 action이 실행되어 어떤 값을 전달하는지 확인 가능합니다.
    -   next state : state가 변환된 후의 state의 상태를 보여줍니다.

# 반응형 웹 실습 프로젝트 - To Do List

-   Redux를 활용하여 작성하였습니다.
-   반응형 웹을 고려하여 모바일 우선 적용될 수 있도록 css파일을 구성하였습니다.

## 파일 구조

![image](https://user-images.githubusercontent.com/92558961/149095603-326e8edf-a83b-422f-a9e1-60bc26fcbe81.png)

## index.js

![image](https://user-images.githubusercontent.com/92558961/149095612-37d0bf7c-1866-421a-ba50-17976026ea28.png)

-   4: store : 다른 파일에서 지정한 store import
-   9: Provider : 지정한 store를 사용하기 위함

## module/ToDoList/store.js

![image](https://user-images.githubusercontent.com/92558961/149095625-c29ed139-0a05-4073-b9fb-374934a1ad32.png)

-   5: logger : redux-logger의 사용을 위해 정의
-   7: store : configureStore 사용하여 설정 변경
-   8: reducer폴더의 reducer 함수들을 사용
-   9: middleware에 logger적용

## module/ToDoList/actions/index.js

![image](https://user-images.githubusercontent.com/92558961/149096464-a43b0817-8074-47d3-acfc-86e68143ce62.png)

-   store에 관리되는 state는 action의 함수를 통해서만 상태가 업데이트 된다.
-   1: toDo를 받아 ADD_TODO키워드와 함께 reducer에 전달
-   8: 삭제할 toDo의 id를 받아 DELETE_TODO와 함께 reducer에 전달

## module/ToDoList/reducers/index.js

![image](https://user-images.githubusercontent.com/92558961/149096562-44e448c7-f381-42b3-812e-b801c7663b08.png)

-   1: 여러 state에 관한 reducer 함수들을 한번에 뭉쳐준다.
-   3: toDoList: toDoList state에 관한 처리를 한다.
    -   action에서 데이터와 함께 전달된 type을 기준으로 처리된다.
    -   5: action에서 넘어온 타입이 ADD_TODO일 경우,
        -   기존의 state에 객체를 추가한 배열을 새로 생성하여 반환한다.
    -   16: action에서 넘어온 타입이 DELETE_TODO일 경우,
        -   state에 저장된 객체들 중 전달받은 id와 같은 객체를 제거한 후 새로운 객체를 반환

## components/App.js

![image](https://user-images.githubusercontent.com/92558961/149096628-60b07e8c-c21e-48e5-9e80-63d5d9b75230.png)

-   Header, ToDoList컴포넌트 출력

## components/Header.js

![image](https://user-images.githubusercontent.com/92558961/149096677-d5f3e86d-1f12-4a54-bf00-607e3cbed615.png)

## components/ToDoList.js

![image](https://user-images.githubusercontent.com/92558961/149095678-0d3f6036-2ebc-4ec8-92a8-0464c9c19210.png)

-   3: connect : redux로 관리되는 store와 연결하기 위함
-   4: 위에서 정의한 action 함수를 사용하기 위함

![image](https://user-images.githubusercontent.com/92558961/149096773-3e5dfbb3-a5e7-44ce-b00b-0147ac57f76a.png)

-   50: mapStateToProps : store에 있는 state변수를 가져오기 위한 설정
    -   reducers/index.js 에서 정의한 combineReducers의 state들 중 필요한 걸 return한다.
-   54: mapDispatchToProps : state를 변경할 때 필요한 action 함수들을 가져오기 위한 설정
    -   action에서 정의한 함수를 연결하여 컴포넌트에서 사용할 수 있게 정의한다.
-   59: connect : 위에 정의한 state와 함수들을 ToDoList컴포넌트에 연결
    -   컴포넌트에서는 props로 전달받아 사용할 수 있다.

![image](https://user-images.githubusercontent.com/92558961/149096835-ed982cf3-1bae-4dad-b8f1-bebbac54668a.png)

-   7: connect로 연결한 state와 함수들을 props로 전달받는다.
-   8: input태그에서 입력한 값을 저장하기 위한 local state
    -   toDo는 다른 컴포넌트에서 사용하지 않기 때문에 store에서 관리하지 않는다.
-   10: addToDo : input태그에서 입력한 값을 action함수인 addToDo로 전달한다.

![image](https://user-images.githubusercontent.com/92558961/149096862-bb86d93d-9302-4dfc-bb49-17cd8be2f16c.png)

-   38: props.toDoList.map : store에서 관리하는 toDoList의 값으로 ToDo컴포넌트 호출
    -   ToDo컴포넌트에 props.delToDo함수를 전달

## components/ToDo.js

![image](https://user-images.githubusercontent.com/92558961/149095780-d219fd3e-e875-4083-aefa-267273cef37c.png)

-   3: toDoList컴포넌트에서 전달받은 toDo, delToDo함수
-   11: toDo의 버튼을 누르면 action의 함수인 delToDo에 id가 전달된다.

### 실행결과

### 모바일 환경(768px 이하)

![image](https://user-images.githubusercontent.com/92558961/149096327-db37503b-efed-4003-805d-54e260659c11.png)

### 데스크탑 환경(768px 초과)

![image](https://user-images.githubusercontent.com/92558961/149096308-762f5509-595e-4bb8-877d-af3f70c90108.png)

# [2022.01.13] date 기능 추가

## Date 객체

-   JavaScript에서 제공하는 시간 정보를 가져올 수 있는 API

### 사용법

-   선언

```jsx
const date = new Date();
// 현지 시간 기준으로 객체를 생성한다.

// 기준 시간을 지정할 수 있다.
const date = new Date("December 17, 1995 03:24:00");
const date = new Date("1995-12-17T03:24:00");
const date = new Date(1995, 11, 17); // 월은 0부터 시작(1995년 12월 17일)
const date = new Date(1995, 11, 17, 3, 24, 0);
```

-   get함수
    -   date.getDate() : 현지 시간 기준 일(1~31) 반환
    -   date.getDay() : 현지 시간 기준 요일(0~6) 반환
    -   date.getFullYear() : 현지 시간 기준 연도(네 자리) 반환
    -   date.getHours() : 현지 시간 기준 시(0~23) 반환
    -   date.getMinutes() : 현지 시간 기준 분(0~59) 반환
    -   date.getSeconds() : 현지 시간 기준 초(0~59)반환

참조

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

## React Datepicker

-   npm에서 관리되는 라이브러리
-   캘린더에서 날짜를 선택하는 UI 컴포넌트

### 설치

`npm install react-datepicker`

### 기본 예제

```jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Example = () => {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={date => setStartDate(date)}
		/>
	);
};
```

-   css파일은 datepicker의 css파일이므로 꼭 import해야 함
-   오늘 날짜를 초기 날짜로 지정하고 날짜를 변경할 때마다 date state를 변경

참조

[https://reactdatepicker.com/](https://reactdatepicker.com/)

## 날짜 기능이 있는 To Do List

-   기존에 진행했던 프로젝트인 to do list 프로젝트를 활용했습니다.
    [2022.01.12(수)](https://www.notion.so/2022-01-12-101db3d33a2b43059a2621abea746538) / [2022.01.11]교육보고서
-   이전의 진행했던 프로젝트 이므로, 추가된 date관련 내용만 언급합니다.
-   date기능을 사용해 날짜별 to do list를 관리할 수 있도록 하였습니다.

### module/ToDoList/reducers/index.js

![image](https://user-images.githubusercontent.com/92558961/149299104-2757c390-5c8f-4930-b599-3efd28c9e220.png)

### module/ToDoList/actions/index.js

![image](https://user-images.githubusercontent.com/92558961/149299132-b5de1864-40de-4ae8-a8e6-e792739cde57.png)

### components/ToDoList.js

![image](https://user-images.githubusercontent.com/92558961/149299284-0783e014-782d-430e-bb8f-3cce240f801d.png)

-   7: 설치한 DatePicker import
-   8: 제공하는 css import
-   9: calendar의 언어를 한글 버전으로 변경
-   13: date : 캘린더에서 지정한 날짜를 관리하여 날짜에 해당되는 to do만 표현
-   15: toString : date객체의 연도, 월, 일만 추출하여 문자열로 반환해주는 함수
-   19: addToDo : action의 addToDo함수에 toDo와 문자열로 변환된 date를 전달

![image](https://user-images.githubusercontent.com/92558961/149299317-422d1875-6d41-4d3b-afd2-2e1926e3e718.png)

-   DatePicker 컴포넌트 랜더링

![image](https://user-images.githubusercontent.com/92558961/149299339-49ecdaf0-579b-479f-ac59-8735417fab19.png)

-   77: action의 addToDo함수를 dispatch한다. date도 전달하기 위해 추가
