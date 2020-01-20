# frozen_string_literal: true

class Api::V1::EventController < ApplicationController
  def index
    render json: {events: ['Kansas City Chiefs - San Francisco 49ers']}
  end
end
