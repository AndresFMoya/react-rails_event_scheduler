FactoryBot.define do
  factory :jwt_blacklist do
    jti { "MyString" }
    exp { "2020-01-25 12:11:06" }
  end
end
