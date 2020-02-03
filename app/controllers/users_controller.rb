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

  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def find_events
    @user = User.find_by(username: params[:user][:username])
    render json: @user.events
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
