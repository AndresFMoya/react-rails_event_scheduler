class EventsController < ApplicationController
  def index
    events = Event.all
    render json: events
  end

  def create
    event = Event.create(event_params)
    render json: event
  end

  def update
    event = Event.find(params[:id])
    event.update_attributes(event_params)
    render json: event
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    head :no_content, status: :ok
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :date_start, :date_end, :status, :city)
  end
end
