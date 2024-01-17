class UserYogaPose < ApplicationRecord
  belongs_to :user
  belongs_to :yoga_pose
end
