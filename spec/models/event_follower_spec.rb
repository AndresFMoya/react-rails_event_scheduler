require 'rails_helper'

RSpec.describe EventFollower, type: :model do
  let(:event_follower) { FactoryBot.create(:event_follower) }

  it 'must have a user and an event present' do
    expect(event_follower).to be_valid
  end

  it 'must have a user present' do
    event_follower = FactoryBot.build(:event_follower, user_id: nil)
    expect(event_follower).to_not be_valid
  end

  it 'must have a event present' do
    event_follower = FactoryBot.build(:event_follower, event_id: nil)
    expect(event_follower).to_not be_valid
  end
end
