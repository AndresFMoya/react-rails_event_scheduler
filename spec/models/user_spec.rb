require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { FactoryBot.create(:user) }

  it 'must have a username present' do
    expect(user).to be_valid
  end

  it 'must not have a too short username' do
    user = FactoryBot.build(:user, username: 'adm')
    expect(user).to_not be_valid
  end

  it 'must be unique' do
    FactoryBot.create(:user)
    user = FactoryBot.build(:user)
    expect(user).to_not be_valid
    expect(user.errors[:username]).to include('has already been taken')
  end

  it 'must not have a too long username' do
    user = FactoryBot.build(:user, username: 'admin' * 20)
    expect(user).to_not be_valid
  end

  it 'must have a name present' do
    user = FactoryBot.build(:user, username: nil)
    expect(user).to_not be_valid
  end

  it 'could follow many events' do
    follower = User.reflect_on_association(:event_followers)
    expect(follower.macro).to eq(:has_many)
  end

  it 'destroys dependent followers of events' do
    user1 = FactoryBot.create(:user, username: 'user')
    FactoryBot.create(:event_follower, user: user1)
    expect { user1.destroy }.to change { EventFollower.count }.by(-1)
  end
end
