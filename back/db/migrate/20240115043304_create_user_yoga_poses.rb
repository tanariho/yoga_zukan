class CreateUserYogaPoses < ActiveRecord::Migration[7.0]
  def change
    create_table :user_yoga_poses do |t|
      t.references :user, null: false, foreign_key: true
      t.references :yoga_pose, null: false, foreign_key: true

      t.timestamps
    end
    add_index :user_yoga_poses, [:user_id, :yoga_pose_id], unique: true
  end
end
