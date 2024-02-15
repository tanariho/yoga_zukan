# frozen_string_literal: true


#QuizResult.destroy_all
# Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

# users = [
#   { id: 1, email: 'test1@example.com', name: 'ロージー' ,provider: "yoga",uid: "1111"},
#   { id: 2, email: 'test2@example.com', name: 'ルル' ,provider: "yoga",uid: "2222" },
#   { id: 3, email: 'test3@example.com', name: 'フレンチー' ,provider: "yoga",uid: "3333"},
#   { id: 4, email: 'test4@example.com', name: 'テキサス' ,provider: "yoga",uid: "4444"},
#   { id: 5, email: 'test5@example.com', name: 'フリッツィー' ,provider:"yoga",uid:"5555"},
#   { id: 6, email: 'test6@example.com', name: 'ヘルガ' ,provider:"yoga",uid:"6666"}
# ]


# users.each do |user|
#   User.create!(user)
# end


# quizzes = [
#   { id: 1, title: 'ヨガ検定10級(トライアル)'},
#   { id: 2, title: 'ヨガ検定9級' },
#   { id: 3, title: 'ヨガ検定8級' },
#   { id: 4, title: 'ヨガ検定7級' },
#   { id: 5, title: 'ヨガ検定6級' },
#   { id: 6, title: 'ヨガ検定5級' },
#   { id: 7, title: 'ヨガ検定4級' },
#   { id: 8, title: 'ヨガ検定3級' },
#   { id: 9, title: 'ヨガ検定2級' },
#   { id: 10, title: 'ヨガ検定1級' }
# ]

# quizzes.each do |quiz|
#   Quiz.create!(quiz)
# end

questions = [
  # ヨガ検定10級(トライアル)
  { id: 1, quiz_id: 1,title: '「ヨガ」の語源はなんでしょうか?'},
  { id: 2, quiz_id: 1,title: 'ヨガの誕生はいつ頃でしょうか？'},
  { id: 3, quiz_id: 1,title: 'ヨガの本来の目的はなんでしょうか?'},
  { id: 4, quiz_id: 1,title: 'ヨガのポーズを集めて何を完成させますか？'},
  { id: 5, quiz_id: 1,title: 'ヨガを学んで体験して、ヨガ図鑑を完成させますか？'},
  # ヨガ検定9級
  { id: 10, quiz_id: 2, title: 'ヨガの「八支則」の一つではないものは？'},
  { id: 11, quiz_id: 2, title: 'ヨガのクラスで「ナマステ」と言う意味は何？'},
  { id: 12, quiz_id: 2, title: '「シャヴァーサナ」で重要なのは？'},
  { id: 13, quiz_id: 2, title: 'ヨガのクラスでの「深呼吸」の目的は何？' },
  { id: 14, quiz_id: 2, title: 'ヨガのポーズで「ツリーポーズ」が象徴するのは何？'},

  #ヨガ検定8級
  { id: 20, quiz_id: 3, title: 'ヨガポーズの中で「戦士のポーズ」は何のためにある？'},
  { id: 21, quiz_id: 3, title: '「ヴィンヤサヨガ」とはどのような特徴を持つヨガですか？'},
  { id: 22, quiz_id: 3, title: 'ヨガで「プラナヤマ」とは何を指しますか？'},
  { id: 23, quiz_id: 3, title: '「ダウンドッグ」のポーズは体のどの部分を伸ばすことに焦点を当てていますか？' },
  { id: 24, quiz_id: 3, title: 'ヨガで用いられる「チャクラ」とは何を意味しますか？'},

  #ヨガ検定7級
  { id: 25, quiz_id: 4, title: 'ヨガの実践で最も重要な要素は何ですか？'},
  { id: 26, quiz_id: 4, title: 'ヨガのクラスで使われる「オーム」とは何のために行われますか？'},
  { id: 27, quiz_id: 4, title: 'ヨガで「アサナ」とは何を指しますか？'},
  { id: 28, quiz_id: 4, title: '「サンサルテーション」または「太陽礼拝」の目的は何ですか？'},
  { id: 29, quiz_id: 4, title: '「ヨガニドラ」とはどのような種類のヨガですか？'},

  #ヨガ検定6級
  { id: 30, quiz_id: 5, title: 'ヨガで用いる「マントラ」とは何ですか？'},
  { id: 31, quiz_id: 5, title: 'ヨガにおいて「アユルヴェーダ」とは何ですか？'},
  { id: 32, quiz_id: 5, title: 'ヨガで「ムドラ」とは何を指しますか？'},
  { id: 33, quiz_id: 5, title: 'ヨガの「八支則」とは何ですか？'},
  { id: 34, quiz_id: 5, title: 'ヨガの歴史において「パタンジャリ」とは誰のことを指しますか？'},

  
]
# #ヨガ検定5級
# { id: 35, quiz_id: 6, title: ''},
# { id: 36, quiz_id: 6, title: ''},
# { id: 37, quiz_id: 6, title: ''},
# { id: 38, quiz_id: 6, title: ''},
# { id: 39, quiz_id: 6, title: ''},
# #ヨガ検定4級
# { id: 40, quiz_id: 7, title: ''},
# { id: 41, quiz_id: 7, title: ''},
# { id: 42, quiz_id: 7, title: ''},
# { id: 43, quiz_id: 7, title: ''},
# { id: 44, quiz_id: 7, title: ''},
# #ヨガ検定3級
# { id: 45, quiz_id: 8, title: ''},
# { id: 46, quiz_id: 8, title: ''},
# { id: 47, quiz_id: 8, title: ''},
# { id: 48, quiz_id: 8, title: ''},
# { id: 49, quiz_id: 8, title: ''},
# #ヨガ検定2級
# { id: 50, quiz_id: 9, title: ''},
# { id: 51, quiz_id: 9, title: ''},
# { id: 52, quiz_id: 9, title: ''},
# { id: 53, quiz_id: 9, title: ''},
# { id: 54, quiz_id: 9, title: ''},
# #ヨガ検定1級
# { id: 55, quiz_id: 10, title: ''},
# { id: 56, quiz_id: 10, title: ''},
# { id: 57, quiz_id: 10, title: ''},
# { id: 58, quiz_id: 10, title: ''},
# { id: 59, quiz_id: 10, title: ''},

