# project_tracker

An app to keep track of project information such as start dates, finish dates, staff member allocated, and generate reports on that data.



## Problem

Team Leaders need a one stop shop for their teams who work on varying types of projects. They need to be able to track the work the team is doing and how well they are performing month to month.

## Solution

Project tracker allows team members to enter and edit project information that is persisted in a database and generate reports on that data to allow continuous fast and easy reporting up the chain to senior management. 



##### Some Notes:

When a new project is entered, it may only start with a project number and approval date. Other details can be entered later.

Basic CRUD operations for projects required plus some extra reporting functionality.

### Tech stack

Mongo Atlas

NodeJS

Express

Handlebars



### Project db schema:

projectNumber - string (required)

approvalDate - date (required)

arrivalDate - date

startWorkDate - date

category [a, b, c, d, e, f, g] - (array) all boolean

projectWorker - string

finishReportDate - date 

preliminaryReportDate - date

targetCompleteDate - date (calculated on arrival date + predefined days according to category/s)

proficiencyTest - boolean, default false


examinationRequired - boolean, default true


reportRequired - boolean, default true

comments - text



### Required reports:

##### All active projects

list of active projects in target complete date order  (when no finishReportDate or reportRequired = false)



### Nice to have reports:

##### 30 day report

list all projects completed in last 30 days

list all projects arrival date in last 30 days

average turnaround time in days (calculated on finish report date - arrival date)

##### Select a month report

list all projects completed in that month

list all projects arrival date in that month

average turnaround time in days (calculated on finishReportDate - arrivalDate)





