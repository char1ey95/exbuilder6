# Dialog

버튼 클릭 후 팝업창을 띄우는 것을 다이얼로그라고 한다.

다음과 같이 스크립트를 작성하여, openDialog의 첫번째 인자에는 임베디드 앱과 같이 앱의 위치를 지정해주고, 두번째 인자로는 옵션을 리사이징, 헤더 표시 등등을 넣어줄 수 있다.

```js
const handleClick = () => {
    var btn = e.control;

    var initValue = {
        "msg" : "exBuilder6"
    }

    app.openDialog("AppURI", { width: 300, height: 180 }, function(dialog){
        dialog.ready(function(dialogApp){
            dialogApp.initValue = initValue;
        });
    }).then(function(returnValue){
        alert(JSON.stringfy(returnValue));
    });
}
```