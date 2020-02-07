require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:event) { FactoryBot.create(:event) }

  it 'must have title, description, start date, end date, and status present' do
    expect(event).to be_valid
  end

  it 'must have a title present' do
    event = FactoryBot.build(:event, title: nil)
    expect(event).to_not be_valid
  end

  it 'must have a description present' do
    event = FactoryBot.build(:event, description: nil)
    expect(event).to_not be_valid
  end

  it 'must have a city present' do
    event = FactoryBot.build(:event, city: nil)
    expect(event).to_not be_valid
  end

  it 'must have a start date' do
    event = FactoryBot.build(:event, date_start: nil)
    expect(event).to_not be_valid
  end

  it 'must have a end date' do
    event = FactoryBot.build(:event, date_end: nil)
    expect(event).to_not be_valid
  end

  it 'must have a status' do
    event = FactoryBot.build(:event, status: nil)
    expect(event).to_not be_valid
  end

  it 'could have many followers' do
    event = Event.reflect_on_association(:event_followers)
    expect(event.macro).to eq(:has_many)
  end

  it 'must be unique' do
    FactoryBot.create(:event)
    event = FactoryBot.build(:event)
    expect(event).to_not be_valid
    expect(event.errors[:title]).to include('has already been taken')
  end

  it 'destroys dependent events of event followers table' do
    event = FactoryBot.create(:event, title: 'Concert')
    FactoryBot.create(:event_follower, event: event)
    expect { event.destroy }.to change { EventFollower.count }.by(-1)
  end
end
