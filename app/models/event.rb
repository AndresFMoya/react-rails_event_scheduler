class Event < ApplicationRecord
  has_many :event_followers, dependent: :destroy
  validates_presence_of :title, :description, :date_start, :date_end, :status, :city
  validates :title, uniqueness: { scope: %i[description city date_start date_end] }
end