questions.each do |question|
  Question.create!(question)
end

answers = [
  # ヨガ検定10級：１問目:「ヨガ」の語源はなんでしょうか?
  { id: 1, question_id: 1, content: "ユジュ", correct: true },
  { id: 2, question_id: 1, content: "サルス", correct: false },
  { id: 3, question_id: 1, content: "ハルモニア", correct: false },
  { id: 4, question_id: 1, content: "ヨガネ", correct: true},

  # ヨガ検定10級：2問目:ヨガの誕生はいつ頃でしょうか？
  { id: 5, question_id: 2, content: "100年頃", correct: false },
  { id: 6, question_id: 2, content: "紀元前2500年頃", correct: true },
  { id: 7, question_id: 2, content: "1800年頃", correct:false },
  { id: 8, question_id: 2, content: "250年頃", correct:false },

  # ヨガ検定10級：3問目:ヨガの本来の目的はなんでしょうか?
  { id: 9, question_id: 3, content: "筋トレのため", correct:false },
  { id: 10, question_id: 3, content: "心と体をリラックスさせるため", correct: true },
  { id: 11, question_id: 3, content: "ダイエットのため", correct:false },
  { id: 12, question_id: 3, content: "伝統と文化を守るため", correct:false },

  # ヨガ検定10級：4問目:ヨガのポーズを集めて何を完成させますか？
  { id: 13, question_id: 4, content: "ヨガ雑誌", correct: false },
  { id: 14, question_id: 4, content: "ポケモン図鑑", correct: false },
  { id: 15, question_id: 4, content: "ヨガ図鑑", correct: true },
  { id: 16, question_id: 4, content: "ヨガみかん", correct: false },

  # ヨガ検定10級：5問目:ヨガ図鑑を完成させますか？
  { id: 17, question_id: 5, content: "はい", correct: true},
  # { id: 18, question_id: 5, content: "大の字", correct: false},
  # { id: 19, question_id: 5, content: "ヨガチャッカファイヤー", correct: false},
  # { id: 20, question_id: 5, content: "シャバーサナ", correct: true},


  #ヨガ検定9級：1問目:ヨガの「八支則」の一つではないものは？
  { id: 21, question_id: 10, content: "アサナ（ポーズ）", correct: false},
  { id: 22, question_id: 10, content: "プラナヤマ（呼吸法）", correct: false},
  { id: 23, question_id: 10, content: "サムラダイ（チョコレート食べ放題）", correct: true},
  { id: 24, question_id: 10, content: "ダルマ（倫理的な行動）", correct: true},

  #ヨガ検定9級：2問目:ヨガのクラスで「ナマステ」と言う意味は何？
  { id: 25, question_id: 11, content: "こんにちは", correct: false},
  { id: 26, question_id: 11, content: "さようなら", correct: false},
  { id: 27, question_id: 11, content: "今日のクラスはここまでです", correct: false},
  { id: 28, question_id: 11, content: "私の魂があなたの魂を尊敬します", correct: true},

  #ヨガ検定9級：3問目:「シャヴァーサナ」で重要なのは？
  { id: 29, question_id: 12, content: "完全なリラックス", correct: true},
  { id: 30, question_id: 12, content: "静かに眠りにつくこと", correct: false},
  { id: 31, question_id: 12, content: "他の人を起こさないようにすること", correct: false},
  { id: 32, question_id: 12, content: "瞑想中に夢を見ること", correct: true},

  #ヨガ検定9級：4問目:ヨガのクラスでの「深呼吸」の目的は何？
  { id: 33, question_id: 13, content: "他の人より大きな音を出すため", correct: false},
  { id: 34, question_id: 13, content: "心と身体を結びつけ、リラックスするため", correct: true},
  { id: 35, question_id: 13, content: "肺を鍛えるため", correct: false},
  { id: 36, question_id: 13, content: "空気をより多く消費するため", correct: true},

  #ヨガ検定9級：5問目:ヨガのポーズで「ツリーポーズ」が象徴するのは何？
  { id: 37, question_id: 14, content: "自然への敬愛", correct: false},
  { id: 38, question_id: 14, content: "木のように静かに立つ強さ", correct: true},
  { id: 39, question_id: 14, content: "枝のように広がるバランス感覚", correct: false},
  { id: 40, question_id: 14, content: "秋に葉が落ちる様子", correct: true},

  #ヨガ検定8級:1問目:ヨガポーズの中で「戦士のポーズ」は何のためにある？
  { id: 41, question_id: 20, content: "本当の戦士のように戦うため", correct: false },
  { id: 42, question_id: 20, content: "強さ、スタミナ、バランスを改善するため", correct: true },
  { id: 43, question_id: 20, content: "クラスで一番カッコいいポーズを決めるため", correct: false },
  { id: 44, question_id: 20, content: "隣の人と「戦う」ため", correct: false },


  #ヨガ検定8級:2問目:「ヴィンヤサヨガ」とはどのような特徴を持つヨガですか？
  { id: 45, question_id: 21, content: "静かで瞑想的なヨガ", correct: false },
  { id: 46, question_id: 21, content: "ポーズとポーズの間の流れに焦点を当てたヨガ", correct: true },
  { id: 47, question_id: 21, content: "高温多湿の部屋で行うヨガ", correct: false },
  { id: 48, question_id: 21, content: "音楽を大きく流しながら行うヨガ", correct: false },

  #ヨガ検定8級:3問目:ヨガで「プラナヤマ」とは何を指しますか？
  { id: 49, question_id: 22, content: "ポーズのこと", correct: false },
  { id: 50, question_id: 22, content: "瞑想のこと", correct: false },
  { id: 51, question_id: 22, content: "呼吸法のこと", correct: true },
  { id: 52, question_id: 22, content: "マットのこと", correct: false },

  #ヨガ検定8級:4問目:「ダウンドッグ」のポーズは体のどの部分を伸ばすことに焦点を当てていますか？
  { id: 53, question_id: 23, content: "腕", correct: false },
  { id: 54, question_id: 23, content: "背中", correct: false },
  { id: 55, question_id: 23, content: "足の裏", correct: false },
  { id: 56, question_id: 23, content: "すべて", correct: true },

  #ヨガ検定8級:5問目:ヨガで用いられる「チャクラ」とは何を意味しますか？
  { id: 57, question_id: 24, content: "身体のエネルギーの中心点", correct: true },
  { id: 58, question_id: 24, content: "ヨガマット", correct: false },
  { id: 59, question_id: 24, content: "ポーズの一種", correct: false },
  { id: 60, question_id: 24, content: "瞑想の技法", correct: false },
  
  #ヨガ検定7級:1問目:ヨガの実践で最も重要な要素は何ですか？
  { id: 61, question_id: 25, content: "完璧なポーズ", correct: false },
  { id: 62, question_id: 25, content: "呼吸", correct: true },
  { id: 63, question_id: 25, content: "高価なヨガウェア", correct: false },
  { id: 64, question_id: 25, content: "競争心", correct: false },
  
  #ヨガ検定7級:2問目:ヨガのクラスで使われる「オーム」とは何のために行われますか？
  { id: 65, question_id: 26, content: "クラスの開始と終了を知らせるため", correct: false },
  { id: 66, question_id: 26, content: "エネルギーを高め、集中力を高めるため", correct: true },
  { id: 67, question_id: 26, content: "ヨガインストラクターを呼び出すため", correct: false },
  { id: 68, question_id: 26, content: "睡眠を促すため", correct: false },

  #ヨガ検定7級:3問目:ヨガで「アサナ」とは何を指しますか？
  { id: 69, question_id: 27, content: "瞑想のこと", correct: false },
  { id: 70, question_id: 27, content: "呼吸法のこと", correct: false },
  { id: 71, question_id: 27, content: "ポーズや姿勢のこと", correct: true },
  { id: 72, question_id: 27, content: "ヨガマットのこと", correct: false },
  
  #ヨガ検定7級:4問目:「サンサルテーション」または「太陽礼拝」の目的は何ですか？
  { id: 73, question_id: 28, content: "体を冷やすため", correct: false },
  { id: 74, question_id: 28, content: "体を暖め、エネルギーを高めるため", correct: true },
  { id: 75, question_id: 28, content: "太陽に向かって挨拶するため", correct: false },
  { id: 76, question_id: 28, content: "夜の瞑想を終えるため", correct: false },
  
  #ヨガ検定7級:5問目:「ヨガニドラ」とはどのような種類のヨガですか？
  { id: 77, question_id: 29, content: "エネルギッシュなヨガ", correct: false },
  { id: 78, question_id: 29, content: "瞑想的なヨガ", correct: false },
  { id: 79, question_id: 29, content: "睡眠ヨガ", correct: true },
  { id: 80, question_id: 29, content: "力強いヨガ", correct: false },

  #ヨガ検定8級:1問目:ヨガで用いる「マントラ」とは何ですか？
  { id: 81, question_id: 30, content: "特定のポーズ", correct: false },
  { id: 82, question_id: 30, content: "呼吸技法", correct: false },
  { id: 83, question_id: 30, content: "繰り返し唱える音や言葉", correct: true },
  { id: 84, question_id: 30, content: "瞑想の場所", correct: false },
  
  #ヨガ検定8級:2問目:ヨガにおいて「アユルヴェーダ」とは何ですか？
  { id: 85, question_id: 31, content: "インドの伝統的な医学", correct: true },
  { id: 86, question_id: 31, content: "ヨガの一種", correct: false },
  { id: 87, question_id: 31, content: "ヨガの基本原則", correct: false },
  { id: 88, question_id: 31, content: "ヨガ用の食事法", correct: false },

  #ヨガ検定8級:3問目:ヨガで「ムドラ」とは何を指しますか？
  { id: 89, question_id: 32, content: "特定の手のポーズ", correct: true },
  { id: 90, question_id: 32, content: "足のポーズ", correct: false },
  { id: 91, question_id: 32, content: "目を閉じる瞑想", correct: false },
  { id: 92, question_id: 32, content: "呼吸法", correct: false },

  #ヨガ検定8級:4問目:ヨガの「八支則」とは何ですか？
  { id: 93, question_id: 33, content: "ヨガを行う8つの場所", correct: false },
  { id: 94, question_id: 33, content: "ヨガの8つの基本ポーズ", correct: false },
  { id: 95, question_id: 33, content: "ヨガの実践における8つの精神的、倫理的原則", correct: true },
  { id: 96, question_id: 33, content: "8人で行うグループヨガ", correct: false },
  
  #ヨガ検定8級:5問目:ヨガの歴史において「パタンジャリ」とは誰のことを指しますか？
  { id: 97, question_id: 34, content: "ヨガの神", correct: false },
  { id: 98, question_id: 34, content: "ヨガの哲学を記した古典「ヨガスートラ」の著者", correct: true },
  { id: 99, question_id: 34, content: "有名なヨガのポーズ", correct: false },
  { id: 100, question_id: 34, content: "古代インドの王", correct: false }

]


