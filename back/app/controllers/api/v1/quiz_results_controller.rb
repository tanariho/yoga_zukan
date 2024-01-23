class Api::V1::QuizResultsController < ApplicationController
  def create
    # パラメータの検証
    quiz_result = QuizResult.new(quiz_result_params)
    assigned_pose = nil

    if quiz_result.save
      assigned_pose = quiz_result.passed == true ? assign_yoga_pose_to_user(quiz_result.user_id) : nil
      render json: { passed_true: quiz_result.passed, assigned_pose: assigned_pose.as_json(only: [:id, :japanese_name, :sanskrit_name, :how_to_read, :illustration, :explanation]) }, status: :ok
    else
      render json: { error: '保存に失敗しました' }, status: :unprocessable_entity
    end
  rescue StandardError => e
    render json: { error: '保存に失敗しました', errors: e.message }, status: :internal_server_error
  end

  private

  def quiz_result_params
    # 必要なパラメータを許可します
    params.require(:quiz_result).permit(:user_id, :quiz_id, :passed)
  end

  def assign_yoga_pose_to_user(user_id)
    yoga_pose = YogaPose.where.not(id: UserYogaPose.where(user_id: user_id).select(:yoga_pose_id)).sample
    if yoga_pose
      UserYogaPose.create(user_id: user_id, yoga_pose_id: yoga_pose.id)
      return yoga_pose
    end
  end
end
