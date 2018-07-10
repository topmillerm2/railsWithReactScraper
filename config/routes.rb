Rails.application.routes.draw do
	root :to => 'html#parse'
  get '/api/parse/' => 'html#parse'
end
