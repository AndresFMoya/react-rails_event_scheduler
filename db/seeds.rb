# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(username: 'admin')

event = Event.create!(title: 'SuperBowl LIV',
              date_start: 'Feb 2 2020 18:30',
              date_end: 'Feb 2 2020 22:00',
              description: 'The Super Bowl is the annual championship game of the National Football League (NFL).
              The game is the culmination of a regular season that begins in the late summer of the previous year.',
              location: 'Hard Rock Stadium',
              city: 'Miami',
              country: 'Florida',
              status: 'Pending')

EventFollower.create!(user_id: user.id, event_id: event.id)
