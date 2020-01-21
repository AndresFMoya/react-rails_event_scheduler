# frozen_string_literal: true

FactoryBot.define do
  factory :event_follower do
    user
    event
  end
end