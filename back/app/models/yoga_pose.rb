class YogaPose < ApplicationRecord
  has_many :user_yoga_poses, dependent: :destroy
  has_many :users, through: :user_yoga_poses
end
