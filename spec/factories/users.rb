FactoryBot.define do
  factory :user do
    username { 'admin' }
    email { 'admin@example.com'}
    password {'password'}
  end
end
