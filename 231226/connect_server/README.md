# 서버 연동

## 설정방법(다이나믹 웹)

<br>

- Properties > Project Facets에서 eXBuilder6 Module 체크

<br>


- Deployment Assembly에 연결할 UI프로젝트를 추가해 주면된다.(Deploy Path 작성)

<br>


- `웹 프로젝트/WebContent/WEB_INF/web.xml` 파일에서 서버 플러그인 초기 설정하는 리스너를 추가하고,

```xml
<listener>
    <listener-class>com.cleopatra.XBInitializer</listener-class>
</listener>
```

- clx 패턴을 사용할 수 있게 url-pattern에 추가

```xml
<servlet-mapping>
    <url-pattern>*.clx</url-pattern>
</servlet-mapping>
```

<br>

- 그 다음으로는 `웹 프로젝트/resources/config/content.xml`파일을 열어서, DataRequeest 인자를 자동으로 생성하는 resolver를 추가.

- `웹 프로젝트/src/com.exbuilder.web/CleopatraUIController.java`은 clx파일을 html 파일로 컴파일하여 브라우저에 출력하는 역할을 수행.