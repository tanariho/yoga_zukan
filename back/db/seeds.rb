# frozen_string_literal: true


QuizResult.destroy_all
Quiz.destroy_all
Question.destroy_all
Answer.destroy_all
UserYogaPose.destroy_all
YogaPose.destroy_all

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


quizzes = [
  { id: 1, title: 'ヨガ検定10級(トライアル)'},
  { id: 2, title: 'ヨガ検定9級' },
  { id: 3, title: 'ヨガ検定8級' },
  { id: 4, title: 'ヨガ検定7級' },
  { id: 5, title: 'ヨガ検定6級' },
  { id: 6, title: 'ヨガ検定5級' },
  { id: 7, title: 'ヨガ検定4級' },
  { id: 8, title: 'ヨガ検定3級' },
  { id: 9, title: 'ヨガ検定2級' },
  { id: 10, title: 'ヨガ検定1級' }
]

quizzes.each do |quiz|
  Quiz.create!(quiz)
end

questions = [
  # ヨガ検定10級(トライアル)
  { id: 1, quiz_id: 1,title: '「ヨガ」の語源はなんでしょうか?'},
  { id: 2, quiz_id: 1,title: 'ヨガの誕生はいつ頃でしょうか？'},
  { id: 3, quiz_id: 1,title: 'ヨガの目的はなんでしょうか?'},
  { id: 4, quiz_id: 1,title: 'ヨガのポーズを集めて何を完成させますか？'},
  { id: 5, quiz_id: 1,title: 'ヨガを学んで体験して、ヨガ図鑑を完成させますか？'},
  # ヨガ検定9級
  { id: 10, quiz_id: 2, title: 'ヨガの「八支則」の一つではないものは？'},
  { id: 11, quiz_id: 2, title: 'ヨガのクラスで「ナマステ」と言う意味は何？'},
  { id: 12, quiz_id: 2, title: '「シャヴァーサナ」で重要なのは？'},
  { id: 13, quiz_id: 2, title: 'ヨガのクラスでの「深呼吸」の目的は何？' },
  { id: 14, quiz_id: 2, title: 'ヨガのポーズで「ツリーポーズ」が象徴するのは何？'},

  #ヨガ検定8級
  { id: 20, quiz_id: 3, title: 'ヨガで「チャクラ」とは何？'},
  { id: 21, quiz_id: 3, title: '「笑いヨガ」を行う目的は何？'},
  { id: 22, quiz_id: 3, title: '「ヨガブロック」の主な使用目的は何？'},
  { id: 23, quiz_id: 3, title: 'ヨガのポーズで、床に座り両足を広げて伸ばすポーズは何でしょうか？' },
  { id: 24, quiz_id: 3, title: 'ヨガの言葉で、個々の義務や責任を指すものは何ですか？'}
]

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
  { id: 10, question_id: 3, content: "心と体をリラックスさせるため", correct: false },
  { id: 11, question_id: 3, content: "ダイエットのため", correct:true },
  { id: 12, question_id: 3, content: "伝統と文化を守るため", correct:false },

  # ヨガ検定10級：4問目:ヨガのポーズを集めて何を完成させますか？
  { id: 13, question_id: 4, content: "ヨガ雑誌", correct: true },
  { id: 14, question_id: 4, content: "ポケモン図鑑", correct: true },
  { id: 15, question_id: 4, content: "ヨガ図鑑", correct: true },
  { id: 16, question_id: 4, content: "ヨガみかん", correct: true },

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
  { id: 40, question_id: 14, content: "秋に葉が落ちる様子", correct: true}
]


answers.each do |answer|
  Answer.create!(answer)
end

yoga_poses = [
  { id: 1, japanese_name: '戦士のポーズⅡ', sanskrit_name: 'ヴィーラバッドラーサナⅡ', number: 1, level: 'beginner', illustration: '/yoga_pose/eiyuu2.png', how_to_read: 'Warrior Ⅱ Pose', explanation: 'バランスを養うポーズ' },
  { id: 2, japanese_name: 'ラクダのポーズ', sanskrit_name: 'ウストラーサナ', number: 2, level: 'intermediate', illustration: '/yoga_pose/rakuda.png', how_to_read: 'Camel Pose', explanation: '背中と胸を開くポーズ' },
  { id: 3, japanese_name: '平和な戦士のポーズ', sanskrit_name: 'リバースウォーリア', number: 3, level: 'intermediate', illustration: '/yoga_pose/reverse_warrior_non_back.png', how_to_read: 'Reverse Warrior', explanation: '体側のストレッチを行うポーズ' },
  { id: 4, japanese_name: '安楽座（あぐら)', sanskrit_name: 'スカーサナ', number: 4, level: 'beginner', illustration: '/yoga_pose/agura.png', how_to_read: 'Easy Pose', explanation: '心や呼吸が安定するポーズです。ヨガを始める前や、瞑想中によく登場するポーズです。' },
  { id: 5, japanese_name: '山のポーズ', sanskrit_name: 'ターダーサナ', number: 5, level: 'beginner', illustration: '/yoga_pose/mount.png', how_to_read: 'Mountain Pose', explanation: 'しっかりと山のように立つポーズ。太もも、膝、足首を強化します。' }
]

yoga_poses.each do |yoga_pose|
  YogaPose.create!(yoga_pose)
end