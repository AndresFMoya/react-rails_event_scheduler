class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, length: { minimum: 4, maximum: 20 }, uniqueness: true;
  validates :email, uniqueness: true
  validates :password, presence: true
  has_many :event_followers, dependent: :destroy

  def self.from_token_request(request)
    username = request.params['auth'] && request.params['auth']['username']
    find_by username: username
  end
end
