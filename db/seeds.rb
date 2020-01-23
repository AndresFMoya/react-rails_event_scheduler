# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(username: 'admin')

event1 = Event.create!(title: 'Strata Data & AI Conferences',
                      date_start: 'Mar 15 2020 07:00',
                      date_end: 'Mar 18 2020 22:00',
                      description: 'A 4-day immersion in the most challenging problems, intriguing use cases, and enticing opportunities in data today.',
                      location: 'TBD',
                      city: 'San Francisco, CA',
                      country: 'USA',
                      topic: 'Tech',
                      status: 'Pending')

event2 = Event.create!(title: 'Deep Learning Summit',
                       date_start: 'Jan 30 2020 07:00',
                       date_end: 'Jan 31 2020 22:00',
                       description: 'Their aim is to bridge the gap between the latest technological research advancements and real-world applications in business and society.',
                       location: 'Hotel Niko, 222 Mason St',
                       city: 'San Francisco, CA',
                       country: 'USA',
                       topic: 'Tech',
                       status: 'Pending')

event3 = Event.create!(title: 'Reinforce AI Conference',
                       date_start: 'Apr 06 2020 07:00',
                       date_end: 'Apr 07 2020 22:00',
                       description: 'See how AI is shaping the world and how your company can use it to fix real-world problems.',
                       location: 'TBD',
                       city: 'Budapest',
                       country: 'Hungary',
                       topic: 'Tech',
                       status: 'Pending')

event4 = Event.create!(title: 'Applied Machine Learning Conference',
                       date_start: 'Apr 15 2020 07:00',
                       date_end: 'Apr 16 2020 22:00',
                       description: 'A unique machine learning conference in its fourth year.',
                       location: 'TBD',
                       city: 'Charlottesville, VA',
                       country: 'USA',
                       topic: 'Tech',
                       status: 'Pending')

EventFollower.create!(user_id: user.id, event_id: event1.id)
