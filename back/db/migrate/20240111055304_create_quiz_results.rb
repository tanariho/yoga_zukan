class CreateQuizResults < ActiveRecord::Migration[7.0]
  def change
    create_table :quiz_results do |t|
      t.references :user, null: false, foreign_key: true
      t.references :quiz, null: false, foreign_key: true
      t.boolean :passed, null: false

      t.timestamps
    end
  end
end
