class User < ApplicationRecord
  validates :username, presence: true, length: { minimum: 4, maximum: 20 }
  validates_uniqueness_of :username
  has_many :event_followers, dependent: :destroy
end
