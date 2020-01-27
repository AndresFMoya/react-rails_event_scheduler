class UsersController < ApplicationController
  def find
    @user = User.find_by(username: params[:user][:username])
    if @user
      render json: @user
    else
      @errors = @user.errors.full_messages
      render json: @errors
    end
  end
end
