class RootController < ApplicationController
  def index
    # get greeting from the database ordered randomly
    @greeting = Greeting.order('RANDOM()').first
  end
end
