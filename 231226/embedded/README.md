# 임베디드 앱

- `임베디드 앱 컨트롤`은 clx 파일만 불러올 수 있다.

- 파일은 브라우저를 열었을 때 임베디드 앱 안에 다른 clx 파일을 가져올 수 있다.

## 파일 불러오기

스크립트를 작성해보자.

```js
function onEa1Click(e){
	var ea1 = e.control;
	
	var vcEmb = app.lookup("ea1");
	var voInitValue = {
		// 초기값
	}
	
	cpr.core.App.load("binding/binding", function(loadedApp){
		if(vcEmb.getEmbeddedAppInstance()){
		// 앱 인스턴스가 있으면 앱을 삭제하고
			vcEmb.getEmbeddedAppInstance().dispose();
		}
		
		// 로드된 앱이 있을 경우에는 임베디드 앱 안에 불러온 앱을 넣는다.
		if(loadedApp){
			vcEmb.ready(function(embApp){
				embApp.initValue = voInitValue;
			})
			
			// 임베디드 앱에 내장할 앱을 로드하여 설정한다.
			vcEmb.app = loadedApp;
		}
	});
}
```