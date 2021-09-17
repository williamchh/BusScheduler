# Buscompany

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server

Using Json Server as a Fake API running on `http://localhost:5000/` and has endpoints "/Bus", "/Line", "/Route", "/Stop", "/TimeSchedule"

## Start the application

Run `npm run dev`, which use concurrently, will start the Json Server first, then the Angular web application 

## Assumption

1. Stop could be number or string, but stop code can not duplicate

2. Route name is unique, and each route must has at least one stop
   Stops in the Route has a sequence, route could have same stops

3. Line name is unique and each line must has at least one route

4. Time Schedule must have one Stop, which is the first stop of the route, and arrival time
   Arrival Time is 24 hours format
   Each Line and each Route in Line Must include a Time Schedule 
   Arrival Time will be sorted from early in the morning to late at the night

5. Bus has one Line Number, Route Name and ArrivalId, 
   Combine three unique values will help to find bus arrival time at the first stop in the route

## Add/Delete Bus

From Add Bus Form, choose from Bus Line table, click button with arrive time to add a Bus with unique line number, route and arrivalID
From Bus List, under double horizontal lines, double click bus info, the bus will be deleted
Single click bus info, first stop arrival time will be shown
(delete operation will be involved with authentication when apply to real world case, this is just for demonstration)

## Add Stop

From Add Stop Form, input a unique stop name then submit

## Add Route

From Add Route form, input a unique route name and select stops from Stops table(Green buttons)
delete selected stop, click stop code(pink button), stop will be deleted before submit to DB

## Add Line

From Add Bus Line Form, input a unique line name and select at least one route(green button)
duplicate route will not add to line
Click pink button route will be removed before submit

## Add Time Schedule

From Add Time Schedule Form, select a line and route and input arrival time is required
After correct input all the data, arrival time will be added to the time schedule
Time Schedule then will be sorted

   