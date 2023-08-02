@RR-497
Feature: As a user, I can use the feature of the to-do Application

	@TEST_RR-494
	Scenario: Users can go to the to-do app
		When I browse the to-do app
		Then The page displays two to-do items by default
		
	@TEST_RR-495
	Scenario: Users can add a new todo item
		Given I am in the to-do app
		When I add a new todo item
		Then The new item is created successfully
		
	@TEST_RR-496
	Scenario: Users can check off an item as completed
		Given I am in the to-do app
		When I check off an item
		Then The item is now marked as completed
		
