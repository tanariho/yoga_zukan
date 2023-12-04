## graduation_exam

## サービス概要
ヨガポーズの図鑑を完成させるアプリです。
ヨガを日常に取り入れてもらうきっかけになるように、ユーザーがこのアプリでヨガに関する知識に触れたり、投稿をしたり、遊んだり、体験することで、ヨガポーズの図鑑の種類が増えていきます。

## このサービスへの思い* 作りたい理由
* ヨガの敷居を低くしたい
  私は、ずっとヨガを習いたいと思っていましたが、「ポーズが難しそう」、「体が柔らかくないといけない」、「ヨガグッズを揃えないといけない」などのイメージがあってなかなか手を出せないでいました。
  3月にヨガインストラクターの友人の朝ヨガを始めて、実際のヨガは「こうでなければならない」という縛りのない、もっと自由なものでした。
  私のようにヨガへの敷居が高いと感じている人が、少しでもヨガの自由さを知ることができるきっかけ作りをしたいと思い、このサービスを考案しました。

* ヨガのポーズを覚えれば、自分でできる
  ヨガのポーズは8400万種類あるそうです。その中でよく使うポーズは200種類ほどです。
  初めはヨガのポーズの名前が何かわからず戸惑ってしまうこともあると思います。
  しかしヨガのポーズは「バナナのポーズ」「下を向いた犬のポーズ」「三角のポーズ」など、形とリンクしやすく覚えやすいポーズなので、一旦覚えてしまえばそれらを組み合わせて自分でヨガをすることもできます。
  ヨガポーズ図鑑の種類を集めることでポーズを覚えるハードルを下げたいと考えました。

* 朝ヨガに参加してくださる皆さんにスタンプカードのような感覚で使えるサービスを作りたい
  7月ごろから45期のDiscord部屋でAM7:00-「朝ヨガYoutube会」をほぼ毎日開催しています。
  来てくださる皆さんに目に見えて成果がわかるものを作りたい、長時間座って勉強を頑張る皆さんの健康を陰ながら守りたいと思ったのもきっかけの一つです。

* 単純にヨガが好き
  私がヨガが好きなので、ヨガに関するアプリを開発して、身近な人にヨガを広めたいという思いが一番強いです。

### ユーザー層について
* ヨガに興味はあるけどどんなものか分からない人
* ハードルが高くて始められない人
* ヨガの成果を目に見える形にしたい人
* ヨガ経験者で、継続したいと思っている人
* 肩こり、首こり、腰の痛みになやむRUNTEQ生

### サービスの利用イメージ
* 難易度別のヨガクイズに答えたり、ヨガタイマーを利用したり、ジャーナリング瞑想を実施したりするとヨガポーズ図鑑のポーズの種類が増えます。会員登録をすると、より難しいヨガ検定を受けたり、ジャーナリング瞑想を保存したり、友達機能を利用できます。集めた図鑑の数や好きなポーズをシェアして交流もでき、友達が1人増えるごとに図鑑のポーズが1つ増えます。

### ユーザーの獲得について
* 会員登録不要で、初級のヨガ検定、ジャーナリング瞑想、ヨガタイマー30分が利用でき、一つヨガポーズを付与します。図鑑にポーズを保存するには会員登録が必要です。ユーザーの取集意欲を掻き立て、会員登録に誘導します。

### サービスの差別化ポイント* 推しポイント
ヨガのポーズ検索や、ヨガのレッスン予約アプリ、ヨガのコラムなどはありますが、
ヨガに関するコンテンツを体験したりして、図鑑を完成させる点が他のサービスと違い、
ヨガを始める一段階前の、ヨガを知るところにフォーカスを当てています。

## 機能候補
### MVPリリース時
* 新規会員登録
* ログイン* ログアウト
* ヨガポーズ図鑑
* ヨガ検定
  検定に合格するとヨガポーズが増える(クイズ形式)
* ヨガタイマー
  ヨガの時間をカウントすると時間に応じてヨガポーズ図鑑の種類が増える
* Xシェア
### 本リリース
* パスワードリセット機能
* タイマー付きのジャーナリング瞑想
  5分間で自動的に終了するジャーナリング瞑想機能。
  ヨガポーズ図鑑の種類が増える。 タイピング練習にもなる。

  ジャーナリング瞑想とは
  https://kinarino.jp/cat6/37000
  https://www.jicoo.com/magazine/blog/journaling-tool
* 友達機能
  * 友達になるとできること
    * 図鑑のポーズの数の共有
    * 友達になるとポーズが増える
    * 好きなヨガポーズ共有
* 悩みに合わせてAIがヨガのメニューを考案

■ 機能の実装方針予定
* 新規会員登録,ログイン* ログアウト、パスワードリセット
  * sorcery, Google認証
* ヨガポーズ検定,ヨガタイマー,タイマー付きのジャーナリング瞑想
  * Reactで実装
* AIがヨガメニューを考案
  * OpenAIのAPIを使用
  * 時間帯(朝昼夜)、所要時間、悩み(肩こり、腰痛など)を選択すると自動でAIがヨガメニューを作成してくれる