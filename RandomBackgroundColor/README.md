## 랜덤 색상 오토봇 🤖🎨

<img width="1000" alt="image" src="https://github.com/swon95/SSeulmoTemp/assets/96659041/589cb13c-85f1-4cd4-b0be-89b90c30792a">

---

> `page` 컴포넌트를 `client` 컴포넌트로 사용하기 위해 `"use Client"` 선언<br>👉 `next/dynamic` 모듈을 사용하여 `SSR` 옵션 **비/활성화** 가능

```js
"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const randomColor = () => {
        const color = Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = "#" + color
    }
    randomColor()
    const interval = setInterval(randomColor, 1000)
    return () => clearInterval(interval)
  }, [])
    return (<></>);
}
```

1️⃣ `useEffect` 훅을 사용하여 컴포넌트 마운트 시 실행 (빈 배열)<br>

2️⃣ 0 부터 16777215 까지의 랜덤한 수를 생성하여 16 진법으로 변환<br>

3️⃣ `DOM` 조작을 통해 `document.body` 의 색상 변경<br>

4️⃣ `setInterval` 함수를 사용하여 **1초** 마다 랜덤 색상 변경<br>

5️⃣ `clearInterval` 함수를 통해 메모리 누수 방지<br>

6️⃣ 빈 `fragment` 를 반환하여 JSX 문법이 유효하게 유지
