(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const c=()=>`
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
`,u=()=>{const e=window.location.pathname;return`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="nav-link ${e==="/#"?"text-blue-600":"text-gray-600"}">홈</a></li>
        <li><a href="/profile" class="nav-link ${e==="profile"?"text-blue-600":"text-gray-600"}">프로필</a></li>
        <li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>
      </ul>
    </nav>
  `},m=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,i=e=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${c()}
      ${u()}
      <main>${e}</main>
      ${m()}
    </div>
  </div>
`,p=[{id:1,username:"홍길동",timestamp:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,username:"김철수",timestamp:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,username:"이영희",timestamp:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,username:"박민수",timestamp:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,username:"정수연",timestamp:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],b=()=>{const o=`
    <div class="p-4">
      <div class="mb-4 bg-white rounded-lg shadow p-4">
        <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
        <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
      </div>

      <div class="space-y-4">
        ${p.map(n=>`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
        <div>
          <p class="font-bold">${n.username}</p>
          <p class="text-sm text-gray-500">${n.timestamp}</p>
        </div>
      </div>
      <p>${n.content}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `).join("")}
      </div>
    </div>
  `;return i(o)},f=()=>{const e=JSON.parse(localStorage.getItem("user"))||{username:"홍길동",email:"hong@example.com",bio:"안녕하세요, 항해플러스에서 열심히 공부하고 있는 홍길동입니다."},o=`
    <div class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
            >
            <input
              type="text"
              id="username"
              name="username"
              value="${e.username}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${e.email}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${e.bio}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  `;return i(o)},g=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" id="username" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded" required>
        </div>
        <div class="mb-6">
          <input type="password" id="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,h=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,d={state:{get currentPath(){return window.location.hash.replace(/^#/,"")||"/"},set currentPath(e){window.location.hash=e},user:JSON.parse(localStorage.getItem("user"))||null},routes:{"/":b,"/login":g,"/profile":f},render(){const e=this.state.currentPath,o=document.getElementById("root");let n=this.routes[e];if(e==="/profile"&&!this.state.user){this.navigateTo("/login");return}n||(n=h),o.innerHTML=n(),this.setupEventListeners()},navigateTo(e){this.state.currentPath=e},setupEventListeners(){document.querySelectorAll(".nav-link").forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const s=r.getAttribute("href");this.navigateTo(s)})});const e=document.getElementById("logout");e&&e.addEventListener("click",r=>{r.preventDefault(),localStorage.removeItem("user"),this.state.user=null,this.navigateTo("/login")});const o=document.getElementById("login-form");o&&o.addEventListener("submit",r=>{r.preventDefault();const s={username:document.getElementById("username").value,email:"",bio:""};localStorage.setItem("user",JSON.stringify(s)),this.state.user=s,this.navigateTo("/")});const n=document.getElementById("profile-form");n&&n.addEventListener("submit",r=>{r.preventDefault();const t=document.getElementById("username").value,s=document.getElementById("email").value,l=document.getElementById("bio").value,a={username:t,email:s,bio:l};localStorage.setItem("user",JSON.stringify(a)),this.state.user=a,alert("프로필이 업데이트되었습니다.")})}};window.addEventListener("hashchange",()=>{d.render()});const v=()=>{const e=document.getElementById("root");if(e)e.innerHTML="";else{const o=document.createElement("div");o.id="root",document.body.appendChild(o)}d.render()};v();
