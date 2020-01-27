class UserSerializer < ActiveModel::Serializer
  attributes :id, :event_follower_ids

  def event_ids
    object.event_follower.pluck(:id)
  end
end
