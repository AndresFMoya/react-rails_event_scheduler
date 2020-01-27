class EventSerializer < ActiveModel::Serializer
  def attributes(*args)
    object.attributes.symbolize_keys
  end
end
