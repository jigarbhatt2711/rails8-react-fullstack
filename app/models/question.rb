class Question < ApplicationRecord
    validates :title, :content, :tag, presence: true
    validates :title, uniqueness: true
end
