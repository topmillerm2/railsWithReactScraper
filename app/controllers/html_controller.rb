class HtmlController < ApplicationController
	def parse 
		url = params[:url]
		puts url
		
		render json: "Success"
	end
end
