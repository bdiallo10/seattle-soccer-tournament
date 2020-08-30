Project 3--Building a Full Stack Application

Website Name--Seattle Sport Tournament

Goals: My goal are to 
1) Create a platform where individuals can create a soccer tournament, add a team within the tournament and let players joins a specific team
2) Each tournament will have a for fixtures and result page with a table standing
    a) Within the fixture and result page
        I) Every team added to the tournament will show up on the table in an alphebetical orders. However, whenever an administor add points to a team, the ranking will change based on the number of points the team have
        II) The table will be (team name, # of wins, # of looses, # of goals score, # of goals scored against, goals difference, points)
        III) Fixture and result will be on the same page as well
    b) Their will be an option to start a play-off where you can fixtures and change it to result

3) User authority system
    THE MASTER MANAGER CAN DO ANYTHING AS LONG AS I AM LOGGED IN
    Once a tournament and a team is created, players will just go to the team page and click joins to create their profile

Structure of the Website

HomePage--
    1) Header
        a) Navbar
            i) Home--SoccerTournament--Join a team----Login/SignUp
    2) Body
        a) Welcome to Seattle Soccer Tournament
            i) Click here to join a tournament
                a) will take you to the tournament page where you can either start your tournament or join the list of tournament avaialble
            ii) Click here to join a team
                a) will always take you to the tournament page where you can select a tournament first, then go to a page that will show all the team listed on that tournament OR you can create your own tournament
            iii) Click here to Create a Tournament
    3) Footer
        Build by: Boubacar, Github link, LinkedIn profile
Soccer Tournament ShowPage
    1) Header
        a) Navbar
            i) Home--SoccerTournament--Join a team----Login/SignUp
    2) Body
        a) a list of all the tournament available 
          i) click on a tournament so you can join a team on that tournament
        b) Click Here To create a tournament 
    3) Footer
        Build by: Boubacar, Github link, LinkedIn profile
Soccer Tournament IndexPage
    1) Header
        a) Navbar
            i) Home--SoccerTournament--Join a team----Login/SignUp
    2) Body
        a) Welcome to the (name of the tournament)
        b) A list of all the teams within that tournament
        c) Click on a team to join the team
    3) Footer
        Build by: Boubacar, Github link, LinkedIn profile
Team Page
    1) Header
        a) Navbar
            i) Home--SoccerTournament--Join a team----Login/SignUp
    2) Body
        a) Welcome to the team page
        b) a list of all the players on that team
    3) Footer
        Build by: Boubacar, Github link, LinkedIn profile
Login/SingUp Page
    1) Header
        a) Navbar
            i) Home--SoccerTournament--Join a team----Login/SignUp
    2) Body
        a) Create an account
        b) Login
            I) Google
            II) Facebook
            III) SnapChat
            IV) Instagram
            V) Twitter 
    3) Footer
        Build by: Boubacar, Github link, LinkedIn profile


Routes Need

Homepage

Tournament ShowPage
Tournament IndexPage
Tournament CreatePage
Tournamenet UpdatePage

Team ShowPage
Team CreatePage
Team UpdatePage

Player ShowPage
Player CreatePage
Player UpdatePage

UserPage
--Create a user
--User profile
--User Update


<If time permit, I will do the following>
2) the platform will also allow tournament manager create a match, add score and  have it display dynamically on the website.
3) the platform will also show standing in group or as a league
4) the platform will have a playoff page as well
5) the platform will have a database page where user can come and select a tournament, see all the teams, the fixture and result, and the champion

User authority system
    THE MASTER MANAGER CAN DO ANYTHING AS LONG AS I AM LOGGED IN

<IF TIME PERMIT I WILL DO THE FOLLOWING>
    a) THE TOURNAMENT MANAGER status can create a tournament, add a team, add a player to a team, they can edit the tournament, teams and players, they can delete a tournament, team or a player as well

    b) THE TEAM MANAGER status can create a team, add a player to their team, edit their team and player profile, they can also delete a player

    c) THE PLAYER status can only join a team, edit their personal profile, or delete their profile