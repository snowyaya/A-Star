# STARDVISOR

https://user-images.githubusercontent.com/75382121/207910699-fe516e47-fa0c-4c2a-8985-53ba405f0246.mp4

## Contributors:
Meihan Pan, @LagohPrano
Ling Lin, @linlingaixuexi
Junzhe Ren, @Kenyg369
Yaya Liang, @snowyaya

## Intro
There are many startup companies started everyday but there is a lack of comprehensive statistics about them to facilitate people understand startup culture and current trends. 

Our website is focused on providing information to pre-startup owners, who are looking for inspiration from startups in various fields, as well as to current startup owners, who are looking for funding and information from investors in the field. 


## Structure
```
|-- home page
|-- recommendation page
|-- funding page
|-- vc page
|-- sign up

```

## Architecture


**Front End**
`react`

`three.js`

`material-ui`

`ant design`

**Back End**
`Express`

`Node`

`MongoDB`

`AWS`

`MySQL`

## Schema
`companies `
| Attribute           | Type    | Description                                                                       |
|---------------------|---------|-----------------------------------------------------------------------------------|
| id                  | int     | Primary key                                                                       |   |   |
| name                | varchar | Foreign key references id in People.csv                                           |   |   |
| normalized_name     | varchar | Normalized entity name                                                            |   |   |
| permalink           | varchar | Crunchbase URL                                                                    |   |   |
| category_code       | varchar | Entity category, e.g. web, games_video                                            |   |   |
| status              | varchar | Operation status, e.g. operating, acquired                                        |   |   |
| founded_at          | date    | Date the entity was founded at                                                    |   |   |
| closed_at           | date    | Date the entity was closed at                                                     |   |   |
| domain              | varchar | Domain name of the entity                                                         |   |   |
| homepage_url        | varchar | URL of entity's official site                                                     |   |   |
| twitter_username    | varchar | Handle of entity's official Twitter account                                       |   |   |
| description         | varchar | Description of the entity                                                         |   |   |
| overview            | varchar | Overview of the entity                                                            |   |   |
| tag_list            | varchar | Tag list                                                                          |   |   |
| country_code        | varchar | Country code, e.g. USA, AUS                                                       |   |   |
| state_code          | varchar | State code, e.g. WA, PA                                                           |   |   |
| city                | varchar | City name, e.g. Seattle, San Mateo                                                |   |   |
| region              | varchar | Region, e.g. Los Angeles, SF Bay                                                  |   |   |
| first_investment_at | date    | Date of the first made investment                                                 |   |   |
| last_investment_at  | date    | Date of the latest made investment                                                |   |   |
| investment_rounds   | int     | Number of investment rounds participated in                                       |   |   |
| invested_companies  | int     | Number of companies invested in                                                   |   |   |
| first_funding_at    | date    | Date of the first funding round                                                   |   |   |
| last_funding_at     | date    | Date of the latest funding round                                                  |   |   |
| funding_rounds      | int     | Number of funding rounds                                                          |   |   |
| funding_total_usd   | float   | Total funds raised in USD, mean = 4,967,688.470, standard deviation = 24220106.71 |   |   |
| first_milestone_at  | date    | Date of the first milestone                                                       |   |   |
| last_milestone_at   | date    | Date of the latest milestone                                                      |   |   |
| milestones          | int     | Number of milestones the entity has                                               |   |   |
| relationships       | int     | Number of relationships the entity has                                            |   |   |

`degrees`
| Attribute   | id          | object_id                               | degree_type                           | subject                                            | institution                                                                    | graduated_at       |
|-------------|-------------|-----------------------------------------|---------------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------|--------------------|
| Type        | int         | varchar                                 | varchar                               | varchar                                            | varchar                                                                        | date               |
| Description | Primary key | Foreign key references id in People.csv | Type of degree obtained, e.g. BS, MBA | Subject studied, e.g. Computer Science, Psychology | Education institution e.g. University of Pennsylvania, University of Minnesota | Date of graduation |


`people`
| Attribute   | id          | name                        |   
|-------------|-------------|-----------------------------|
| Type        | int         | varchar                     | 
| Description | Primary key | Full name of the individual | 


`relationships`
| Attribute   | id          | person_object_id                        | relationship_object_id                     | start_at                  | end_at                  | is_past                                                                                           | title                             | 
|-------------|-------------|-----------------------------------------|--------------------------------------------|---------------------------|-------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------|
| Type        | int         | varchar                                 | varchar                                    | date                      | date                    | bit                                                                                               | varchar                           | 
| Description | Primary key | Foreign key references id in People.csv | Foreign key references id in Companies.csv | Start of the relationship | End of the relationship | Flag to indicate if the relationship is the most current one, 0 is the most current one, 1 is not | Position held at the organization |   

`funding_rounds`
| Attribute   | object_id                                  | funded_at                                    | funding_round_type | funding_round_code  | raised_amount_usd                                                                                               | is_first_round                                                         | is_last_round                                                         |
|-------------|--------------------------------------------|----------------------------------------------|--------------------|---------------------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Type        | varchar                                    | date                                         | varchar            | varchar             | int                                                                                                             | bit                                                                    | bit                                                                   |
| Description | Foreign key references id in companies.csv | The date when the specific fund was received | Funding series     | Funding series code | The amount of funding received during the funding series, mean =  $7480978.17; standard deviation = 45187152.57 | Flag to indicate whether the funding series is the first funding round | Flag to indicate whether the funding series is the last funding round |


`investments`
| Attribute   | funding_round_id | funded_object_id                           | investor_object_id                                                       |
|-------------|------------------|--------------------------------------------|--------------------------------------------------------------------------|
| Type        | int              | varchar                                    | varchar                                                                  |
| Description | Primary key      | Foreign key references id in companies.csv | Foreign key references id in financial_orgs.csv/people.csv/companies.csv |


## Deployment

`npm install`

`npm start`

