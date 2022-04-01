<h2>NBA球星籃球指數排行及搜尋</h2>
前端使用 React.js 並使用 components 把 Home.jsx 切為三個部分，
Header 為 Navbar.jsx
Main Content 則切為兩個部分，Searchbar.jsx 搜尋以及 Result.jsx 為搜尋結果

在 Search bar 裡有 show chart 按鈕，點擊後會出現柱條圖(使用 chart.js)
Result 表單中 NBA 球員的搜尋結果是使用 Switch 並預設 points 排序
分頁按鈕會依照資料多寡做改變，先抓取總數再除以 15+1，顯示分頁按鈕
並可點擊最上方<th>標籤的 svg 改變排序
點擊右下角的數字查詢分頁，根據使用者是否改變排序做整體畫面渲染
即使點擊分頁後，排序結果不變

點擊 detail 後會進到球員個人詳細資料，網址為動態路由

後端使用 node.js + express
把搜尋的值用 post 傳到後端，判斷對應的隊伍及關鍵字來顯示對應資料
使用 post 去做資料的請求和傳遞，達到改變畫面排序結果
使用 get 並搭配 SQL 語法過濾重複的值，獲取全部隊伍
進階搜尋：使用 post 查詢隊伍以及使用模糊比對關鍵字(SQL 語法)
  
  <h3>搜尋功能</h3>

![image](https://github.com/amberyufangchiu/datago/blob/main/搜尋功能_AdobeCreativeCloudExpress.gif)
  
  <h3>detail功能</h3>
  
![image](https://github.com/amberyufangchiu/datago/blob/main/detail功能_AdobeCreativeCloudExpress.gif)
  
  <h3>Chart功能</h3>
  
![image](https://github.com/amberyufangchiu/datago/blob/main/chart功能_AdobeCreativeCloudExpress.gif)
