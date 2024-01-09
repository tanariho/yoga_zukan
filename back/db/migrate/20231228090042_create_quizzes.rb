class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.string :title, null: false
      t.string :level

      t.timestamps
    end
  end
end