answers.each do |answer|
  Answer.create!(answer)
end

# { id: 1, japanese_name: '戦士のポーズⅡ', sanskrit_name: 'ヴィーラバッドラーサナⅡ', number: 1, level: 'beginner', illustration: '/yoga_pose/eiyuu2.png', how_to_read: 'Warrior Ⅱ Pose', explanation: 'バランスを養うポーズ' },
# { id: 2, japanese_name: 'ラクダのポーズ', sanskrit_name: 'ウストラーサナ', number: 2, level: 'intermediate', illustration: '/yoga_pose/rakuda.png', how_to_read: 'Camel Pose', explanation: '背中と胸を開くポーズ' },
# { id: 3, japanese_name: '平和な戦士のポーズ', sanskrit_name: 'リバースウォーリア', number: 3, level: 'intermediate', illustration: '/yoga_pose/reverse_warrior_non_back.png', how_to_read: 'Reverse Warrior', explanation: '体側のストレッチを行うポーズ' },
# { id: 4, japanese_name: '安楽座（あぐら)', sanskrit_name: 'スカーサナ', number: 4, level: 'beginner', illustration: '/yoga_pose/agura.png', how_to_read: 'Easy Pose', explanation: '心や呼吸が安定するポーズです。ヨガを始める前や、瞑想中によく登場するポーズです。' },
# { id: 5, japanese_name: '山のポーズ', sanskrit_name: 'ターダーサナ', number: 5, level: 'beginner', illustration: '/yoga_pose/mount.png', how_to_read: 'Mountain Pose', explanation: 'しっかりと山のように立つポーズ。太もも、膝、足首を強化します。' },
# { id: 6, japanese_name: '下を向いた犬のポーズ(ダウンドッグ)', sanskrit_name: 'アドームカシュヴァーナーサナ', number: 6, level: 'beginner', illustration: '/yoga_pose/down_dog.png', how_to_read: 'Downward Facing Dog Pose', explanation: '息を整えながら、数呼吸の間このポーズをキープします。体全体を伸ばすのに役立ち、肩、背中、脚のストレッチに効果的です。' },

