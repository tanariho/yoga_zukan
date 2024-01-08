class Api::V1::QuestionsController < ApplicationController
  before_action :set_question, only: [:show]

  def index
    @questions = Question.all
    render json: @questions
  end

  def show
    render json: @question
  end

  private

  def set_question
    @question = Question.find(params[:id])
  end

  def question_params
    params.require(:question).permit(:title, :quiz_id)
  end
end
