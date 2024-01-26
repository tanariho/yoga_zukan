class CreateYogaTimers < ActiveRecord::Migration[7.0]
  def change
    create_table :yoga_timers do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :hour
      t.integer :time

      t.timestamps
    end
  end
end
