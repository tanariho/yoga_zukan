class Api::V1::YogaTimersController < ApplicationController
  def create
    begin
      assigned_pose = assign_yoga_pose_to_user(params[:user_id])
      if assigned_pose
        render json: { assigned_pose: assigned_pose.as_json(only: [:id, :japanese_name, :sanskrit_name, :how_to_read, :illustration, :explanation]) }, status: :ok
      else
        render json: { error: 'ポーズはすべて集めました' }, status: :not_found
      end
    rescue ActiveRecord::RecordNotFound => e
      render json: { error: 'ユーザーが見つかりませんでした', errors: e.message }, status: :not_found
    rescue => e
      render json: { error: 'An error occurred', errors: e.message }, status: :internal_server_error
    end
  end

  private

  def assign_yoga_pose_to_user(user_id)
    yoga_pose = YogaPose.where.not(id: UserYogaPose.where(user_id: user_id).select(:yoga_pose_id)).sample
    if yoga_pose
      UserYogaPose.create(user_id: user_id, yoga_pose_id: yoga_pose.id)
      return yoga_pose
    end
  end
end

