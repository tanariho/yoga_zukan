class Quiz < ApplicationRecord
  has_many :questions, dependent: :destroy
  has_many :quiz_result
end
