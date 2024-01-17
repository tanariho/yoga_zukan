class CreateYogaPoses < ActiveRecord::Migration[7.0]
  def change
    create_table :yoga_poses do |t|
      t.string :japanese_name, null: false
      t.string :sanskrit_name
      t.integer :number, null: false
      t.string :level
      t.string :illustration
      t.string :how_to_read
      t.string :explanation

      t.timestamps
    end
    add_index :yoga_poses, [:number, :japanese_name], unique: true
  end
end
