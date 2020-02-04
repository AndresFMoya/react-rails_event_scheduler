Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :events
      resources :event_followers
      delete '/event_followers', to: 'event_followers#destroy'
    end
  end

  delete '/logout', to: 'sessions#destroy'

  post '/login', to: 'user_token#create'
  post '/sign_up', to: 'users#create'
  post '/find_user' => 'users#find'
  post '/find_user_events', to: 'users#find_events'


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
