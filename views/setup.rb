# try backslash for new line in terminal

puts "What is your project title?"

user_input = gets.chomp

if user_input == "exit"
  puts '-----------Program Terminated-----------'
  abort
end

make_project = "mkdir #{user_input} && touch #{user_input}/index.html touch #{user_input}/main.css touch #{user_input}/main.js
                touch #{user_input}/main.rb"

system(make_project)

File.open("#{user_input}/index.html","w") do |html|
  html.write("<!DOCTYPE html>
<html>
  <head>
    <link rel='stylesheet' type='text/css' href='main.css'>
  </head>
  <body>

    <script src='main.js'></script>
</body>
</html>")
end
