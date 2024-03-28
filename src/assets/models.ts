export interface Annotator {
  id: number;
  name: string;
}

export interface Vacation {
  start: string;
  end: string;
  description: string;
}

export interface AnnotatorVacation {
  id: number;
  name: string;
  start: string;
  end: string;
  description: string;
}
