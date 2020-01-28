class UserSerializer < ActiveModel::Serializer
  attributes :id, :event_follower_ids

  def event_follower_ids
    object.event_followers.pluck(:event_id)
  end
end
