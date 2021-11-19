export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
}

export interface Character {
  average_rating: number;
  backdrop_path:  null;
  comments:       { [key: string]: null | string };
  created_by:     CreatedBy;
  description:    string;
  id:             number;
  iso_3166_1:     string;
  iso_639_1:      string;
  name:           string;
  object_ids:     { [key: string]: null | string };
  page:           number;
  poster_path:    null;
  public:         boolean;
  results:        Result[];
  revenue:        number;
  runtime:        number;
  sort_by:        string;
  total_pages:    number;
  total_results:  number;
}

export interface CreatedBy {
  gravatar_hash: string;
  id:            string;
  name:          string;
  username:      string;
}

export interface Result {
  backdrop_path:     string;
  first_air_date:    Date;
  genre_ids:         number[];
  id:                number;
  media_type:        string;
  name:              string;
  origin_country:    string[];
  original_language: string;
  original_name:     string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  vote_average:      number;
  vote_count:        number;
}
export interface Character {
  episode_run_time:     number[];
  first_air_date:       Date;
  genres:               Genre[];
  homepage:             string;
  id:                   number;
  in_production:        boolean;
  languages:            string[];
  last_air_date:        Date;
  last_episode_to_air:  LastEpisodeToAir;
  name:                 string;
  next_episode_to_air:  null;
  networks:             Network[];
  number_of_episodes:   number;
  number_of_seasons:    number;
  origin_country:       string[];
  original_language:    string;
  original_name:        string;
  overview:             string;
  popularity:           number;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons:              Season[];
  spoken_languages:     SpokenLanguage[];
  status:               string;
  tagline:              string;
  type:                 string;
  vote_average:         number;
  vote_count:           number;
}

export interface CreatedBy {
  credit_id:    string;
  name:         string;
  gender:       number;
  profile_path: null | string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface LastEpisodeToAir {
  air_date:        Date;
  episode_number:  number;
  id:              number;
  name:            string;
  overview:        string;
  production_code: string;
  season_number:   number;
  still_path:      string;
  vote_average:    number;
  vote_count:      number;
}

export interface Network {
  name:           string;
  id:             number;
  logo_path:      null | string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface Season {
  air_date:      Date;
  episode_count: number;
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}
