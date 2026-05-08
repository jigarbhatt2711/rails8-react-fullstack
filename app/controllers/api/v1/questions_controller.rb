class Api::V1::QuestionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        questions = Question.all
        render json: questions
    end

    def update
        question = Question.find params[:id]
        if params[:count_for] == "like"
            question.update(total_likes: question.total_likes + 1)
        elsif params[:count_for] == "dislike"
            question.update(total_likes: question.total_likes - 1)
        end
        render json: question
    end
end
