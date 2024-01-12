class User < ApplicationRecord
  has_many :quiz_result, dependent: :destroy
end
