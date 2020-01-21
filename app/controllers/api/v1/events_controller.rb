class Api::V1::EventsController < ApplicationController
  def index
    render json: { events: ['Kansas City Chiefs - San Francisco 49ers'] }
  end
end