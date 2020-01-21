# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    title { 'SuperBowl LIV' }
    topic { 'Sport' }
    date_start { 'Feb 2 2020 18:30' }
    date_end { 'Feb 2 2020 22:00' }
    description do
      'The Super Bowl is the annual championship game of the National Football League (NFL).
       The game is the culmination of a regular season that begins in the late summer of the previous year.'
    end
    location { 'Hard Rock Stadium' }
    city { 'Miami, FL' }
    country { 'USA' }
    status { 'Pending' }
  end
end