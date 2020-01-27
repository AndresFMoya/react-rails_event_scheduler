class Api::V1::EventFollowersController < ApplicationController
  before_action :find_event, only: [:destroy]

  def create
    @event_follower = current_user.event_followers.build(event_follower_params)
    if @event_follower&.save
      render json: @event_follower
    else
      render json: { message: @event_follower.errors }, status: 400
    end
  end

  def destroy
    if @event_follower.destroy
      render json: @event_follower
    else
      render json: { message: 'Unable to remove item' }, status: 400
    end
  end

  def find_event
    @event_follower = current_user.event_followers.find_by(event_follower_params)
  end

  def event_follower_params
    params.require(:event_follower).permit(:event_id)
  end
end
