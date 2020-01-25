class User < ApplicationRecord

  has_secure_password

  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :password, presence: true
  has_many :event_followers, dependent: :destroy

  def self.from_token_request request
    username = request.params['auth'] && request.params['auth']['username']
    self.find_by username: username
  end
end
