var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程 W13","text":"任務1","tags":"w13","url":"./41123233-W16-blog.html"},{"title":"2024 Spring 課程 W12","text":"利用NX進行繪製圖片錄影，小組進行分配工作 NX零件圖與錄影檔 零件4： 錄影檔 零件檔 完成圖","tags":"w12","url":"./41123233-W12-blog.html"},{"title":"2024 Spring 課程 W11","text":"利用上週加入的全班倉儲,在裡面編寫前10週之統整心得,以每組為例 利用上週加入的全班的倉儲,在裡面編寫前10週的來統整心得 因為每個人都可以在上面做更新更改, 這樣就會出現操作上的問題，push得時候只能一個人push,太多人同時推會導致網站亂掉,為了避免此現象的發生,在個人或各組完成階段性改版之前,先透過獨立分支進行資料改版提交與推送,等個人階段性版本確定後, 再與分組分支合併, 最後各組的階段性版本再與建立網頁的主分支進行合併。","tags":"w11","url":"./41123233-W11-blog.html"},{"title":"2024 Spring 課程 W10","text":"任務1 根據老師所給的 2a.txt 裡的['學號', 'Github 帳號', '組別'], 以下是利用 Python 寫的初步資料數列. from browser import window, ajax def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 並列出-學員倉儲連結/學員網站連結/2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 下列程式碼是加上了生成 HTML 元素的程式碼，以及學員倉庫連結和網站連結的模板： from browser import window, ajax, document, html def fetch_csv_data(): # CSV 檔案網址 url = \"https://mdecd2024.github.io/2astud-2asite/downloads/2a.txt\" def on_complete(req): if req.status == 200 or req.status == 0: # 讀取 CSV 檔案內容 content = req.text # 依照換行符號拆分資料 lines = content.split('\\n') # 建立空列表儲存資料 data = [] # 遍歷每一行資料 for line in lines: # 忽略空白行 if line.strip() == \"\": continue # 依照逗號拆分資料 items = line.split(',') # 將拆分後的資料加入列表 data.append(items) # 印出結果 print(data) # 生成 HTML 元素 generate_html(data) else: print(\"Error:\", req.text) # 發送 AJAX 請求 req = ajax.ajax() req.bind('complete', on_complete) req.open('GET', url, True) req.set_header('content-type', 'application/x-www-form-urlencoded') req.send() # 生成 HTML 元素 def generate_html(data): brython_div = document[\"brython_div1\"] course_title = \"cd2024\" for student_id, github_username, group in data: # 如果GitHub用戶名為空，將其設置為\"000\" github_username = github_username if github_username else \"000\" # 創建網址和倉庫的鏈接 site_url = f\"https://{github_username}.github.io/{course_title}\" repo_url = f\"https://github.com/{github_username}/{course_title}\" group_repo_url = f\"https://github.com/mdecd2024/2a-midag{group}\" # 生成HTML元素並插入到div中 brython_div <= html.A(student_id, href=site_url) + \" | \" + \\ html.A(\"GitHub Repo\", href=repo_url) + \" | \" + \\ html.A(\"Group Repo\", href=group_repo_url) + html.BR() # 呼叫函式讀取 CSV 資料 fetch_csv_data() 這段程式碼會從 CSV 檔案中讀取學員的基本資料（學號、GitHub 帳號、組別），然後使用 for 迴圈生成 HTML 元素，並將這些元素插入到網頁中。你可以根據需要修改 generate_html 函式中的 HTML 元素結構，以符合你的需求。 任務2 文章一 : Construction and theoretical study of a ball balancing platform (構建一個球體平衡平台涉及到平台本身的物理結構建造以及用於維持球體平衡的控制算法的理論研究) 摘要內容 : 通過實施自動控制理論穩定動態系統時的局限性, 球平衡平臺的構造和理論研究, 通過實施穩定動態系統時的局限性自動控制理論. 通過物理構造的裝置作為理論的演示者, 進一步比較從牛頓力學得出的事實物理和計算機模擬結果. 為了能夠進行比較, 有必要設計一個能夠滿足系統要求的令人滿意的控制器. 在設備和控制方面, 為在平臺上平衡球的系統引入比例積分導數控制器. 進一步允許分析以確定穩定自然不穩定或半穩定系統時的局限性. 建立球體平衡平台的理論模型, 並與實際搭建的平台進行比較. 分析理論與實際結果之間的差異, 探討控制理論與系統實施的挑戰. 文章二 : A real time control system for balancing a ball on a platform with FPGA parallel implementation (用於在平臺上平衡球的即時控制系統，具有FPGA並行實現) 摘要內容 : 在一個FPGA晶元上開發了兩個並行PID控制器，用於獨立控制一個物件的兩個參數。確保了控制物件的PID控制器的輪廓計算的並行處理，調節器的輸出已經歸一化。通過自然類比，提高了在平台上調節球位置的精度。設計的控制器可用於即時控制具有許多受控參數的高速物體。 文章三 : Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach (基於狀態空間方法的雙軸平臺球位控制模擬與實驗研究) 摘要內容 : 本研究詳細設計並比較了三種控制結構，用於自動穩定球在板上的位置和球的軌跡跟蹤。即PD控制器、狀態空間反饋和狀態空間觀測器。所有三種方法都經過設計並進行了實際比較。所有結構都有一個共同的特徵。它是計算控制器參數的方法。通過牛頓方法推導的板上球數學模型和直流電機位置環路控制也是本文的一部分。 文章四：Design and Implementation a Ball Balancing System for Control Theory Course（控制理論課程的球平衡系統設計與實現） 摘要內容：開發一個球平衡系統，使用微控制器和相關控制演算法來保持球在橫樑上的平衡，以通過即時感官反饋調整橫樑的角度。在此過程中，製作了三個原型並相互比較，特別是在合理性和成本方面。通過集成一個伺服電機、一個距離感測器、一個微控制器板和一個機械平臺，可以很容易地設計整個系統。此外，他們將通過微控制器程式設計來理解和實現控制演算法。如果學生對MATLAB知之甚少。開發介面程式以在MATLAB中繪製即時位置曲線。這個簡化的系統將作為連接理論知識和實踐技能的橋樑。所提方法也適用於更複雜的系統。 文章五: Ball on the plate balancing control system (板上球平衡控制系統) 摘要內容 : 平衡問題是一個持續的研究挑戰，適用於從教育到交通的許多興趣領域。二自由度球平衡實驗室試驗台是瞭解控制系統的重要設備。本文重點介紹了在板上平衡球的機械設計。使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 文章六 : 2D Ball Balancer Control using QUARC (使用 QUARC 的 2D 球平衡器控制) 摘要內容 : 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 任務3","tags":"w10","url":"./41123233-W10-blog.html"},{"title":"2024 Spring 課程 W9","text":"鋼球平衡台 PID 控制與模擬 以下為利用 PID 控制 CoppeliaSim 鋼球平衡台場景的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. \"這裡附上原本的 PID 控制程式碼\" Model 使用 Matplotlib 將 CoppeliaSim 鋼球平衡台的 x, y 座標視覺化 由於您沒有提供原始的 PID 控制程式碼，我將提供一個範例程式碼框架，其中包含使用 Matplotlib 繪製 x, y 座標的功能。請將您的 PID 控制邏輯和與 CoppeliaSim 的通信部分添加到相應的位置。 import zmq import time import matplotlib.pyplot as plt CoppeliaSim 連線資訊 HOST = \"127.0.0.1\" # 更改為您的 CoppeliaSim 主機地址 PORT = 23000 # 更改為您的 CoppeliaSim 端口號 建立 ZMQ context 和 socket context = zmq.Context() socket = context.socket(zmq.REQ) socket.connect(\"tcp://{}:{}\".format(HOST, PORT)) PID 控制參數 (替換為您的實際參數) Kp = 1.0 Ki = 0.0 Kd = 0.0 初始化圖表 plt.ion() # 開啟互動模式 fig, ax = plt.subplots() x_data, y_data = [], [] line, = ax.plot(x_data, y_data, 'r-') ax.set_xlim([-1, 1]) # 設定 x 軸範圍 (根據您的場景調整) ax.set_ylim([-1, 1]) # 設定 y 軸範圍 (根據您的場景調整) ax.set_xlabel(\"X\") ax.set_ylabel(\"Y\") plt.title(\"Ball Position\") 主循環 while True: # 讀取鋼球當前 x, y 座標 (替換為您的實際讀取方式) x, y = get_ball_position(socket) # PID 控制邏輯 (替換為您的實際 PID 控制邏輯) control_signal = pid_control ( x , y , Kp , Ki , Kd ) # 將控制信號發送到 CoppeliaSim (替換為您的實際發送方式) send_control_signal ( socket , control_signal ) # 更新圖表數據 x_data . append ( x ) y_data . append ( y ) line . set_data ( x_data , y_data ) fig . canvas . draw () fig . canvas . flush_events () time . sleep ( 0.01 ) # 調整延遲時間 停止仿真 (替換為您的實際停止方式) stop_simulation(socket) 關閉 socket 和 context socket.close() context.term() Use code with caution. Python 說明: 連線到 CoppeliaSim: 使用 ZMQ 建立與 CoppeliaSim 的連接。 PID 參數: 設定您的 PID 控制器的參數 (Kp, Ki, Kd)。 初始化圖表: 使用 Matplotlib 创建一个实时更新的图表，用于显示 x, y 좌표。 主循环: 讀取鋼球的 x, y 座標。 使用 PID 控制邏輯计算控制信号。 將控制信號發送到 CoppeliaSim。 更新圖表數據並顯示。 停止仿真: 停止 CoppeliaSim 的仿真。 请注意: 您需要将 get_ball_position, pid_control, send_control_signal 和 stop_simulation 替换为您自己的函数，以完成与 CoppeliaSim 的通信和控制逻辑。 根據您的場景調整 x 軸和 y 軸的範圍。 調整 time.sleep 的延遲時間，以控制更新頻率。","tags":"w9","url":"./41123233-W9-blog.html"},{"title":"2024 Spring 課程 W8","text":"期中影片錄製","tags":"w8","url":"./41123233-W8-blog.html"},{"title":"2024 Spring 課程 W7","text":"清明節 W1~W6統整 標題、內容整理統整","tags":"w7","url":"./41123233-W7-blog.html"},{"title":"2024 Spring 課程 w6","text":"2024 Spring 協同產品設計實習課程教導, 分組網誌的統整、 Github Actions 帶有子模組的 main.yml 設定、更新分組倉儲中的分組倉儲 Github Actions 帶有子模組的 main.yml 設定 我們所寫的內容丟到個人倉儲, 加上我們有把自己的子模組倒入分組倉儲, 加入取子模組內容的 main.yml 設定把我們所寫的內容整合起來. 其中加入取子模組內容的設定為: 範例:2b-midbg4 cd_report.tex 中的範例報告第一章, 取自其組員分組網站中的 latex 目錄, 且圖片檔案也是沿用分組倉儲中的設定, 取自組員 images 目錄. 網誌的統整 如何把每個人的網誌整合到分組倉儲內, 整合前先把每個人子模組所連到的倉儲更新到現在狀態, 再利用 pelicanconf py 整合各組員的網誌. 更新分組倉儲中的分組倉儲 更新分組倉儲中的分組倉儲 cd2024 2b w6 取下子模組, 以及更新學員倉儲內容 先前我們有把每個人的倉儲利用子模組導入組別倉儲, 即使你自己的倉儲有更新內容, 也不會顯示目前更新次數, 如何讓子模組同步就利用 update 更新到最新版本. git submodule update --init cd 學號 git pull origin main cd .. git status git add . git commit -m \"update 學號 子模組\" git push 就完成更新目前的倉儲","tags":"w6","url":"./41123233-W6-blog.html"},{"title":"2024 Spring 課程 w5","text":"2024 Spring 協同產品設計實習課程教導, 教學內容為先前影片整理、分組網誌的統整. 影片整理 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 * 需再加上自評 如何統整組員子模組中的協同設計網誌 每人每週的協同設計網誌文章放在個別的 cd2024 倉儲的 markdown 目錄中, 只要修改分組倉儲中的 pelicalconf.py, 使用 Pelican 設定中的 PATH 與 OUTPUT_PATH 變數, 指定網誌統整目錄, 就可以在分組倉儲中納入所有組員在子模組中所編寫的協同網誌. 實際的設定操作 pelicanconf_py.txt, 是利用 pelicanconf.py 中的程式設定段, 將子模組中 markdown 目錄的 .md 動態複製到分組倉儲中的 combined_directory, 並避開分組倉儲與學員子模組倉儲中的 pages 目錄下的 .md 檔案後, 再進行網誌轉檔, 並且所產生的網誌超文件將存入所設定的 blog 目錄. 完成設定後的網誌轉檔指令為: pelican -s local_publishconf.py 表利用 local_publishconf.py 的設定進行轉檔, 且先前有關 pelicanconf.py 的設定也將導入執行 過程中, 各組員必須將個別的網誌 .md 檔案名稱前加上字串(不然資料會亂), 例如: \"學號_\" 加上獨一無二的網誌 Slug 字串名稱, 且 Category 使用學號作為標示. 之後各組統整轉檔時, 才不至於發生相同網誌文章檔案名稱衝突的錯誤, 且從各分組網誌的 Categories 中即可找到各組員所編寫的所有網誌內容 利用 NX1872 協同繪製零組件 老師所提供 NX 套件目錄檔案, 之後將 NX1872 目錄存入隨身碟後, 可利用下列 start_USB_nx1872.bat 啟動. (電腦輔助設計室中 C: 安裝 NX1872, D: 則配置 NX2206 與 NX12)","tags":"w5","url":"./41123233-W5-blog.html"},{"title":"2024 Spring 課程 w4","text":"2024 Spring 協同產品設計實習課程教導, 各分組需要明確界定任務需求與分工時序, 隨著各組協同設計流程的進行, 分組倉儲與網站的改版越發複雜, 此時可導入 SourceTree 協助各組員更清楚看到倉儲改版歷程, 與本週分組作業 分組任務 教學影片分組整理並自評: * 在影片上填上字幕, 另行上傳到可以嵌入到各分組的網站上 * 從影片字幕中整理出逐字稿, 放在影片下方, 以 .txt 連結安排 * 並在各嵌入的教學影片下方, 以摘要方式說明該影片的教學重點 Github 個人與分組倉儲的維護方式 個人的倉儲名稱為 cd2024, 而期中的分組倉儲位於 mdecd2024 帳號下, 以2a 開頭, 加上 \"-\" 之後再補上 midag + 組別, 且各組員的 cd2024 個人倉儲必須設為各分組倉儲的子模組, 目的在各組員可以自行管理並維護自己的課程倉儲, 並決定要引入分組倉儲的內容版次. * 方法一 - Replit * 方法二 - Codespaces * 方法三 - Gitpod * 方法四 - localhost","tags":"w4","url":"./41123233-W4-blog.html"},{"title":"2024 Spring 課程 w3","text":"這週為英文文章翻譯,使用CHATGPT來進行文章翻譯,組長來分配每個人所負責的頁數,我所分配到頁數是21~31 子模組 如何利用 Github Codespaces 建立, cd2024 課程希望將各分組的組員個人網站, 以 submodule 的方式納入各分組倉儲與網站. 先 git submodule add 自己的倉儲空格學號, git add . , git commit -m \"add 學號 submodule\" , 最後在 git push . 期中報告 由各組員在其個人的 cd2024 倉儲中, 以 LaTeX 格式分工完成文章的英文與中文翻譯並列資料, 最後在分組網站的 Release 或 downloads 區完成 2a-midbgx_report.pdf 的製作.","tags":"w3","url":"./41123233-W3-blog.html"},{"title":"2024 Spring 課程 w2","text":"2024 Spring 協同產品設計實習課程教導, 主要利用 Github Classroom 進行協同分組, 並引導學員除了 Replit, 可以利用 Github Codespaces 維護個人或分組網站內容. 利用 Github Classroom 指定分組倉儲 分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 建立新 replit 先點 Create a Repl 再點 Import from GitHub 利用 From URL 把組別倉儲連結丟進來 (利用這個 My Repositories 是找不到的) , 選取 Python 語言, 按下 Import from GitHub 成功建立, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰 (每個人都要建立一個才有權限) 送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH (git@github.com:自己的帳號/cd2024.git) , 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版權限, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 利用 Codespaces 維護倉儲與網站 利用 init_replit 指令安裝所需 Python 模組 啟動動態 指令 1.chmod u+x init_replit 2. ./init_replit 3. Python3 main.py 靜態 指令 Python3 -m http.server Push 指令 1.git add . 2. git commit -m \" add+你要推的內容 \" 3. git push","tags":"w2","url":"./41123233-W2-blog.html"},{"title":"2024 Spring 課程 w1","text":"2024 Spring 協同產品設計實習課程教導, 如何建立倉儲和利用 import 至 Replit進行改版、設定網誌與Odoo PLM 在機械設計流程中的應用. 建立個人課程倉儲 登入到自己的github, 連結到[https://github.com/mdecycu/cmsimde_site] (Teams也有貼) , 再利用 Template (連結點進去右上角) 作為倉儲, 打上 cd2024 為名稱, 進去後到設定裡的 pages 把 main 分支設為網頁根目錄靜態就跑出來了. 如何將倉儲 import 至 Replit 由 Replit 帳號下的設定, 底下有個 Connected Services(連線服務) 點選 Connect 後 (有連結過會出現 Disconnect ) , 讓 Github 授權給 Replit 可在 Replit 中進行改版, 改版後就有權限推回自己的網站. 內容管理系統 使用者可以自行利用 [cmsimde_site] 倉儲作為 Template, 建立自己的網站內容管理系統. import 完如何進行改版 import 完會有 Webview 跑出來這就是自己的動態網站 (由這可增加或修改內容) , 點進去後打 admin 就可增加 (也就是改版) 你所要的內容, 當你打完你要的內容後右上角有個 Convert 點一下轉為靜態 (這要點, 不然你從動態推到靜態會沒有東西) , 到 Replit 的 Git 中輸入新增的內容後 Push , 等待一下就可以在靜態看到剛剛增加的內容. 建立網誌 我們所使用的網誌系統 (Pelican) , markdown 目錄是一個原始檔 (撰寫網誌範本) , 新增完的內容轉換後會位於在 blog 下的目錄. 將 markdown 網誌轉為網誌的指令為: pelican markdown -o blog -s local_publishconf.py 表示使用了 local_publishconfig.py 設定, 其餘與 blog 有關設定檔有: pelicanconf.py (更改網誌名稱) 與 publishconf.py (增加靜態連結) 等, 在設定網誌同時要依據自己的 github 帳號對上述三個.py 去做設定動作. Odoo PLM 功能 畢竟這個程式這學期才用, 當然帳號是以學號加上 nfu.edu.tw 去建立的, 期中和期末個做一樣模擬出來, 要新增一個產品網頁 (已建立) , 依模擬產品去分配給組員做 (會收到 emlig 的訊息) 回傳至 odoo PLM 裡 以上為第一周內容","tags":"w1","url":"./41123233-W1-blog.html"}]};