# { id: 7, japanese_name: 'イスのポーズ', sanskrit_name: 'ウッカーターサナ', number: 7, level: 'intermediate', illustration: '/yoga_pose/chair.png', how_to_read: 'Chair Pose', explanation: 'まるで椅子に座るようなポーズ。太ももと背中を鍛え、バランスと集中力を高めます。' },
# { id: 8, japanese_name: 'ハトのポーズ', sanskrit_name: 'エーカパーダカポターサナ', number: 8, level: 'beginner', illustration: '/yoga_pose/hato.png', how_to_read: 'Pigeon Pose', explanation: '股関節の柔軟性を高めるのに効果的です。ヨガっぽいポーズですね。' }

yoga_poses = [
  { id: 9, japanese_name: '舟のポーズ', sanskrit_name: 'ナーヴァーサナ', number: 9, level: 'intermediate', illustration: '/yoga_pose/hune.png', how_to_read: 'Boat Pose', explanation: 'コアを強化するポーズです。姿勢の改善、消化機能の促進にも役立ち、集中力とバランス感覚を高める効果もあります。' },
  { id: 10, japanese_name: '橋のポーズ', sanskrit_name: 'セートゥバンダサルヴァ―ンガーサナ', number: 10, level: 'beginner', illustration: '/yoga_pose/bridge.png', how_to_read: 'Bridge Pose', explanation: '背中を地面から持ち上げてアーチを作るポーズです。腰、太もも、背中を強化し、心を落ち着かせる効果があります。' }

]

yoga_poses.each do |yoga_pose|
  YogaPose.create!(yoga_pose)
end