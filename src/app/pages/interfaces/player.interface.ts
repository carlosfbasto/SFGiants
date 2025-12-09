export type PlayerRole = 'pitcher' | 'catcher' | 'infielder' | 'outfielder' | 'manager';

export type PlayerPosition =
  | 'SP'  // Starting Pitcher
  | 'RP'  // Relief Pitcher
  | 'C'   // Catcher
  | '1B'  // First Base
  | '2B'  // Second Base
  | '3B'  // Third Base
  | 'SS'  // Shortstop
  | 'LF'  // Left Field
  | 'CF'  // Center Field
  | 'RF'; // Right Field

export interface Player {
    id:             number;
    imgUrl:         string;
    name:           string;
    title?:         string;
    jersey:         number;
    age:            number;
    position:       PlayerPosition;
    role:           PlayerRole;
    personalInfo:   PersonalInfo;
    newsGallery:    NewsArticle[];
    stats:          PlayerStats;
}

export interface PersonalInfo {
    bt:           string;
    height:       string; // e.g., "6'1\""
    weight:       number; // in kg
    residence:    string;
    birthDate:    string; // ISO format "YYYY-MM-DD"
    bio?:         string;
    photoUrl?:    string;
    social?:       SocialNetworks;
}                                                

export interface NewsArticle {
    id:         number;
    title:      string;
    imageUrl?:  string;
    date:       string; // ISO format
}

export interface PlayerStats {
    batting?:   BattingStats;
    pitching?:  PitchingStats;
}

export interface BattingStats {
    games:          number;
    atBats:         number;
    runs:           number;
    hits:           number;
    doubles:        number;
    triples:        number;
    homeRuns:       number;
    RBIs:           number;
    walks:          number;
    strikeouts:     number;
    stolenBases:    number;
    average:        number;
    OBP:            number;
    SLG:            number;
    OPS:            number;
    totalBases:     number;
}

export interface PitchingStats {
    wins:           number;
    losses:         number;
    ERA:            number
    gamesPitched:   number;
    inningsPitched: number;
    hits:           number;
    runs:           number;
    earnedRuns:     number;
    homeRuns:       number;
    walks:          number;
    strikeouts:     number;
    WHIP:           number;
}

export interface SocialNetworks {
    facebook:       string;
    whatsapp:       string;
    instagram:      string;
}