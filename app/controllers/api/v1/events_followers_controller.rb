class EventsFollowersController < ApplicationController
  def create
    event_follower = EventFollower.create(event_follower_params)
    render json: event_follower
  end

  def destroy
    event_follower = EventFollower.find(params[:id])
    event_follower.destroy
    head :no_content, status: :ok
  end

  private

  def event_follower_params
    params.require(:event_follower).permit(:user_id, :event_id)
  end
end
