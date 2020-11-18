class Api::SessionsController < ApplicationController
    def create 
        # debugger 
        @user = User.find_by_credentials(
			params[:user][:name],
			params[:user][:password]
		)

		if @user 
            login!(@user) 
            render 'api/users/show'         
		else 
			render json: 'invalid credentials', status: 422
		end
    end

    def destroy         
        if logged_in?
            render json: {} if logout!
        else
            render json: 'Not successfully logout', status: 422
        end
    end
end
