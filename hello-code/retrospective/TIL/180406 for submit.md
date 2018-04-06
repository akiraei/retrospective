# 180406
# retrospective


## 1. Today I learned

### 스타일 변화 기술: 클래스 변화 vs css 속성 변화
- 클랫 변화: dom 트리 캐시에 저장 --> 렌더링 --> dom 트리 내에서 클래스만 바꾸기. css 스타일과 분리되어 있기 때문에 조정과 보수가 용이함
- css 속성 변화 : 인라인 스타일을 침범함. 때문에 조정과 보수에 복잡함이 증가함.


### 이미지 반응 이슈
1. 화면 해상도
- 크롬 개발자 도구의 DPR (device pixel ratio)을 통해 고해상도 모니터를 시뮬레이션 할 수 있다.
- 예시
```
<style>
        .box {
            width: 500px;
            height: 500px;
            background: url("images/small.jpg");
            background-size: 100%;
        }
        
        @media screen and (min-device-pixel-ratio: 2),
        screen and (resolution:192dpi) {
            .box {
                background-image: url("images/large.jpg")
            }
        }
    </style>
</head>
<body>
    <h1>미디어쿼리를 활용한 배경이미지</h1>
    <div class="box"></div>
</body>
```
![alt text](images/media.png)
2. srcset 과 media
- media 속성은 media 쿼리와 비슷하다. 이 것은 설정 해놓은 지점마다 변화할 분기를 지정한다.
- 그러나 IE에서 지원하지 않는다.
- 폴리필 기술: "Pictureall" (caniuse) 참조
- 예시
```
<body>
    <h1>반응형 이미지 이슈</h1>
    <img src="images/image-src.jpg" alt="demo" srcset="images/image-1x.png, imates/image-2x.png,images/image-3x.png, imates/image-4x.png">
</body>
```
![alt text](images/srcset.png)

3. retina js
- 다양한 해상도로 인해 발생되는 문제들의 해결책을 제시한다
- http://imulus.github.io/retinajs/
4. 예시
```<h1>반응형 이미지 이슈</h1>
    <picture>
        <source srcset="images/large.jpg" media="(min-width: 1200px)">
        <source srcset="images/medium.jpg" media="(min-width: 480px) and (max-width: 1119px)">
        <source srcset=" images/small.jpg " media="(max-width: 479px)">
        <img src=" images/normal.jpg " alt=" " width="500 " height="350 ">
    </picture>
```
<video src="/rwd.mov"></video>





















## 2. Today I found out

### getAttribute and chrome
- why chrome reject getAttribute and setAttribute?
cause it is not a node? it is an object. is that why chrome reject?

### css style declare

```javascript
button.addEventListener("click", function(){
  console.log("click in");
  container.style.gridTemplateColumns = "repeat(6, 1fr)"
  console.log("click out");
});
```


## 3. 오늘 읽은 자료 (혹은 참고할 링크, 생략해도 됨)

- nth-child-tester https://css-tricks.com/examples/nth-child-tester/
- aria roll 관련 https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html