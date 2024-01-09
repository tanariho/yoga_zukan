# frozen_string_literal: true

User.destroy_all
Quiz.destroy_all
Question.destroy_all
Answer.destroy_all

users = [
  { id: 1, email: 'test1@example.com', name: 'ロージー' ,provider: "yoga",uid: "1111"},
  { id: 2, email: 'test2@example.com', name: 'ルル' ,provider: "yoga",uid: "2222" },
  { id: 3, email: 'test3@example.com', name: 'フレンチー' ,provider: "yoga",uid: "3333"},
  { id: 4, email: 'test4@example.com', name: 'テキサス' ,provider: "yoga",uid: "4444"},
  { id: 5, email: 'test5@example.com', name: 'フリッツィー' ,provider:"yoga",uid:"5555"},
  { id: 6, email: 'test6@example.com', name: 'ヘルガ' ,provider:"yoga",uid:"6666"}
]


users.each do |user|
  User.create!(user)
end


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
  { id: 1, quiz_id: 1,title: 'ヨガの起源はどこの国ですか？'},
  { id: 2, quiz_id: 1,title: 'ヨガの練習に使用される敷物のことを何と呼びますか？'},
  { id: 3, quiz_id: 1,title: 'ヨガの哲学で、心の浄化を促すための「心の平穏」を意味する言葉は何ですか？'},
  { id: 4, quiz_id: 1,title: '太陽礼拝（サン・サラスティ）は、何を讃えるために行われるヨガの練習ですか？'},
  { id: 5, quiz_id: 1,title: 'ヨガのポーズで、足を広げて手を天井に向けて仰向けになり、リラックスするポーズは何でしょうか？'},
  # ヨガ検定9級
  { id: 20, quiz_id: 2, title: 'ヨガ哲学で、身体のポーズや動きを指す「アーサナ」は何を意味しますか？'},
  { id: 21, quiz_id: 2, title: 'ヨガは主に何を組み合わせた実践ですか？'},
  { id: 22, quiz_id: 2, title: 'ヨガの瞑想でよく使われる言葉は何ですか？'},
  { id: 23, quiz_id: 2, title: 'ヨガのポーズで、手を床につけてお尻を上げるポーズは何でしょうか？' },
  { id: 24, quiz_id: 2, title: 'ヨガの言葉で、呼吸の制御を指すものは何ですか？'},
  { id: 25, quiz_id: 2, title: 'ヨガの哲学で、「非暴力」を表す言葉は何でしょうか？'},
  { id: 26, quiz_id: 2, title: 'ヨガのポーズで、仰向けになり膝を胸に引き寄せるポーズは何でしょうか？'},
  { id: 27, quiz_id: 2, title: 'ヨガの基本の原則で、「今この瞬間に集中する」という概念は何でしょうか？'},
  { id: 28, quiz_id: 2, title: 'ヨガのポーズで、床に座り両足を広げて伸ばすポーズは何でしょうか？' },
  { id: 29, quiz_id: 2, title: 'ヨガの言葉で、個々の義務や責任を指すものは何ですか？'}
]

questions.each do |question|
  Question.create!(question)
end

answers = [
  # ヨガ検定10級：１問目:ヨガの起源はどこの国ですか？
  { id: 1, question_id: 1, content: "インド", correct: true },
  { id: 2, question_id: 1, content: "中国", correct: false },
  { id: 3, question_id: 1, content: "日本", correct: false },
  { id: 4, question_id: 1, content: "アメリカ", correct: false},

  # ヨガ検定10級：2問目:ヨガの練習に使用される敷物のことを何と呼びますか？
  { id: 5, question_id: 2, content: "ヨガブロック", correct: false },
  { id: 6, question_id: 2, content: "ヨガマット", correct: true },
  { id: 7, question_id: 2, content: "ヨガストラップ", correct:false },
  { id: 8, question_id: 2, content: "ヨガの魔法の絨毯", correct:false },

  # ヨガ検定10級：3問目:ヨガの哲学で、心の浄化を促すための「心の平穏」を意味する言葉は何ですか？
  { id: 9, question_id: 3, content: "サトシ", correct:false },
  { id: 10, question_id: 3, content: "ピカチュウ", correct: false },
  { id: 11, question_id: 3, content: "シャンティ", correct:true },
  { id: 12, question_id: 3, content: "ヒサージュー", correct:false },

  # ヨガ検定10級：4問目:太陽礼拝（サン・サラスティ）は、何を讃えるために行われるヨガの練習ですか？
  { id: 13, question_id: 4, content: "地球", correct: false },
  { id: 14, question_id: 4, content: "空気", correct: false },
  { id: 15, question_id: 4, content: "太陽", correct: true },
  { id: 16, question_id: 4, content: "水", correct: false },

  # ヨガ検定10級：3問目:ヨガのポーズで、足を広げて手を天井に向けて仰向けになり、リラックスするポーズは何でしょうか？
  { id: 17, question_id: 5, content: "ねむれライオン", correct: false},
  { id: 18, question_id: 5, content: "大の字", correct: false},
  { id: 19, question_id: 5, content: "ヨガチャッカファイヤー", correct: false},
  { id: 20, question_id: 5, content: "シャバーサナ", correct: true}
]

answers.each do |answer|
  Answer.create!(answer)
end