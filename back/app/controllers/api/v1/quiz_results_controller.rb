class Api::V1::QuizResultsController < ApplicationController
  def create
    # パラメータの検証
    quiz_result = QuizResult.new(quiz_result_params)

    if quiz_result.save
      head :ok
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
end
