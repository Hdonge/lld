/**
 * Cricket Score Update System
 * Requirement:
 * Functional:
 * 1. List down all types of matches and all machines
 * 2. View Match
 * 3. Ball by ball Statistics
 * 4. Deatils of all the scoreboard
 * 
 * Non Functional:
 * Scalable , reliable and Modular
 * 
 * Actors:
 * Admin
 * 
 * 
 * Entities:
 * ScoreUpdateSystem
 * Matches
 * Innings
 * Players
 * Over
 * Wicket
 */

class ScoreUpdateSystem {
    matches: Array<Match> = [];

    getAllMatches(): Array<Match> { return this.matches; }
    viewMatch(matchId: string): Match | undefined { return; }
}

class Match {
    innings: Array<Inning> = [];
    type: MatchType = MatchType.ONEDAY;
    matchId: string = "";
    date: Date = new Date();
    startTime: number = Date.now();
    estEndTime: number = Date.now();
    location: Location | null = null;
    teams: Array<Team> = [];
}

class Inning {
    inningId: string = "";
    overs: Array<Over> = [];
    wickets: Array<Wicket> = [];
    players: Array<Player> = [];
}

class Over {
    overId: string = "";
    runs: number = 0;
    balls: Array<Ball> = [];
}

class Ball {
    type: BallType = BallType.NORMAL;
    ballSpeed: number = 0;
    playedBy: Player | null = null;
    bowledBy: Player | null = null;
    wicket: Wicket | null = null;
    runs: number = 0;
}

enum BallType {
    NORMAL = 'NORMAL',
    WIDE = 'WIDE',
    NOBALL = 'NOBALL',
    WICKET = 'WICKET',
}

class Player {
    name: string = "";
    age: number = 0;
    runs: number = 0;
    strikeRate: number = 0;
    team: Team | null = null;
}

class Team {
    name: string = "";
    players: Array<Player> = [];
    country: string = '';
}

class Wicket {
    type: WicketType = WicketType.BOWLED;
    outPlayer: Player | null = null;
    outBy: Player | null = null;
    catchedBy: Player | null = null;
    runoutBy: Player | null = null;
}

enum WicketType {
    BOWLED = 'BOWLED',
    HITWICKET = 'HITWICKET',
    STRIKEOUT = 'STRIKEOUT',
    RUNOUT = 'RUNOUT',
    CATCH = 'CATCH'
}

enum MatchType {
    T20 = 'T20',
    ONEDAY = 'ONEDAY',
    TEST = 'TEST',
}
