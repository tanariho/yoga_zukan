class Api::V1::YogaZukansController < ApplicationController
  def index
    user = User.find(params[:id])
    @yoga_zukan = user.yoga_poses
    render json: @yoga_zukan
  end
end
