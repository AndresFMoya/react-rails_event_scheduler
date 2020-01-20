# frozen_string_literal: true

class Api::V1::EventController < ApplicationController
  def index
    render json: {events: ['49ers - Packer', 'Chiefs - Titans']}
  end
end
