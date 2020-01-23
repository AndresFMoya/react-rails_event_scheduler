Rails.application.routes.draw do
  scope '/api/v1' do
    resources :events
    resources :events_followers
  end
end
