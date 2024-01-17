class User < ApplicationRecord
  has_many :quiz_results, dependent: :destroy
  has_many :user_answers
  has_many :answers, through: :user_answers
  has_many :yoga_poses, through: :user_yoga_poses
end
