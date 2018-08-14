require "sinatra"
require "curb"
require "json"

events = Curl::Easy.perform("https://www.eventbriteapi.com/v3/events/search/?q=bakery&categories=110&token=ZECNDFBNGHYIA3JGE25G")
events_json = JSON.parse(events.body_str)
event_titles = []
event_descriptions = []
event_images = []

counter = 0
while counter < 7
  event_titles << events_json["events"][counter]["name"]["text"]
  event_descriptions << events_json["events"][counter]["description"]["text"]
  event_images << events_json["events"][counter]["logo"]["original"]["url"]
  counter += 1
end

get "/" do
  erb :home
end

get "/about" do
  erb :about
end

get "/cakes" do
  erb :cakes
end

get "/cookies" do
  erb :cookies
end

get "/muffins" do
  erb :muffins
end

get "/events" do
  @titles = event_titles
  @descriptions = event_descriptions
  @images = event_images
  erb :events
end
